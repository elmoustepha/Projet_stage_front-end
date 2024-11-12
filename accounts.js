// Initialisation des tableaux :
// Tableau pour stocker les cryptomonnaies
const portefeuille = []; 
// Tableau pour enregistrer l'historique des actions
const histoire = []; 

// Fonction pour ajouter une cryptomonnaie au portefeuille
function ajouter(){
    // Recupere le nom de la cryptomonnaie
    const name = document.getElementById("crypto-name").value; 
    // Recupere le montant de la cryptomonnaie
    const montant = document.getElementById("crypto-montant").value; 

    // Verifie que les champs ne sont pas vides
    if(name && montant) {
        // Ajoute la cryptomonnaie au portefeuille
        portefeuille.push({ name, montant }); 
        // Enregistre l'action avec la date et l'heure actuelle
        histoire.push({
            action: 'Ajouté', name, montant,
            date: new Date().toLocaleString() 
        });
        // Affiche un message de confirmation
        alert(`${name} ajouté avec en ${montant} MRU.`); 
    }
     else {
     // Alerte si les champs ne sont pas remplis
        alert("Veuillez remplir tous les champs des 'Ajouter une cryptomonnaie'."); 
    }
}

// Fonction pour supprimer une cryptomonnaie du portefeuille
function supprimer(){
    // Récupère le nom de la cryptomonnaie à supprimer
    const name = document.getElementById("crypto-name-remove").value; 
    /* -Trouve l'index de la cryptomonnaie dans le portefeuille
    -la methode 'findIndex' est utilisee pour trouver l'index de la cryptomonnaie dans 'portefeuille'
    */
    const index = portefeuille.findIndex(crypto => crypto.name === name); 
    // Vérifie si la cryptomonnaie existe dans le portefeuille
    if(index !== -1){

//  la methode 'splice' uliser pour supprimer si la nom de la cryptomonnaie est trouvee dans 'portefeuille'

        const removedcrypto = portefeuille.splice(index); 
        // Enregistre l'action de suppression avec la date et l'heure actuelle
        histoire.push({
            action: 'Supprimé', name, montant: removedcrypto[0].montant,
            date: new Date().toLocaleString() 
        });
        // Affiche un message de confirmation
        alert(`${name} est supprimé.`); 
    } 
    // Alerte si la cryptomonnaie n'est pas trouvée
    else {
        alert("Cryptomonnaie non trouvée dans le portefeuille."); 
    }
}

// Fonction pour acheter une cryptomonnaie
function acheter(){
    // Récupère le nom de la cryptomonnaie
    const name = document.getElementById("cryptomonnaie-name").value; 
    // Récupère le montant de la cryptomonnaie
    const montant = document.getElementById("cryptomonnaie-montant").value; 

    // Vérifie que les champs ne sont pas vides
    if(name && montant) {
         // Ajoute la cryptomonnaie au portefeuille
        portefeuille.push({ name, montant });
        // Enregistre l'action d'achat avec la date et l'heure actuelle
        histoire.push({
            action: 'Acheté', name, montant,
            date: new Date().toLocaleString() 
        });
        // Affiche un message de confirmation
        alert(`${name} acheté avec en ${montant} MRU.`); 
    }
    // Alerte si les champs ne sont pas remplis
     else {
        alert("Veuillez remplir tous les champs 'Acheter des cryptomonnaies'."); 
    }
}

// Fonction pour afficher l'historique des actions
function historique(){
    // Récupère l'élément HTML pour afficher l'historique
    const histoireList = document.getElementById("histoire-list"); 
    // Vide l'élément HTML
    histoireList.innerHTML = ''; 

    // Vérifie si l'historique est vide
    if(histoire.length === 0) {
        // Affiche un message si l'historique est vide
        histoireList.textContent = 'Aucune transaction enregistrée'; 
    } else {
        // Parcourt chaque entrée dans l'historique
        histoire.forEach(enregister => {
            // Crée un élément paragraphe pour chaque entrée
            const histoireItem = document.createElement('p'); 
            histoireItem.textContent = `${enregister.date} - ${enregister.action} : ${enregister.name} (${enregister.montant})`;
           // Ajoute l'élément paragraphe à l'élément HTML
            histoireList.appendChild(histoireItem); 
        });
    }
}  