/**
 * =====================================================
 * SEN MARCHÉ - COMMENTAIRES HTML STRUCTURAUX
 * =====================================================
 * 
 * Ce document explique la structure de chaque page HTML
 * Les pages HTML du projet sont minifiées pour réduire
 * la taille. Les commentaires structurels sont ici.
 * 
 * =====================================================
 */

/*
═══════════════════════════════════════════════════════
1. INDEX.HTML - PAGE D'ACCUEIL
═══════════════════════════════════════════════════════
*/

// HEAD - Méta données et imports
// ─────────────────────────────
// - Charset UTF-8: Support français (accents, etc.)
// - Viewport: Responsive mobile-first
// - Meta description: SEO Google
// - Imports Bootstrap 5.3 + Custom CSS

// BODY
// ─────────────────────────────

// [1] NAVBAR - Navigation fixe (fixed-top)
// - Logo "Sen Marché" + icône panier
// - Menu responsive: hamburger mobile, horizontal desktop
// - Badge panier (#cartCount): Affiche nombre articles
// - Lien "Panier" → commander.html
// - Liens: Accueil, Produits, Producteurs, Commander, FAQ, Contact

// [2] HERO SECTION - Section d'impact (680px hauteur)
// - Carousel Bootstrap (3 slides, fade transition)
// - Images Unsplash (1800x680px, assombries avec filter)
// - 3 messages marketing avec CTA différentes
// - Indicateurs slide + contrôles prev/next

// [3] CATÉGORIES SECTION
// - Titre "Nos catégories" + sous-titre
// - Grille 4 colonnes (responsive 1-2-3-4)
// - 4 cards: Légumes, Fruits, Poisson&Viande, Artisanat
// - Image 230px, badge titre, description courte
// - Lien "Voir les produits" → produits.html avec ancre (#legumes, etc.)

// [4] PRODUITS PHARES SECTION
// - Titre "Produits de saison"
// - Bouton "Tout le catalogue" (top-right)
// - Grille 6 produits (3 colonnes desktop)
// - Chaque card: Image, catégorie (badge), nom, prix, bouton "Commander"
// - Liens commander: commander.html?produit=PRODUIT_NAME
//   (déclenche auto-fill du select produit)

// [5] SECTION STATS (Fond vert foncé)
// - 4 statistiques: 100% locaux, 4 catégories, 4 producteurs, 24/7
// - Grands chiffres + texte blanc
// - Crée credibilité + engagement

// [6] CTA FINAL (Gradient vert)
// - "Soutenez celles et ceux..."
// - Bouton "Passer une commande"
// - Lead magnet avant footer

// [7] FOOTER
// - Logo + description plateforme
// - Liens rapides: Accueil, Produits, Producteurs, FAQ
// - Contact: Tél, Email, Localisation
// - Paiements: Wave, Orange Money, Paiement à la livraison
// - Socials: Facebook, Instagram, WhatsApp (liens #)
// - Année dynamique [data-year] (mise à jour JS)
// - Copyright text

/*
═══════════════════════════════════════════════════════
2. PRODUITS.HTML - CATALOGUE & FILTRAGE
═══════════════════════════════════════════════════════
*/

// [1] PAGE HERO
// - Titre "Des produits locaux, simplement."
// - Description catalogue

// [2] FILTRES & RECHERCHE
// - Input search (#productSearch): texte libre temps réel
// - Boutons filtre [data-filter="all|legumes|fruits|poisson|artisanat"]
// - Bouton "Tous" est actif par défaut (.active)

// [3] GRILLE PRODUITS (14 total)
// - Wrapper .row g-4 (grid 4 colonnes gap)
// - Chaque produit:
//   ├─ .product-col (wrapper responsive)
//   ├─ .product-card [data-category="..."]
//   ├─ Image 230px
//   ├─ Badge catégorie
//   ├─ Nom produit
//   ├─ Description courte
//   ├─ Prix FCFA
//   └─ Bouton "Ajouter" (.add-cart [data-name][data-price])

// Catégories et produits:
// LÉGUMES (5): Tomates, Oignons, Carottes, Salade, Champignons
// FRUITS (3): Mangue, Orange, Pastèque
// POISSON & VIANDE (3): Poisson, Poulet, Viande de bœuf
// ARTISANAT (3): Panier, Sac, Décoration

