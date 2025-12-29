

/**
 * Exercice 4 — Récupérer les users et afficher seulement leurs usernames
 * Endpoint : https://jsonplaceholder.typicode.com/users
 *
 * Tâches :
 * - Récupérer tous les users
 * - Extraire uniquement les `username` via `.map()`
 * - Afficher la liste proprement
 */
async function fetchUsers(url = 'https://jsonplaceholder.typicode.com/users') {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAndListUsernames(url) {
    const users = await fetchUsers(url);
    const usernames = users.map(user => user.username);
    const list = usernames.join(', ');
    console.log('Usernames:', list);
}

module.exports = { fetchUsers, fetchAndListUsernames };
