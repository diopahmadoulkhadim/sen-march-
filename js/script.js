
/**
 * =====================================================
 * SEN MARCHÉ - MAIN SCRIPT
 * =====================================================
 * Logique métier côté client:
 * - Système de filtrage/recherche produits
 * - Gestion du panier simulé (localStorage)
 * - Validation et envoi formulaires
 * - Auto-remplissage depuis URL
 * 
 * Notes d'architecture:
 * - Pas de dépendances externes (jQuery, etc.)
 * - Utilise localStorage pour persistance données
 * - Bootstrap vanilla pour toasts/modals
 * - Validations HTML5 natives
 * 
 * Auteur: Developer Senior
 * Version: 1.0
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  
  /* ===== INITIALISATION DYNAMIQUE ===== */
  /**
   * Mise à jour année footer
   * Requête: Récupère tous les éléments [data-year]
   * Action: Set l'année actuelle (2026)
   * 
   * Avantage: Pas besoin de modifier HTML chaque année
   */
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  /* ===== MODULE FILTRAGE & RECHERCHE PRODUITS ===== */
  /**
   * Variables du contexte filtrage
   * 
   * search: Input de recherche texte
   * filters: Boutons filtre par catégorie
   * cards: Cartes produits à filtrer
   * empty: Message "pas de résultats"
   * active: Filtre actif actuel ("all", "legumes", "fruits", etc.)
   */
  const search = document.getElementById("productSearch");
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  const empty = document.getElementById("emptyProducts");
  let active = "all";

  /**
   * Fonction principale: Applique les filtres
   * 
   * Logique:
   * 1. Récupère valeur search, nettoie (lowercase, trim)
   * 2. Itère sur chaque carte produit
   * 3. Vérifie: catégorie correspond + texte contient search
   * 4. Affiche/masque la carte selon logique ET
   * 5. Compte éléments visibles
   * 6. Affiche message "pas de résultats" si aucun
   * 
   * Performance: O(n) où n = nombre de produits
   *              Acceptable pour <100 produits
   *              Optimisation possible: debounce search
   */
  function applyFilters(){
    const q = (search?.value || "").toLowerCase().trim();
    let visible = 0;
    
    cards.forEach(card=>{
      // Logique: active == "all" OU catégorie = active
      const matchCat = active === "all" || card.dataset.category === active;
      // Vérifie si le texte de la carte contient la recherche
      const matchText = card.innerText.toLowerCase().includes(q);
      // Affiche seulement si les 2 conditions sont true
      const show = matchCat && matchText;
      
      // Affiche/masque le parent .product-col (pour alignement grille)
      card.closest(".product-col").style.display = show ? "" : "none";
      
      // Compteur pour état vide
      if(show) visible++;
    });
    
    // Affiche message vide si aucun résultat
    if(empty) empty.style.display = visible ? "none" : "block";
  }

  /**
   * Event listeners filtres
   * 
   * Logique:
   * 1. Click sur bouton filtre
   * 2. Retire "active" de tous les boutons
   * 3. Ajoute "active" au bouton cliqué (feedback visuel)
   * 4. Stocke le filtre actif
   * 5. Applique les filtres
   */
  filters.forEach(btn=>{
    btn.addEventListener("click",()=>{
      filters.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      active = btn.dataset.filter;
      applyFilters();
    });
  });
  
  /**
   * Event listener recherche
   * Déclenche applyFilters() à chaque frappe
   * 
   * Note: Pas de debounce car opération rapide
   *       Si base > 1000 produits, ajouter debounce
   */
  search?.addEventListener("input", applyFilters);

  /* ===== MODULE PANIER (localStorage) ===== */
  /**
   * Panier persistant utilisant localStorage
   * 
   * Avantages:
   * - Survit aux rechargement page
   * - Pas de serveur/API requis
   * - Compatible tous navigateurs
   * 
   * Limites:
   * - 5-10 MB max (selon navigateur)
   * - Pas d'authentification utilisateur
   * - Pas de sync entre onglets
   * 
   * Fonctionnalités futures:
   * - Backend persistance
   * - Authentification
   * - Sync temps réel
   */
  
  /**
   * Initialise le panier depuis localStorage
   * Format: Array<{name, price, qty}>
   * Fallback: tableau vide si pas de données
   */
  let cart = JSON.parse(localStorage.getItem("senMarcheCart") || "[]");
  const badge = document.getElementById("cartCount");
  
  /**
   * Fonction: Mise à jour badge compteur
   * 
   * Logique:
   * 1. Somme les quantités de tous les items
   * 2. Affiche le total dans le badge
   * 3. Masque le badge si panier vide
   * 
   * Note: reduce() parcourt le tableau additionne qty
   */
  function updateBadge(){
    const n = cart.reduce((s,i)=>s+i.qty,0);
    if(badge){ 
      badge.textContent=n; 
      badge.style.display=n?"inline-block":"none"; 
    }
  }
  
  /**
   * Event listeners: Boutons "Ajouter au panier"
   * 
   * Logique:
   * 1. Crée objet item {name, price, qty: 1}
   * 2. Cherche si produit existe déjà
   * 3. Si oui: incrémente qty, sinon: ajoute au panier
   * 4. Sauvegarde dans localStorage
   * 5. Met à jour badge
   * 6. Affiche toast notification
   * 
   * Flux: Utilisateur clique → Item dans cart → localStorage → Badge + Toast
   */
  document.querySelectorAll(".add-cart").forEach(btn=>{
    btn.addEventListener("click",()=>{
      // Récupère data du bouton (nom et prix du produit)
      const item = {
        name:btn.dataset.name, 
        price:Number(btn.dataset.price), 
        qty:1
      };
      
      // Cherche si produit déjà dans panier
      const found=cart.find(i=>i.name===item.name);
      
      // Augmente qty ou ajoute nouvel item
      found ? found.qty++ : cart.push(item);
      
      // Sauvegarde dans localStorage (JSON string)
      localStorage.setItem("senMarcheCart",JSON.stringify(cart));
      
      // Met à jour le compteur badge
      updateBadge();
      
      // Affiche notification toast
      const toast=document.getElementById("cartToast");
      if(toast) bootstrap.Toast.getOrCreateInstance(toast).show();
    });
  });
  
  // Initialise le badge au chargement
  updateBadge();

  /* ===== MODULE FORMULAIRE COMMANDE ===== */
  /**
   * Formulaire de commande (commander.html)
   * 
   * Champs:
   * - Nom complet *
   * - Téléphone *
   * - Email (optionnel)
   * - Région *
   * - Produit *
   * - Quantité *
   * - Paiement *
   * - Adresse livraison *
   * - Message (optionnel)
   * 
   * Validation: HTML5 native (required, type="email", etc.)
   * Feedback: Alert success + scroll smooth
   * 
   * Note: Pas d'envoi réel (no backend)
   *       Ajout futur: API POST /commands
   */
  const orderForm=document.getElementById("orderForm");
  if(orderForm){
    orderForm.addEventListener("submit",(e)=>{
      // Empêche comportement par défaut (navigation)
      e.preventDefault();
      
      // Valide le formulaire (HTML5)
      // checkValidity() retourne false si champ invalid
      if(!orderForm.checkValidity()){
        // Ajoute classe Bootstrap pour afficher messages erreur
        orderForm.classList.add("was-validated");
        return;
      }
      
      // Formulaire valide: affiche message succès
      const alertBox=document.getElementById("orderSuccess");
      alertBox.classList.remove("d-none");
      
      // Réinitialise le formulaire
      orderForm.reset();
      orderForm.classList.remove("was-validated");
      
      // Scroll smooth vers le message succès
      // offsetTop - 120: ajuste hauteur navbar fixed
      window.scrollTo({top:alertBox.offsetTop-120,behavior:"smooth"});
    });
  }

  /* ===== MODULE FORMULAIRE CONTACT ===== */
  /**
   * Formulaire de contact (contact.html)
   * 
   * Champs:
   * - Nom complet *
   * - Téléphone *
   * - Email *
   * - Sujet *
   * - Message *
   * 
   * Validation: HTML5 native
   * Feedback: Alert success
   * 
   * Différence commande:
   * - Moins de champs
   * - Pas de quantités/paiements
   * - Meilleure UX pour contact
   */
  const contactForm=document.getElementById("contactForm");
  contactForm?.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    // Validation HTML5
    if(!contactForm.checkValidity()){
      contactForm.classList.add("was-validated");
      return;
    }
    
    // Succès: affiche message
    document.getElementById("contactSuccess").classList.remove("d-none");
    
    // Réinitialise
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });

  /* ===== AUTO-REMPLISSAGE DEPUIS URL ===== */
  /**
   * Cas d'usage: Utilisateur clique "Commander" depuis accueil
   * URL: commander.html?produit=Mangue locale
   * 
   * Logique:
   * 1. Récupère paramètre URL ?produit=
   * 2. Cherche l'option correspondante dans le select
   * 3. La sélectionne (pre-fill formulaire)
   * 
   * Avantage: UX fluide, pré-rempli la commande
   * 
   * Note: Utilisé depuis liens "Commander" des produits
   */
  const params=new URLSearchParams(location.search);
  const wanted=params.get("produit");
  const productSelect=document.getElementById("productSelect");
  
  if(wanted && productSelect){
    // Itère sur les options du select
    // Cherche l'option avec value matching (case-insensitive)
    [...productSelect.options].forEach(o=>{ 
      if(o.value.toLowerCase()===wanted.toLowerCase()) 
        o.selected=true; 
    });
  }

}); // Fin DOMContentLoaded
