// Initialisation des tableaux :
// Tableau pour stocker les cryptomonnaies
const portefeuille = []; 
// Tableau pour enregistrer l'historique des actions
const histoire = []; 

// Fonction pour mettre a jour des informations personnelles
function mettreajour(){
    // Recupere le nom des informations personnelles
    const name = document.getElementById("mettre-name").value;
     // Recupere le email des informations personnelles
    const email = document.getElementById("mettre-email").value;

    // Verifie que les champs ne sont pas vides
    if( name && email ){
         // Ajoute des informations personnelles
        portefeuille.push({ name , email});
         // Enregistre l'action avec la date et l'heure actuelle
        histoire.push({
            action: 'Mettre à jour ', name , email ,
            date:new Date().toLocaleString() });
            // Affiche un message de validation
        alert(`${name} profil mis à jour avec succès. `);

    }
    else{
        // Alerte si les champs ne sont pas remplis
        alert("veuillez remplir tous les champs des 'Informations Personnelles'.");
    }
}


// Fonction pour activer l'authentification a deux facteurs
function activer(){
    // Alerte un message de l'authentification
     alert('Authentification à deux facteurs activée.');
 
 }


// Fonction pour modifier le  mot de passe
function modifier(){
    // Récupère le mot de passe actual
    const passwordactual = document.getElementById("motdepasse").value;
    // Récupère le mot de passe nouveau
    const passwordnouveau = document.getElementById("motdepasse").value;

// Verifie que les champs ne sont pas vides
    if( passwordactual && passwordnouveau ){
        // Alerte si les champs est remplis
        alert("Mot de passe modifiée avec succès.");

    }
    else{
        // Alerte si les champs ne sont pas remplis
        alert("veuillez remplir tous les champs 'Paramètres de Sécurité'.");
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
        histoireList.textContent = 'Aucune connexion enregistrée.'; 
    } else {
        // Parcourt chaque entrée dans l'historique
        histoire.forEach(enregister => {
            // Crée un élément paragraphe pour chaque entrée
            const histoireItem = document.createElement('p'); 
            // afficher message sous forme texte HTML
            histoireItem.innerHTML = `${enregister.date} - ${enregister.action} : <br> ${enregister.name} (${enregister.email})`;
           // Ajoute l'élément paragraphe 'histoireItem' dans l'élément HTML 'histoireList'
            histoireList.appendChild(histoireItem); 
        });
    }
}  