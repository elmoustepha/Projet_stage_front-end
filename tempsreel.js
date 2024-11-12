// <!-- Le code ci-dessous récupère les prix des cryptomonnaies et les affiche dans une liste -->
// <!-- Il affiche également un graphique interactif du prix d'une cryptomonnaie avec une échelle de temps -->

// <!-- La clé API personnelle (remplacez-la par la vôtre si nécessaire) -->
const apiKey = 'YOUR_API_KEY';

// <!-- L'URL complète de l'API -->
const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

//<!-- Récupération et affichage des prix des cryptomonnaies -->
document.addEventListener("DOMContentLoaded", () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // L'élément qui sera ajouté aux prix des cryptomonnaies
            const pricesList = document.getElementById('prices-list');
            // Boucle sur chaque cryptomonnaie dans les données
            data.forEach(coin => {
                // Création d'un élément li nouveau
                const listItem = document.createElement('li');
                // Définition du texte de l'élément li avec le nom et le prix actuel de la cryptomonnaie
                listItem.textContent = `${coin.name}: $${coin.current_price}`;
                // Ajout de l'élément li à la liste
                pricesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des prix:', error));

    // Récupération des données du graphique historique du Bitcoin
    fetchHistoricalData('bitcoin', 7);
});

// <!-- Fonction pour afficher le graphique interactif du prix d'une cryptomonnaie avec une échelle de temps -->
function displayChart(data) {
    // Récupération de l'élément canvas pour le graphique
    const ctx = document.getElementById('price-chart').getContext('2d');
    // Si un graphique précédent existe, le supprimer
    if (window.chart) {
        window.chart.destroy();
    }
    // Création d'un nouveau graphique
    window.chart = new Chart(ctx, {
        type: 'line',
        data: {
            // Conversion des données en dates et valeurs
            labels: data.map(entry => new Date(entry[0])),
            datasets: [{
                // Titre de la série de données
                label: 'Prix',
                // Valeurs des données
                data: data.map(entry => entry[1]),
                // Couleur de la ligne des données
                borderColor: getRandomColor(),
                // Épaisseur de la ligne des données
                borderWidth: 1
            }]
        },
        options: {
            // Options de l'échelle x (date)
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }
            }
        }
    });
}

// <!-- Fonction pour récupérer les données du graphique historique d'une cryptomonnaie -->
function fetchHistoricalData(coinId, days) {
    // L'URL complète de l'API
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
       fetch(url)
        .then(response => response.json())
        .then(data => displayChart(data.prices))
        .catch(error => console.error('Erreur lors de la récupération des données historiques:', error));
}

// <!-- Fonction pour générer une couleur aléatoire -->
function getRandomColor() {
    const colors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// <!-- Fonction pour rechercher une cryptomonnaie -->
document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const resultsList = document.getElementById('search-results');
    resultsList.innerHTML = '';

    if (query) {
        fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
            .then(response => response.json())
            .then(data => {
                data.coins.forEach(coin => {
                    const listItem = document.createElement('li');
                    listItem.textContent = coin.name;
                    listItem.addEventListener('click', () => fetchHistoricalData(coin.id, 7)); // Récupération des données du graphique historique lors du clic
                    resultsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erreur lors de la recherche de cryptomonnaies:', error));
    }
});