// [4] ÉTAT VIDE
// - #emptyProducts: Affiché si zéro résultats
// - Texte: "Aucun produit ne correspond à votre recherche"

// [5] TOAST NOTIFICATION
// - #cartToast: Bootstrap toast (apparaît bas-droit)
// - Message: "Produit ajouté au panier simulé"
// - Déclenché lors du click "Ajouter"

// [6] FOOTER (identique index.html)

/*
═══════════════════════════════════════════════════════
3. PRODUCTEURS.HTML - VITRINE PRODUCTEURS
═══════════════════════════════════════════════════════
*/

// [1] PAGE HERO
// - Titre "Nos producteurs"
// - Description: "Des femmes et des hommes qui cultivent..."

// [2] GRILLE PRODUCTEURS (4 cartes)
// Chaque card:
// ├─ Foto (290px height)
// ├─ Badge localité (Thiès, Saint-Louis, Casamance)
// ├─ Nom producteur
// ├─ Spécialité (badge vert "Légumes", "Fruits", etc.)
// ├─ Description (1-2 lignes)
// └─ Lien "Contacter" → commander.html

// Producteurs présents:
// 1. Awa Diop (Thiès) - Maraîchère - Légumes
// 2. Mamadou Fall (Saint-Louis) - Producteur fruits - Fruits
// 3. Ousmane Ba (Casamance) - Agriculteur familial - Riz & Fruits
// 4. (Complément possible)

// [3] SECTION MISSION (fond blanc)
// - Titre "Créer une relation directe"
// - Texte: "Sen Marché donne de la visibilité..."
// - Bloc CTA "Vous êtes producteur?"
// - Lien → contact.html

// [4] FOOTER

/*
═══════════════════════════════════════════════════════
4. COMMANDER.HTML - FORMULAIRE COMMANDE
═══════════════════════════════════════════════════════
*/

// [1] PAGE HERO
// - Titre "Passez votre commande"
// - Sous-titre: "Remplissez le formulaire. Envoi simulé côté navigateur."

// [2] GRILLE 2 COLONNES (8-4)

// COLONNE 1 (8/12): FORMULAIRE COMPLET
// ─────────────────────────────────────
// Card form.needs-validation (#orderForm)

// Champs:
// ├─ [Nom complet] text *required
// ├─ [Téléphone] tel *required
// ├─ [E-mail] email (optionnel)
// ├─ [Région] select *required
// │  Options: Dakar, Thiès, Saint-Louis, Ziguinchor/Casamance, Autre
// ├─ [Produit souhaité] select#productSelect *required
// │  Auto-remplit si URL: commander.html?produit=Mangue%20locale
// │  Options: 15 produits (statique, vérifier synchronisation produits.html)
// ├─ [Quantité] number *required (min=1, default=1)
// ├─ [Mode paiement] select *required
// │  Options: Wave, Orange Money, Paiement à la livraison
// ├─ [Adresse livraison] textarea *required
// ├─ [Message] textarea (optionnel, champ libre)
// └─ [Bouton] "Envoyer la commande" (type=submit)

// Validation:
// - HTML5 native (checkValidity)
// - Si invalid: classe .was-validated (affiche messages Bootstrap)
// - Si valide: affiche alert succès + scroll

// Alert succès (#orderSuccess):
// - Initialement: .d-none (masqué)
// - Texte: "Commande envoyée avec succès!"
// - Après submit: classe removed, affiche message
// - Scroll smooth: -120px (hauteur navbar)

// COLONNE 2 (4/12): SIDEBAR INFO
// ─────────────────────────────────────
// Card info-card

// Titre: "Comment ça marche?"
// 3 étapes numérotées:
// 1. Choisissez: Sélectionnez votre produit
// 2. Renseignez: Indiquez coordonnées + quantité
// 3. Envoyez: Votre demande confirmée

// HR séparateur

// H4: "Paiements présentés"
// - Wave · Orange Money · Paiement à la livraison

// Alert warning (petit):
// - "Aucun paiement réel n'est effectué sans intégration API"

// [3] FOOTER

/*
═══════════════════════════════════════════════════════
5. CONTACT.HTML - FORMULAIRE CONTACT
═══════════════════════════════════════════════════════
*/

