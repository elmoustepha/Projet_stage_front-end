 /* si l'utilisateur clique sur le  button 'Contactez-nous', sera alerte comme suite :
-si l'utilisateur remplit tous les champs "(name et email et message)", il verra l'alerte comme "Votre message..." 
-si non , il verra l'alerte comme "Veuillez remplir..."
*/
function envoyer() {
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

// si l'utilisateur remplit tous les champs "(name et email et message)", il verra l'alerte comme "Votre message..." 
   
    if (name && email && message) {
   
        alert("Votre message a été envoyé avec succès.");
    } 
    // si non , il vealerte comme "Veuillez remplir..."
    else {
        alert("Veuillez remplir tous les champs 'Contactez-nous'.");
    }
}
