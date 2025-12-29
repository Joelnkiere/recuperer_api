/**
 * Exercice 6 — Récupérer un post et ajouter une transformation custom
 * Endpoint : https://jsonplaceholder.typicode.com/posts/3
 *
 * Tâches :
 * - Récupérer le post n°3
 * - A partir de ce post, crée un nouvel objet contenant :
 *   - le title en MAJUSCULE
 *   - la longueur du body : body.length
 *   - un label custom : "STATUT_OK"
 * - Afficher ce nouvel objet transformé
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchPost(url = `${BASE_URL}/posts/3`) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAndTransformPost(url) {
    const post = await fetchPost(url);
    const transformedPost = {
        title: post.title.toUpperCase(),
        bodyLength: post.body.length,
        label: 'STATUT_OK'
    };
    console.log('Transformed post:', transformedPost);
    return transformedPost;
}

module.exports = { fetchPost, fetchAndTransformPost };
