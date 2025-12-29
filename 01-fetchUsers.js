/**
 * 📝 Exercice 1 — Récupérer la liste des posts
Endpoint : https://jsonplaceholder.typicode.com/users
🎯 Tâches :
Créer une fonction fetchPosts(url) utilisant fetch() + then()
Créer une fonction fetchAndCountPosts(url) utilisant async/await
Afficher :
le nombre total de users
le nom du premier user

Note : Ne reponds pas à cette question, c'est un exemple pour te permetttre de voir ce que nous attendons comme format de reponse.
**/

const urlPosts = 'https://jsonplaceholder.typicode.com/users';


async function fetchUsers(url) {
	return fetch(url)
		.then(res => res.json())
		.then(data => data);
}

async function fetchAndCountUsers(url) {
	try {
		const users = await fetchUsers(url);

		console.log(`Nombre total de users : ${users.length}`);
		console.log(`Premier user : ${users[0].name}`);

	} catch (error) {
		console.log('Erreur :', error);
	}
}

fetchAndCountUsers(urlPosts);

module.exports = { fetchUsers, fetchAndCountUsers };