// [1] PAGE HERO
// - Titre "Parlons de commerce local"
// - Sous-titre: "Une question, une suggestion..."

// [2] GRILLE 2 COLONNES (5-7)

// COLONNE 1 (5/12): COORDONNÉES
// ─────────────────────────────────────
// Titre: "Nos coordonnées"

// Infos (icône + texte):
// ├─ 📞 Téléphone: +221 XX XXX XX XX
// ├─ ✉️  E-mail: contact@senmarche.sn
// ├─ 💬 WhatsApp: Disponible
// ├─ 📍 Adresse: Dakar, Sénégal
// └─ 🕐 Horaires: Lundi – Samedi

// COLONNE 2 (7/12): FORMULAIRE CONTACT
// ─────────────────────────────────────
// Card contact-card

// Form#contactForm.needs-validation

// Champs:
// ├─ [Nom complet] text *required
// ├─ [Téléphone] tel *required
// ├─ [E-mail] email *required
// ├─ [Sujet] text *required
// ├─ [Message] textarea *required
// └─ [Bouton] "Envoyer le message" (type=submit)

// Validation: Identique commander.html

// Alert succès (#contactSuccess):
// - Masqué par défaut (.d-none)
// - Texte: "Message envoyé avec succès!"

// [3] FOOTER

/*
═══════════════════════════════════════════════════════
6. FAQ.HTML - QUESTIONS FRÉQUENTES
═══════════════════════════════════════════════════════
*/

// [1] PAGE HERO
// - Titre "Questions fréquentes"
// - Sous-titre: "Les réponses essentielles..."

// [2] ACCORDION BOOTSTRAP
// - #faq (parent accordion)
// - 6 items accordion:

// Q1: "Comment commander?"
// R1: Explique processus: Produit → Formulaire → Confirmation

// Q2: "Quels sont les moyens de paiement?"
// R2: Wave, Orange Money, Paiement à la livraison (simulé)

// Q3: "Où livrez-vous?"
// R3: Dépend producteurs + localisation client

// Q4: "Puis-je contacter un producteur?"
// R4: Oui, profils + page Contact

// Q5: "Les produits sont-ils locaux?"
// R5: Oui, 100% producteurs/artisans Sénégal

// Q6: "Quel est le délai de livraison?"
// R6: Dépend producteur + client, à confirmer

// [3] CTA FINALE
// - Texte: "Vous ne trouvez pas votre réponse?"
// - Bouton: "Nous contacter" → contact.html

// [4] FOOTER

/*
═══════════════════════════════════════════════════════
7. DONNÉES PRODUITS (STATIQUE)
═══════════════════════════════════════════════════════
*/

// NOTE: Produits codés en dur dans HTML (pas de base données)
// Pour ajouter produit: Duplier <article class="product-card">

// Structure complète:
// <article class="product-card" data-category="CATEGORY">
//   <img src="..." alt="...">
//   <div class="card-body">
//     <span class="badge-soft">CATEGORY</span>
//     <h3 class="h5 mt-3">PRODUCT NAME</h3>
//     <p class="text-secondary small">Description</p>
//     <div class="d-flex justify-content-between align-items-center mt-3">
//       <span class="price">PRICE FCFA</span>
//       <button class="btn btn-brand btn-sm add-cart" 
//               data-name="PRODUCT NAME" 
//               data-price="PRICE_NUMBER">
//         <i class="bi bi-cart-plus"></i> Ajouter
//       </button>
//     </div>
//   </div>
// </article>

// Categories valides: legumes, fruits, poisson, artisanat
// Nomenclature: data-name et bouton doivent matcher exactement

/*
═══════════════════════════════════════════════════════
8. ATTRIBUTS DATA CLÉS
═══════════════════════════════════════════════════════
*/

// data-year (footer)
// ├─ Utilisé par JS pour mettre à jour année dynamiquement
// └─ Pattern: <span data-year>2026</span>

// data-filter (produits.html)
// ├─ Valeurs: "all", "legumes", "fruits", "poisson", "artisanat"
// ├─ Utilisé pour filtrer par catégorie
// └─ Pattern: <button data-filter="legumes">Légumes</button>

