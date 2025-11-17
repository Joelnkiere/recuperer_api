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




module.exports = { fetchPost, fetchAndTransformPost };
