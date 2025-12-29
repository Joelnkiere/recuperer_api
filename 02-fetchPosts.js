/**
 * Exercice 2 — Récupérer un post et afficher son auteur
 *
 * Endpoints exemples :
 * - Post : https://jsonplaceholder.typicode.com/posts/1
 * - User : https://jsonplaceholder.typicode.com/users/:id
 *
 * Tâches :
 * - Récupérer un post précis (post 1) via `fetch()` + `.then()` (ou `fetch` global)
 * - Utiliser son `userId` pour récupérer l'utilisateur
 * - Afficher : le titre du post et le nom de l'auteur
 *
 * Logique : manipuler deux requêtes liées (séquentielles)
 */




// Fonctions attendues par l'exercice
const BASE_URL = 'https://jsonplaceholder.typicode.com';
async function recuperation(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchPost(url = `${BASE_URL}/posts/1`) {
    const post = await recuperation(url);
    return post;
}

async function fetchPostAndAuthor(url) {

    const post = await fetchPost(url);

    const author = await recuperation(`${BASE_URL}/users/${post.userId}`);

    console.log(`Titre du post : ${post.title}`);
    console.log(`Auteur : ${author.name}`);

    return { post, author };
}




module.exports = { fetchPost, fetchPostAndAuthor };
