
# Exercice: Récupérer et afficher des données depuis une API (exercice-api-fetch)

Ce dépôt contient 6 exercices pédagogiques (fichiers `01-*` à `06-*`) qui montrent comment utiliser `fetch` en JavaScript
pour récupérer des données depuis une API et les traiter. Les exercices sont accompagnés d'un jeu de tests Jest dans `tests/`.

Installer et démarrer

1. Cloner le dépôt

```bash
git clone <url-du-dépôt>
cd exercice-api-fetch
```

2. Installer les dépendances (recommandé pour reproduire le CI)

```bash
npm ci
```

3. Lancer les tests

```bash
npm test
# ou pour lancer un seul test:
npm test -- tests/exercice-3.test.js
```

Que doit faire l'apprenant ?
- Ouvrez le fichier `01-fetchUsers.js` : c'est le modèle attendu de format et de noms de fonctions exportées pour votre code des reponses. utilisez le même format de reponse pour d'autres questions question de palper l'utilisation des fetchs et fonction async/await . Regardez les noms des fonctions exportées et la manière dont le module affiche les résultats (via `console.log`).
- Lisez attentivement tous les fichiers d'exercice (`01-*` → `06-*`) et suivez les consignes inscrites en tête de chaque fichier : elles précisent l'endpoint à utiliser, la transformation attendue et la sortie console attendue.
- Écrivez votre code de réponse directement dans le fichier d'exercice correspondant.
- Ne modifiez PAS les fichiers du dossier `tests/`. Les tests servent d'autograder local et en CI.

Liste des endpoints et données attendues (par exercice)
Tous les exercices utilisent JSONPlaceholder (https://jsonplaceholder.typicode.com). Ci-dessous les routes et les éléments précis attendus par les tests.

- Exercice 1 — Users
	- Endpoint : https://jsonplaceholder.typicode.com/users
	- Objet attendu par élément : { id, name, username, email, ... }
	- Fonctions exportées : fetchUsers(url), fetchAndCountUsers(url)
	- Comportement attendu :
		- `fetchUsers(url)` : effectue le fetch et renvoie le tableau d'utilisateurs.
		- `fetchAndCountUsers(url)` : affiche via `console.log` exactement :
			- `Nombre total de users : <nombre>`
			- `Premier user : <nom>`

- Exercice 2 — Post et auteur
	- Endpoints :
		- Post : https://jsonplaceholder.typicode.com/posts/1
		- User (auteur) : https://jsonplaceholder.typicode.com/users/:id
	- Fonctions exportées : fetchPost(url), fetchPostAndAuthor(url)
	- Comportement attendu :
		- `fetchPost(url)` : renvoie l'objet post { id, userId, title, body }
		- `fetchPostAndAuthor(url)` : affiche via `console.log` :
			- `Titre du post : <title>`
			- `Auteur : <user.name>`

- Exercice 3 — Comments filter
	- Endpoint : https://jsonplaceholder.typicode.com/comments
	- Objet attendu par élément : { postId, id, name, email, body }
	- Fonctions exportées : fetchComments(url), fetchAndFilterComments(url)
	- Comportement attendu :
		- Filtrer les commentaires où postId === 1
		- Afficher via `console.log` :
			- `Nombre de commentaires filtrés: <n>`
			- `Email du premier commentaire filtré: <email>`

- Exercice 4 — Usernames
	- Endpoint : https://jsonplaceholder.typicode.com/users
	- Fonctions exportées : fetchUsers(url), fetchAndListUsernames(url)
	- Comportement attendu :
		- Récupérer les `username` et afficher `Usernames: u1, u2, u3` (liste jointe par `, `)

- Exercice 5 — Todos
	- Endpoint : https://jsonplaceholder.typicode.com/todos
	- Objet attendu par élément : { userId, id, title, completed }
	- Fonctions exportées : fetchTodos(url), countCompletedTodos(url)
	- Comportement attendu :
		- Compter `completed === true` et `completed === false` et afficher via `console.log` :
			- `Tâches complétées: <n>`
			- `Tâches non complétées: <n>`

- Exercice 6 — Transformer un post
	- Endpoint : https://jsonplaceholder.typicode.com/posts/3
	- Fonctions exportées : fetchPost(url), fetchAndTransformPost(url)
	- Comportement attendu :
		- Récupérer le post #3 puis afficher via `console.log` exactement :
			- `Transformed post: <objet>` où `<objet>` contient :
				- `title` en MAJUSCULE
				- `bodyLength` : longueur de `body`
				- `label` : la chaîne exacte `STATUT_OK`

Éléments nécessaires pour que les tests passent (local & CI)
- Garder les noms et signatures des fonctions exportées : les tests importent ces fonctions par nom.
- Utiliser `console.log` pour toutes les sorties textuelles ; les tests vérifient les chaînes exactes (majuscules, ponctuation et espaces doivent correspondre).
- Les tests mockent `global.fetch` et importent le module APRÈS avoir posé le mock. Assurez-vous que vos exports sont des fonctions puristes (pas d'effets secondaires irréversibles lors de l'importation) ou que les effets sont compatibles avec le mock.
- Node 18+ recommandé (CI est configuré pour Node 18) ; cependant, comme les tests mockent `fetch`, l'absence de réseau n'empêche pas le passage des tests.
- Ne modifiez pas les fichiers sous `tests/`.

Dépannage rapide
- Si un test échoue :
	1. Vérifiez le message d'erreur Jest et le test ciblé (`tests/exercice-*.test.js`).
	2. Comparez vos `console.log` aux attentes du test (même casse et ponctuation).
	3. Assurez-vous que les fonctions exportées existent et ont les signatures attendues.

Contact / aide
- Si vous voulez que j'examine un exercice qui échoue, fournissez le nom du fichier et le message d'erreur Jest. Je peux proposer une correction ciblée.

Bonne chance — suivez les consignes et ne touchez pas aux tests.


