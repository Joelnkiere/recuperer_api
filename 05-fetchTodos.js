/**
 * Exercice 5 — Compter les tâches complétées
 * Endpoint : https://jsonplaceholder.typicode.com/todos
 *
 * Tâches :
 * - Récupérer les todos
 * - Séparer : tâches terminées et tâches non terminées
 * - Afficher les deux nombres
 * 
 * Note : une todo complétée a son champ `completed` à `true` et celle non complétée à `false`
 */

async function fetchTodos(url = 'https://jsonplaceholder.typicode.com/todos') {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function countCompletedTodos(url) {
    const todos = await fetchTodos(url);
    const completedTodos = todos.filter(todo => todo.completed === true);
    const uncompletedTodos = todos.filter(todo => todo.completed === false);
    console.log(`Tâches complétées: ${completedTodos.length}`);
    console.log(`Tâches non complétées: ${uncompletedTodos.length}`);
}

module.exports = { fetchTodos, countCompletedTodos };
