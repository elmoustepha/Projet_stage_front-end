 /* si l'utilisateur clique sur le  button 'Affiche', 
 sera affiche  "<ul> .... </ul> Valeur Total ... " sous forme de texte HTML
*/
 function chargerPortefeuille() {
     // Recupere le valeur de la portefeuille et afficher comme texte HTML
 const valeur =   document.getElementById('portefeuilleValeur').innerHTML =   
 `
                    1-Bitcoin : 7000 USD.
                    <br>
                    2-Ethereum : 300 USD.
                <br> <br>
                Valeur Totale est : 7300 USD`;

}
 // si l'utilisateur clique sur le  button 'Définir l'alerte', il verra l'alerte comme "Ensemble d'alertes..." 
 function definirPrixAlert() {
    
    alert("Ensemble d'alertes de prix !");
  
}