// data-category (produits.html)
// ├─ Valeurs: "legumes", "fruits", "poisson", "artisanat"
// ├─ Attaché au <article class="product-card">
// └─ Utilisé pour associer produit à catégorie

// data-name (produits.html, commander.html)
// ├─ Nom exact du produit
// ├─ Attaché au bouton .add-cart
// └─ Sauvegardé dans localStorage

// data-price (produits.html, commander.html)
// ├─ Prix en FCFA (nombre)
// ├─ Attaché au bouton .add-cart
// └─ Sauvegardé dans localStorage

/*
═══════════════════════════════════════════════════════
9. FLUX UTILISATEUR (UX JOURNEY)
═══════════════════════════════════════════════════════
*/

// SCÉNARIO 1: Découvrir produits
// ──────────────────────────────
// index.html
//   ↓ Click "Découvrir produits" (hero CTA)
// produits.html
//   ↓ Recherche/Filtre produits
//   ↓ Click "Ajouter" (localStorage update + toast)
// produits.html (panier badge ++)
//   ↓ Click "Panier" (navbar badge)
// commander.html
//   ↓ Remplir formulaire
//   ↓ Submit
// Alert succès + scroll vers message

// SCÉNARIO 2: Commander depuis index
// ──────────────────────────────
// index.html (produit phare)
//   ↓ Click "Commander" (avec ?produit=PRODUIT)
// commander.html?produit=Mangue%20locale
//   ↓ Select produit pré-rempli (auto-fill JS)
//   ↓ Remplir reste formulaire
//   ↓ Submit

// SCÉNARIO 3: Contacter producteur
// ──────────────────────────────
// producteurs.html
//   ↓ Click "Contacter"
// commander.html
//   ↓ Remplir commande

// SCÉNARIO 4: Besoin d'aide
// ──────────────────────────────
// N'importe quelle page
//   ↓ Click "Contact" (navbar)
// contact.html
//   ↓ Remplir formulaire contact
//   ↓ Submit

/*
═══════════════════════════════════════════════════════
10. CONVENTIONS DE CODAGE HTML
═══════════════════════════════════════════════════════
*/

// Classes Bootstrap utilisées régulièrement:
// - .container        : Largeur max 1140px, centré
// - .row              : Conteneur colonnes (flex)
// - .col-* / .col-lg-* : Colonne responsive
// - .g-4              : Gap 1.5rem entre colonnes
// - .mb-*, .mt-*, etc : Margins (Bootstrap spacing scale)
// - .text-*           : Couleur texte
// - .fw-bold          : Font-weight 700
// - .text-secondary   : Couleur texte secondaire (--muted)
// - .d-flex           : Display flex
// - .align-items-*    : Align items flex
// - .justify-content-*: Justify content flex
// - .py-*, .px-*      : Padding vertical/horizontal
// - .d-none           : Display none

// IDs d'éléments JS clés:
// - #mainNav          : Menu collapse navbar
// - #cartCount        : Badge compteur panier
// - #heroCarousel     : Carousel accueil
// - #productSearch    : Input recherche produits
// - #emptyProducts    : Message pas de résultats
// - #cartToast        : Toast notification panier
// - #orderForm        : Formulaire commande
// - #orderSuccess     : Alert succès commande
// - #productSelect    : Select produit commander
// - #contactForm      : Formulaire contact
// - #contactSuccess   : Alert succès contact

// Classes CSS personnalisées clés:
// - .navbar           : Navigation principale
// - .hero             : Section héro
// - .hero-caption     : Texte overlay héro
// - .section          : Conteneur section générique
// - .category-card    : Carte catégorie
// - .product-card     : Carte produit
// - .product-col      : Wrapper colonne produit
// - .producer-card    : Carte producteur
// - .badge-soft       : Badge catégorie
// - .price            : Texte prix
// - .btn-brand        : Bouton primaire vert
// - .btn-outline-brand: Bouton secondaire vert contour
// - .footer           : Footer
// - .stats            : Section statistiques
// - .cta              : Section call-to-action (gradient)
// - .page-hero        : Hero pages internes
// - .contact-card     : Card formulaire

/*
═══════════════════════════════════════════════════════
FIN DE DOCUMENTATION HTML
═══════════════════════════════════════════════════════
*/
