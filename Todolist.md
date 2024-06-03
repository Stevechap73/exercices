# Next.js - Liste de composants

Apprends à afficher une liste de composants avec Next.js

## Ressources

 [Next.js Documentation](https://nextjs.org/docs)

## Contexte du projet

Il s'agit d'afficher une liste de choses à faire (*todo list*).


Voici une idée de cmment répartir ton code:

- `components/TodoList.jsx` : contient du code pour l'affichage de la liste.
- `components/TodoItem.jsx` : contient le code nécessaire à l'affichage d'une tâche : son titre, et si la tâche a été réalisée ou non, date.
- `src/page.tsx` : fais appel au différents composants et contient un tableau d'objets todos, qui ont chacun un identifiant, un titre, un statut "est complété". Ce tableau est envoyé à `TodoList.jsx` par les props.

Tu dois modifier le composant `TodoList` afin d'afficher la liste des tâches à réaliser, contenues dans la variable todos.

Fais bien attention qu'aucune erreur **"Warning: Each child in a list should have a unique key prop."** n'apparaisse dans le terminal de ton navigateur.


