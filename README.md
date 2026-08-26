# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📬 Formulaire de contact (Resend)

Le formulaire de `/contact` est traité par la Netlify Function `netlify/functions/contact.mts`,
qui envoie chaque soumission par e-mail via [Resend](https://resend.com) :

- demandes de **contact** → `contact@promotional-sourcing.eu`
- demandes de **partenariat** → `partners@promotional-sourcing.eu`

Configuration requise (une seule fois) :

1. Créer un compte Resend, ajouter le domaine `promotional-sourcing.eu` et poser les
   enregistrements DNS SPF/DKIM demandés (statut « Verified » requis avant tout envoi
   depuis `noreply@promotional-sourcing.eu`).
2. Créer une clé API Resend (permission « Sending access » suffit).
3. Dans Netlify → Site configuration → Environment variables : ajouter `RESEND_API_KEY`
   (voir `.env.example`), puis redéployer.
4. Vérifier que les boîtes `contact@` et `partners@promotional-sourcing.eu` existent chez
   le fournisseur d'e-mail — Resend n'assure que l'envoi, pas la réception.

En dev local (`astro dev`), le POST du formulaire renvoie 404 : la fonction n'est exécutée
que par le runtime Netlify (Deploy Preview, production, ou `netlify dev`).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
