
 /* si l'utilisateur clique sur le  button 'Se connecter', sera alerte comme suite :
-si l'utilisateur remplit tous les champs "(email et motdepasse)", il verra l'alerte comme "Bienvenue..." 
-si non , il verra l'alerte comme "s'il vous plait..."
*/
function connecter(){

    let Email = document.getElementById("login-email").value;
    let motdepasse = document.getElementById("login-password").value;

    // si l'utilisateur remplit tous les champs "(email et motdepasse)", il verra l'alerte comme "Bienvenue..." 
     if(Email && motdepasse){
        
        alert("Bienvenue sur ma page");
    }
    // si non , il verra l'alerte comme "s'il vous plait..."
    else{
        alert(" s'il vous plaît remplir tous les champs des connexions.");
    }
}
 /* si l'utilisateur clique sur le  button 'S'inscrire', sera alerte comme suite :
-si l'utilisateur remplit tous les champs "(nom et email et password)"", il verra l'alerte comme "Bienvenue et son nom" 
-si non , il verra l'alerte comme "s'il vous plait..."
*/
function inscrire(){

    let nom = document.getElementById("inscription-name").value;
    let email = document.getElementById("inscription-email").value;
    let password = document.getElementById("inscription-password").value; 
 // si l'utilisateur remplit tous les champs "(nom et email et password)"", il verra l'alerte comme "Bienvenue et son nom" 
    if(nom && email && password){

        alert(`Bienvenue, ${nom} ! `);
    }
    // si non , il verra l'alerte comme "s'il vous plait..."
    else{
      alert(" s'il vous plaît remplir tous les champs des inscriptions.");
    }
}
