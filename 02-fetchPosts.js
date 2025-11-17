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

module.exports = { fetchPost, fetchPostAndAuthor };
