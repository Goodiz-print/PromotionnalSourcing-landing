/**
 * Generates every brand raster asset served from public/.
 *
 * Run with `pnpm assets` after changing logo.png, favicon.png or the hero
 * copy in src/i18n/ui.ts. Outputs are committed, so the build stays untouched.
 *
 * Note: sharp's `text` input cannot load a custom font on macOS — Pango uses
 * the CoreText backend there, so `fontfile` is a no-op and only system-installed
 * families resolve. Satori takes font buffers directly, which is why the two
 * text-bearing images go through satori + resvg instead.
 */
import { Resvg } from '@resvg/resvg-js'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import satori from 'satori'
import sharp from 'sharp'

import { ui } from '../src/i18n/ui.ts'

const resolve = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url))

const LOGO = resolve('public/logo.png')
const MARK = resolve('public/favicon.png')
const out = (name) => resolve(`public/${name}`)

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 }
const OG = { width: 1200, height: 630 }

/** Brand gradient, mirroring --gradient-brand in src/styles/global.css. */
const GRADIENT = 'linear-gradient(110deg, #4032c8 0%, #6d3ccf 48%, #a058bb 76%, #d99a55 100%)'

/**
 * Fits `source` inside a square of `size`, keeping `padding` of its width as
 * breathing room, then flattens onto opaque white. Google composites favicons
 * over both light and dark chrome, so transparency has to go.
 */
async function squareIcon(source, size, padding = 0.08) {
	const inner = Math.round(size * (1 - padding * 2))
	const scaled = await sharp(source)
		.resize(inner, inner, { fit: 'contain', background: { ...WHITE, alpha: 0 } })
		.toBuffer()

	return sharp({
		create: { width: size, height: size, channels: 4, background: { ...WHITE, alpha: 0 } },
	})
		.composite([{ input: scaled, gravity: 'centre' }])
		.flatten({ background: WHITE })
		.png()
		.toBuffer()
}

/** The wordmark centred on opaque white — the image Google reads as the org logo. */
async function schemaLogo() {
	const scaled = await sharp(LOGO).resize({ width: Math.round(OG.width * 0.76) }).toBuffer()

	return sharp({
		create: { ...OG, channels: 4, background: WHITE },
	})
		.composite([{ input: scaled, gravity: 'centre' }])
		.flatten({ background: WHITE })
		.png()
		.toBuffer()
}

/**
 * Recolours the wordmark for use on the gradient: everything opaque turns white,
 * except the pixels that were already white — the ".eu" glyph sitting inside the
 * indigo blob — which are knocked out so the gradient shows through them.
 * Painting those white too would merge the glyph into the blob and erase ".eu".
 */
async function whiteWordmark() {
	const { data, info } = await sharp(LOGO)
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true })

	// Splits the near-white glyph (255) from both the black type (0) and the
	// indigo blob (~71), the only three tones in the source.
	const KNOCKOUT_ABOVE = 160

	for (let i = 0; i < data.length; i += info.channels) {
		const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]

		if (luminance > KNOCKOUT_ABOVE) {
			data[i + 3] = 0
		} else {
			data[i] = 255
			data[i + 1] = 255
			data[i + 2] = 255
		}
	}

	return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
		.png()
		.toBuffer()
}

/** Joins the hero headline back into the single sentence used as the OG tagline. */
function tagline(lang) {
	const t = ui[lang]
	return [t['hero.titleLine1'], t['hero.titleWord1'], t['hero.titleWord2'], t['hero.titleWord3']]
		.join(' ')
}

async function ogImage(lang, logoDataUri, fonts) {
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: '0 96px',
					backgroundImage: GRADIENT,
				},
				children: [
					{
						type: 'img',
						props: { src: logoDataUri, width: 560, height: 224 },
					},
					{
						type: 'div',
						props: {
							style: {
								marginTop: 28,
								fontFamily: 'Manrope',
								fontWeight: 800,
								fontSize: 46,
								lineHeight: 1.25,
								color: '#ffffff',
								maxWidth: 900,
							},
							children: tagline(lang),
						},
					},
				],
			},
		},
		{ ...OG, fonts }
	)

	return new Resvg(svg, { fitTo: { mode: 'width', value: OG.width } }).render().asPng()
}

async function main() {
	const fontDir = 'node_modules/@fontsource/manrope/files'
	const fonts = [
		{
			name: 'Manrope',
			weight: 800,
			style: 'normal',
			data: await readFile(resolve(`${fontDir}/manrope-latin-800-normal.woff`)),
		},
		{
			name: 'Manrope',
			weight: 400,
			style: 'normal',
			data: await readFile(resolve(`${fontDir}/manrope-latin-400-normal.woff`)),
		},
	]

	const logoDataUri = `data:image/png;base64,${(await whiteWordmark()).toString('base64')}`

	const assets = [
		['favicon-48.png', () => squareIcon(MARK, 48)],
		['favicon-96.png', () => squareIcon(MARK, 96)],
		['favicon-192.png', () => squareIcon(MARK, 192)],
		['apple-touch-icon.png', () => squareIcon(MARK, 180, 0.12)],
		['icon-512.png', () => squareIcon(MARK, 512)],
		['logo-schema.png', schemaLogo],
		['og-fr.png', () => ogImage('fr', logoDataUri, fonts)],
		['og-en.png', () => ogImage('en', logoDataUri, fonts)],
	]

	for (const [name, build] of assets) {
		const buffer = await build()
		await writeFile(out(name), buffer)
		const { width, height } = await sharp(buffer).metadata()
		console.log(`✓ public/${name} — ${width}×${height}, ${(buffer.length / 1024).toFixed(1)} KB`)
	}
}

await main()
