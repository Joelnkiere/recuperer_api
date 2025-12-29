/**
 *📌 Exercice 3 — Filtrer les commentaires d’un post
Endpoint : https://jsonplaceholder.typicode.com/comments
🎯 Tâches :
Récupérer tous les commentaires.
Filtrer ceux appartenant au postId = 1.
Afficher :
le nombre de commentaires
l’email du premier commentaire filtré
Logique
➡️ Appliquer un .filter() sur une réponse API.
 */

async function fetchComments(url = 'https://jsonplaceholder.typicode.com/comments') {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAndFilterComments(url) {
    const comments = await fetchComments(url);
    const filteredComments = comments.filter(comment => comment.postId === 1);
    console.log(`Nombre de commentaires filtrés: ${filteredComments.length}`);
    console.log(`Email du premier commentaire filtré: ${filteredComments[0]?.email}`);
}

module.exports = { fetchComments, fetchAndFilterComments };
