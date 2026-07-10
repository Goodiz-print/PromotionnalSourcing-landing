export const languages = {
  fr: 'Français',
  en: 'English',
} as const

export const defaultLang = 'fr' as const

export const ogLocales = {
  fr: 'fr_FR',
  en: 'en_US',
} as const

export const ui = {
  fr: {
    'seo.title': "Promotional Sourcing.eu — Le sourcing d'objets publicitaires, enfin fiable",
    'seo.description':
      "Plateforme B2B européenne de sourcing d'objets publicitaires : 300 fournisseurs, 1M+ produits, recherche multi-critères qui fonctionne vraiment — contrairement aux solutions existantes.",

    'nav.agences': 'Agences',
    'nav.fournisseurs': 'Fournisseurs',
    'nav.contact': 'Contact',
    'nav.cta': 'Nous contacter',
    'nav.menuAria': 'Ouvrir le menu',
    'nav.switchTo': 'English',
    'nav.login': 'Connexion',
    'nav.loginTitle': 'Disponible au lancement',
    'nav.soon': 'Bientôt',

    'hero.eyebrow': 'Lancement : janvier 2027',
    'hero.titleLine1': "Le sourcing d'objets promotionnels.",
    'hero.titleWord1': 'Simplifié.',
    'hero.titleWord2': 'Intelligent.',
    'hero.titleWord3': 'Européen.',
    'hero.lead':
      "Une plateforme unique pour connecter fournisseurs et agences de communication par l'objet à travers l'Europe.",
    'hero.sub': 'Recherche avancée. Résultats pertinents. IA intégrée.',
    'hero.ctaPrimary': 'Découvrir',
    'hero.ctaSecondary': 'Nous contacter',

    'logoStrip.eyebrow': "Déjà utilisé par des revendeurs dans toute l'Europe",

    'problem.eyebrow': 'Le problème',
    'problem.quote':
      '« Impossible de savoir quel fournisseur peut produire un sac shopping en coton bio ou un sac isotherme en polyester recyclé certifié GRS, sans feuilleter cent catalogues. »',
    'problem.closing': 'Le marché des goodies est fragmenté — les revendeurs perdent un temps fou.',

    'features.eyebrow': 'La solution',
    'features.heading': 'Une plateforme unique pour tout le sourcing européen.',
    'features.search.title': 'Recherche intelligente',
    'features.search.description':
      'Filtrez par matière, grammage, pays de fabrication ou certification — le bon produit en secondes, pas en heures.',
    'features.search.query': 'sac shopping made in europe +200 g/m²',
    'features.search.matchLabel': '2 correspondances parmi 300+ fournisseurs vérifiés',
    'features.search.compareReady': '✓ Comparaison prête en 1 clic',
    'features.search.exploreCatalogue': 'Explorer le catalogue',
    'features.imageSearch.title': 'Recherche par image (IA)',
    'features.imageSearch.description':
      "Déposez la photo du produit que cherche votre client — l'IA retrouve l'équivalent le plus proche parmi 1M+ références.",
    'features.imageSearch.uploadedAlt': "Photo déposée par l'utilisateur",
    'features.imageSearch.dropHint': 'Glissez une photo ici',
    'features.imageSearch.matchResult': '✓ Correspondance 98 % — Sac coton 220g',
    'features.imageSearch.tryButton': 'Essayer la recherche IA',
    'features.compare.title': 'Comparaison instantanée',
    'features.compare.description': 'Prix et MOQ de tous les fournisseurs, côte à côte.',
    'features.compare.button': 'Comparer',
    'features.verified.count': '300+',
    'features.verified.label': 'Fournisseurs européens vérifiés',
    'features.verified.noCommitment': 'Sans engagement',

    'howItWorks.eyebrow': 'Comment ça marche',
    'howItWorks.heading': "Du besoin au fournisseur en trois étapes",
    'howItWorks.subheading': "Le sourcing d'objets publicitaires, enfin simple.",
    'howItWorks.step1Title': 'Recherchez',
    'howItWorks.step1Desc':
      'Recherche multi-critères ou par image (IA) parmi 300 fournisseurs européens et 1M+ produits, dans un seul catalogue.',
    'howItWorks.step2Title': 'Comparez',
    'howItWorks.step2Desc':
      'Prix, MOQ, délais et certifications côte à côte — instantanément, sans feuilleter cent catalogues.',
    'howItWorks.step3Title': 'Commandez',
    'howItWorks.step3Desc': 'Contactez le fournisseur en un clic, réponse sous 24 h.',
    'howItWorks.step1Query': 'sac coton bio 220g',
    'howItWorks.step1Result': '98 % · 12 résultats',
    'howItWorks.step2Best': 'Meilleur prix',
    'howItWorks.step3Cta': 'Contacter',
    'howItWorks.step3Confirm': 'Réponse sous 24 h',

    'stats.heading': 'Au cœur du sourcing européen.',
    'stats.stat1': 'produits référencés dans un seul catalogue',
    'stats.stat2': 'fournisseurs européens vérifiés',
    'stats.stat3': 'de délai de réponse moyen des fournisseurs',
    'stats.stat4': 'de frais cachés, jamais',

    'audience.eyebrow': 'Deux publics, une seule plateforme',
    'audience.heading': 'Que vous cherchiez ou fournissiez, on a pensé à vous.',
    'audience.agency.eyebrow': 'Pour les agences & revendeurs',
    'audience.agency.heading': 'Trouvez le bon produit en quelques secondes.',
    'audience.agency.points': [
      'Recherche multi-critères et par image (IA)',
      'Comparaison instantanée entre fournisseurs',
      'Mise en relation directe, réponse sous 24 h',
    ],
    'audience.agency.cta': 'Voir toutes les fonctionnalités',
    'audience.supplier.eyebrow': 'Pour les fournisseurs',
    'audience.supplier.heading': "Vendez à des milliers d'agences européennes.",
    'audience.supplier.points': [
      'Référencement gratuit de votre catalogue',
      'Intégration de vos données prise en charge (API, CSV, Excel)',
      'Visibilité immédiate dès le lancement',
      'Zéro abonnement, zéro coût d’entrée',
    ],
    'audience.supplier.cta': 'Référencer mon catalogue',

    'finalCta.heading': 'Devenez le réflexe n°1 des acheteurs européens.',
    'finalCta.description':
      'Rejoignez les premiers fournisseurs et agences du réseau européen du sourcing publicitaire.',
    'finalCta.cta': 'Nous contacter',

    'footer.tagline': 'La plateforme de sourcing B2B pour les objets publicitaires en Europe.',
    'footer.columnProduct': 'Produit',
    'footer.columnCompany': 'Entreprise',
    'footer.columnResources': 'Ressources',
    'footer.linkCatalogue': 'Catalogue',
    'footer.linkImageSearch': 'Recherche par image',
    'footer.linkSuppliers': 'Fournisseurs',
    'footer.linkContact': 'Contact',
    'footer.copyright': '© 2026 Promotional Sourcing.eu',
    'footer.madeFor': 'Fait pour les acheteurs et fournisseurs européens',

    'productMockup.tags': ['Matière recyclée', 'Certifié GRS', 'Stock Europe'],
    'productMockup.aiChip': 'Recherche IA',
    'productMockup.verifiedLabel': 'Fournisseur vérifié',
    'productMockup.supplierLabel': 'Fournisseur',
    'productMockup.priceFrom': 'dès',
    'productMockup.priceSuffix': '€ HT',
    'productMockup.footerCompare': 'Comparaison instantanée entre fournisseurs',
    'productMockup.footerFlag': "Aperçu de l'interface",
    'productMockup.ariaLabel':
      "Aperçu d'une recherche sur promotionalsourcing.eu : un sac tote en coton bio, un sac isotherme en polyester recyclé et une serviette de plage recyclée, filtrés par matière recyclée, certification GRS et stock Europe, avec fournisseur vérifié, pays et prix.",
  },
  en: {
    'seo.title': 'Promotional Sourcing.eu — Sourcing promotional products, finally reliable',
    'seo.description':
      'European B2B sourcing platform for promotional products: 300 suppliers, 1M+ products, multi-criteria search that actually works — unlike existing tools.',

    'nav.agences': 'Agencies',
    'nav.fournisseurs': 'Suppliers',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact us',
    'nav.menuAria': 'Open menu',
    'nav.switchTo': 'Français',
    'nav.login': 'Log in',
    'nav.loginTitle': 'Available at launch',
    'nav.soon': 'Soon',

    'hero.eyebrow': 'Launching: January 2027',
    'hero.titleLine1': 'Sourcing promotional products.',
    'hero.titleWord1': 'Simplified.',
    'hero.titleWord2': 'Intelligent.',
    'hero.titleWord3': 'European.',
    'hero.lead':
      'A single platform connecting suppliers and communication agencies through promotional products across Europe.',
    'hero.sub': 'Advanced search. Relevant results. Built-in AI.',
    'hero.ctaPrimary': 'Discover',
    'hero.ctaSecondary': 'Contact us',

    'logoStrip.eyebrow': 'Already used by resellers across Europe',

    'problem.eyebrow': 'The problem',
    'problem.quote':
      '"No way to know which supplier can produce an organic cotton shopping bag or a GRS-certified recycled polyester cooler bag, without flipping through a hundred catalogues."',
    'problem.closing': 'The promotional products market is fragmented — resellers waste countless hours.',

    'features.eyebrow': 'The solution',
    'features.heading': 'One platform for all your European sourcing.',
    'features.search.title': 'Smart search',
    'features.search.description':
      'Filter by material, weight, country of manufacture or certification — the right product in seconds, not hours.',
    'features.search.query': 'made in europe shopping bag +200 g/m²',
    'features.search.matchLabel': '2 matches among 300+ verified suppliers',
    'features.search.compareReady': '✓ Comparison ready in 1 click',
    'features.search.exploreCatalogue': 'Explore the catalogue',
    'features.imageSearch.title': 'Image search (AI)',
    'features.imageSearch.description':
      "Drop in the photo of the product your client is looking for — our AI finds the closest match among 1M+ references.",
    'features.imageSearch.uploadedAlt': 'Photo uploaded by the user',
    'features.imageSearch.dropHint': 'Drop a photo here',
    'features.imageSearch.matchResult': '✓ 98% match — Cotton bag 220g',
    'features.imageSearch.tryButton': 'Try AI search',
    'features.compare.title': 'Instant comparison',
    'features.compare.description': 'Prices and MOQ from every supplier, side by side.',
    'features.compare.button': 'Compare',
    'features.verified.count': '300+',
    'features.verified.label': 'Verified European suppliers',
    'features.verified.noCommitment': 'No commitment',

    'howItWorks.eyebrow': 'How it works',
    'howItWorks.heading': 'From need to supplier in three steps',
    'howItWorks.subheading': 'Sourcing promotional products, finally made simple.',
    'howItWorks.step1Title': 'Search',
    'howItWorks.step1Desc':
      'Multi-criteria or image (AI) search across 300 European suppliers and 1M+ products, in a single catalogue.',
    'howItWorks.step2Title': 'Compare',
    'howItWorks.step2Desc':
      'Prices, MOQ, lead times and certifications side by side — instantly, no more flipping through catalogues.',
    'howItWorks.step3Title': 'Order',
    'howItWorks.step3Desc': 'Contact the supplier in one click, response within 24h.',
    'howItWorks.step1Query': 'organic cotton bag 220g',
    'howItWorks.step1Result': '98% · 12 results',
    'howItWorks.step2Best': 'Best price',
    'howItWorks.step3Cta': 'Contact',
    'howItWorks.step3Confirm': 'Reply within 24h',

    'stats.heading': 'At the heart of European sourcing.',
    'stats.stat1': 'products listed in a single catalogue',
    'stats.stat2': 'verified European suppliers',
    'stats.stat3': 'average supplier response time',
    'stats.stat4': 'hidden fees, ever',

    'audience.eyebrow': 'Two audiences, one platform',
    'audience.heading': 'Whether you search or supply, we built this for you.',
    'audience.agency.eyebrow': 'For agencies & resellers',
    'audience.agency.heading': 'Find the right product in seconds.',
    'audience.agency.points': [
      'Multi-criteria and image (AI) search',
      'Instant comparison between suppliers',
      'Direct contact, response within 24h',
    ],
    'audience.agency.cta': 'See all features',
    'audience.supplier.eyebrow': 'For suppliers',
    'audience.supplier.heading': 'Sell to thousands of European agencies.',
    'audience.supplier.points': [
      'Free listing of your catalogue',
      'Data integration supported (API, CSV, Excel)',
      'Immediate visibility from launch',
      'Zero subscription, zero entry cost',
    ],
    'audience.supplier.cta': 'List my catalogue',

    'finalCta.heading': 'Become the #1 reflex of European buyers.',
    'finalCta.description':
      'Join the first suppliers and agencies of the European promotional sourcing network.',
    'finalCta.cta': 'Contact us',

    'footer.tagline': 'The B2B sourcing platform for promotional products in Europe.',
    'footer.columnProduct': 'Product',
    'footer.columnCompany': 'Company',
    'footer.columnResources': 'Resources',
    'footer.linkCatalogue': 'Catalogue',
    'footer.linkImageSearch': 'Image search',
    'footer.linkSuppliers': 'Suppliers',
    'footer.linkContact': 'Contact',
    'footer.copyright': '© 2026 Promotional Sourcing.eu',
    'footer.madeFor': 'Made for European buyers and suppliers',

    'productMockup.tags': ['Recycled material', 'GRS certified', 'Europe stock'],
    'productMockup.aiChip': 'AI search',
    'productMockup.verifiedLabel': 'Verified supplier',
    'productMockup.supplierLabel': 'Supplier',
    'productMockup.priceFrom': 'from',
    'productMockup.priceSuffix': '€ excl. VAT',
    'productMockup.footerCompare': 'Instant comparison across suppliers',
    'productMockup.footerFlag': 'Interface preview',
    'productMockup.ariaLabel':
      'Preview of a search on promotionalsourcing.eu: an organic cotton tote bag, a recycled polyester cooler bag and a recycled beach towel, filtered by recycled material, GRS certification and Europe stock, with verified supplier, country and price.',
  },
} as const
