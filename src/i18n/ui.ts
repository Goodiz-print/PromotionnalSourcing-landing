export const languages = {
  fr: 'Français',
  en: 'English',
} as const

export const defaultLang = 'fr' as const

export type Lang = keyof typeof languages

export const ogLocales = {
  fr: 'fr_FR',
  en: 'en_US',
} as const

export const ui = {
  fr: {
    'seo.title': "Promotional Sourcing.eu — Le sourcing d'objets publicitaires, enfin fiable",
    'seo.description':
      "Plateforme B2B européenne de sourcing d'objets publicitaires : 300 fournisseurs, 1M+ produits, recherche multi-critères qui fonctionne vraiment — contrairement aux solutions existantes.",

    // Identité de l'entreprise pour les données structurées : doit rester stable
    // d'une page à l'autre, contrairement à seo.description.
    'org.description':
      "Plateforme B2B européenne qui connecte les agences de communication par l'objet aux fournisseurs d'objets publicitaires à travers l'Europe.",
    'og.imageAlt':
      "Promotional Sourcing.eu — Le sourcing d'objets promotionnels. Simplifié. Intelligent. Européen.",

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

    'features.eyebrow': 'Pour les agences',
    'features.heading': 'Trouvez le bon produit en quelques secondes.',
    'features.intro':
      "Fini les allers-retours entre dix catalogues : un seul point d'entrée pour tout le marché européen.",
    'features.closingLink': 'En savoir plus',
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

    'stats.heading': 'Au cœur du sourcing européen.',
    'stats.stat1': 'produits référencés dans un seul catalogue',
    'stats.stat2': 'fournisseurs européens vérifiés',
    'stats.stat3': 'de délai de réponse moyen des fournisseurs',
    'stats.stat4': 'Free access',

    'suppliers.kicker': 'Pour les fournisseurs',
    'suppliers.heading': "Rendez vos produits visibles auprès de milliers d'agences européennes.",
    'suppliers.intro':
      'Vous fournissez votre catalogue, nous faisons le reste. Votre visibilité démarre dès le lancement.',
    'suppliers.point1Title': 'Référencement gratuit de votre catalogue',
    'suppliers.point1Desc': "Vos produits intégrés et consultables par les agences, sans frais d'entrée.",
    'suppliers.point2Title': "On s'occupe de l'intégration de vos données",
    'suppliers.point2Desc':
      "API, CSV ou export Excel : envoyez vos données dans le format que vous avez, notre équipe gère l'intégration.",
    'suppliers.point3Title': 'Visibilité immédiate dès le lancement',
    'suppliers.point3Desc':
      'Les premiers catalogues référencés seront en ligne au jour J, face à toutes les agences inscrites.',
    'suppliers.point4Title': "Zéro friction, zéro coût d'entrée",
    'suppliers.point4Desc':
      "Pas d'abonnement, pas de développement de votre côté : rejoindre la plateforme est simple et gratuit.",
    'suppliers.cta': 'Référencer mon catalogue',

    'finalCta.badge': 'Lancement prévu : janvier 2027',
    'finalCta.heading': 'Nous construisons la nouvelle référence du sourcing de goodies en Europe.',
    'finalCta.descriptionBefore': 'Fournisseurs : rejoignez les premiers partenaires et bénéficiez d’une ',
    'finalCta.descriptionHighlight': 'visibilité prioritaire',
    'finalCta.descriptionAfter': ' dès le lancement.',
    'finalCta.cta': 'Nous contacter',

    'footer.location': 'Bordeaux, France',
    'footer.columnPlatform': 'Plateforme',
    'footer.columnLegal': 'Légal',
    'footer.linkAgencies': 'Agences',
    'footer.linkSuppliers': 'Fournisseurs',
    'footer.linkContact': 'Contact',
    'footer.linkLegalMentions': 'Mentions légales',
    'footer.linkPrivacy': 'Confidentialité',
    'footer.copyright': '© 2026 Promotional Sourcing',
    'footer.domain': 'promotional-sourcing.eu',

    'contact.seoTitle': 'Contact — Promotional Sourcing.eu',
    'contact.seoDescription':
      "Agence ou fournisseur d'objets publicitaires ? Parlons de votre besoin de sourcing en Europe. Réponse sous 48 h.",
    'contact.eyebrow': 'Contact',
    'contact.heading': 'Parlons de votre besoin.',
    'contact.intro':
      "Agence à la recherche du bon produit, ou fournisseur qui veut rejoindre la plateforme : dites-nous en quelques lignes ce que vous cherchez, nous revenons vers vous sous 48 h.",
    'contact.asideTitle': 'Nous écrire directement',
    'contact.asideAddressTitle': 'Nos bureaux',
    'contact.asideResponseTitle': 'Délai de réponse',
    'contact.asideResponse': 'Sous 48 h ouvrées.',
    'contact.formHeading': 'Votre demande',
    'contact.fieldName': 'Nom et prénom',
    'contact.fieldCompany': 'Société',
    'contact.fieldRole': 'Vous êtes',
    'contact.fieldRolePlaceholder': 'Sélectionnez…',
    'contact.fieldRoleAgency': 'Agence / acheteur',
    'contact.fieldRoleSupplier': 'Fournisseur / fabricant',
    'contact.fieldRoleOther': 'Autre',
    'contact.fieldEmail': 'E-mail professionnel',
    'contact.fieldPhone': 'Téléphone',
    'contact.fieldPhoneOptional': 'facultatif',
    'contact.fieldMessage': 'Votre besoin',
    'contact.fieldMessagePlaceholder':
      'Type de produit, quantité, délai, marché visé…',
    'contact.honeypot': 'Ne remplissez pas ce champ',
    'contact.submit': 'Envoyer ma demande',
    'contact.requiredHint': 'Les champs marqués d’un astérisque (*) sont obligatoires.',
    'contact.privacyBefore': 'Vos données servent uniquement à traiter votre demande. Voir notre ',
    'contact.privacyLink': 'politique de confidentialité',
    'contact.privacyAfter': '.',

    'thanks.seoTitle': 'Message bien reçu — Promotional Sourcing.eu',
    'thanks.seoDescription': 'Votre demande a bien été transmise à notre équipe.',
    'thanks.eyebrow': 'Message envoyé',
    'thanks.heading': 'Merci, votre message est bien parti.',
    'thanks.body':
      'Notre équipe revient vers vous sous 48 h ouvrées. En attendant, vous pouvez nous écrire directement à',
    'thanks.backHome': "Retour à l'accueil",

    'legal.seoTitle': 'Mentions légales — Promotional Sourcing.eu',
    'legal.seoDescription':
      'Mentions légales du site promotional-sourcing.eu : éditeur, hébergeur, propriété intellectuelle.',
    'privacy.seoTitle': 'Politique de confidentialité — Promotional Sourcing.eu',
    'privacy.seoDescription':
      'Comment PROMOTIONAL SOURCING collecte, utilise et protège vos données personnelles, conformément au RGPD.',
    'legal.updatedOn': 'Dernière mise à jour :',

    'productMockup.tags': ['Matière recyclée', 'Certifié GRS', 'Stock Europe'],
    'productMockup.products': [
      { name: 'Sac tote coton bio 220g', country: 'France' },
      { name: 'Sac isotherme polyester recyclé', country: 'Suède' },
      { name: 'Serviette de plage recyclée', country: 'Espagne' },
    ],
    'productMockup.aiChip': 'Recherche IA',
    'productMockup.verifiedLabel': 'Fournisseur vérifié',
    'productMockup.supplierLabel': 'Fournisseur',
    'productMockup.priceFrom': 'dès',
    'productMockup.priceSuffix': '€ HT',
    'productMockup.footerCompare': 'Comparaison instantanée entre fournisseurs',
    'productMockup.footerFlag': "Aperçu de l'interface",
    'productMockup.ariaLabel':
      "Aperçu d'une recherche sur promotional-sourcing.eu : un sac tote en coton bio, un sac isotherme en polyester recyclé et une serviette de plage recyclée, filtrés par matière recyclée, certification GRS et stock Europe, avec fournisseur vérifié, pays et prix.",
  },
  en: {
    'seo.title': 'Promotional Sourcing.eu — Sourcing promotional products, finally reliable',
    'seo.description':
      'European B2B sourcing platform for promotional products: 300 suppliers, 1M+ products, multi-criteria search that actually works — unlike existing tools.',

    'org.description':
      'European B2B platform connecting promotional product agencies with suppliers across Europe.',
    'og.imageAlt':
      'Promotional Sourcing.eu — Sourcing promotional products. Simplified. Intelligent. European.',

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

    'features.eyebrow': 'For agencies',
    'features.heading': 'Find the right product in seconds.',
    'features.intro':
      "No more flipping between ten catalogues: a single entry point for the whole European market.",
    'features.closingLink': 'Learn more',
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

    'stats.heading': 'At the heart of European sourcing.',
    'stats.stat1': 'products listed in a single catalogue',
    'stats.stat2': 'verified European suppliers',
    'stats.stat3': 'average supplier response time',
    'stats.stat4': 'Free access',

    'suppliers.kicker': 'For suppliers',
    'suppliers.heading': 'Make your products visible to thousands of European agencies.',
    'suppliers.intro': 'You supply the catalogue, we do the rest. Your visibility starts at launch.',
    'suppliers.point1Title': 'Free listing of your catalogue',
    'suppliers.point1Desc': 'Your products integrated and searchable by agencies, with no entry fee.',
    'suppliers.point2Title': 'We handle your data integration',
    'suppliers.point2Desc':
      'API, CSV or Excel export: send us your data in whatever format you have, our team handles the integration.',
    'suppliers.point3Title': 'Immediate visibility from launch',
    'suppliers.point3Desc': 'The first listed catalogues will be live on day one, in front of every registered agency.',
    'suppliers.point4Title': 'Zero friction, zero entry cost',
    'suppliers.point4Desc': 'No subscription, no development on your end: joining the platform is simple and free.',
    'suppliers.cta': 'List my catalogue',

    'finalCta.badge': 'Launching: January 2027',
    'finalCta.heading': 'We are building the new reference for promotional sourcing in Europe.',
    'finalCta.descriptionBefore': 'Suppliers: join the first partners and get ',
    'finalCta.descriptionHighlight': 'priority visibility',
    'finalCta.descriptionAfter': ' from launch.',
    'finalCta.cta': 'Contact us',

    'footer.location': 'Bordeaux, France',
    'footer.columnPlatform': 'Platform',
    'footer.columnLegal': 'Legal',
    'footer.linkAgencies': 'Agencies',
    'footer.linkSuppliers': 'Suppliers',
    'footer.linkContact': 'Contact',
    'footer.linkLegalMentions': 'Legal notice',
    'footer.linkPrivacy': 'Privacy',
    'footer.copyright': '© 2026 Promotional Sourcing',
    'footer.domain': 'promotional-sourcing.eu',

    'contact.seoTitle': 'Contact — Promotional Sourcing.eu',
    'contact.seoDescription':
      'Agency or supplier of promotional products? Let’s talk about your sourcing needs in Europe. Reply within 48 h.',
    'contact.eyebrow': 'Contact',
    'contact.heading': 'Tell us what you need.',
    'contact.intro':
      'Whether you are an agency looking for the right product or a supplier who wants to join the platform, tell us briefly what you are after — we get back to you within 48 hours.',
    'contact.asideTitle': 'Email us directly',
    'contact.asideAddressTitle': 'Our office',
    'contact.asideResponseTitle': 'Response time',
    'contact.asideResponse': 'Within 48 business hours.',
    'contact.formHeading': 'Your enquiry',
    'contact.fieldName': 'Full name',
    'contact.fieldCompany': 'Company',
    'contact.fieldRole': 'You are',
    'contact.fieldRolePlaceholder': 'Select…',
    'contact.fieldRoleAgency': 'Agency / buyer',
    'contact.fieldRoleSupplier': 'Supplier / manufacturer',
    'contact.fieldRoleOther': 'Other',
    'contact.fieldEmail': 'Work email',
    'contact.fieldPhone': 'Phone',
    'contact.fieldPhoneOptional': 'optional',
    'contact.fieldMessage': 'Your needs',
    'contact.fieldMessagePlaceholder': 'Product type, quantity, deadline, target market…',
    'contact.honeypot': 'Do not fill in this field',
    'contact.submit': 'Send my enquiry',
    'contact.requiredHint': 'Fields marked with an asterisk (*) are required.',
    'contact.privacyBefore': 'Your data is only used to handle your enquiry. See our ',
    'contact.privacyLink': 'privacy policy',
    'contact.privacyAfter': '.',

    'thanks.seoTitle': 'Message received — Promotional Sourcing.eu',
    'thanks.seoDescription': 'Your enquiry has been sent to our team.',
    'thanks.eyebrow': 'Message sent',
    'thanks.heading': 'Thanks — your message is on its way.',
    'thanks.body':
      'Our team will get back to you within 48 business hours. In the meantime, you can email us directly at',
    'thanks.backHome': 'Back to home',

    'legal.seoTitle': 'Legal notice — Promotional Sourcing.eu',
    'legal.seoDescription':
      'Legal notice for promotional-sourcing.eu: publisher, host, intellectual property.',
    'privacy.seoTitle': 'Privacy policy — Promotional Sourcing.eu',
    'privacy.seoDescription':
      'How PROMOTIONAL SOURCING collects, uses and protects your personal data, in accordance with the GDPR.',
    'legal.updatedOn': 'Last updated:',

    'productMockup.tags': ['Recycled material', 'GRS certified', 'Europe stock'],
    'productMockup.products': [
      { name: 'Organic cotton tote bag 220g', country: 'France' },
      { name: 'Recycled polyester cooler bag', country: 'Sweden' },
      { name: 'Recycled beach towel', country: 'Spain' },
    ],
    'productMockup.aiChip': 'AI search',
    'productMockup.verifiedLabel': 'Verified supplier',
    'productMockup.supplierLabel': 'Supplier',
    'productMockup.priceFrom': 'from',
    'productMockup.priceSuffix': '€ excl. VAT',
    'productMockup.footerCompare': 'Instant comparison across suppliers',
    'productMockup.footerFlag': 'Interface preview',
    'productMockup.ariaLabel':
      'Preview of a search on promotional-sourcing.eu: an organic cotton tote bag, a recycled polyester cooler bag and a recycled beach towel, filtered by recycled material, GRS certification and Europe stock, with verified supplier, country and price.',
  },
} as const
