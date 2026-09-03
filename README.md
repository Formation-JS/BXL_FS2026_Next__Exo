# Exercice NextJS

## Exercice 01

### Création du projet
Mettre en place un nouveau projet NextJS pour créer le site d’évent.

### Page à définir
Créer les pages suivantes :
- Accueil (Présentation du site)
- Events (Liste des évents)
- Lieux (Liste de lieux pour des évents)
- A propos (Vous et un formulaire de contact)

NB : Ne créer que le necessaire pour l'affichage des pages

---
## Exercice 02
Afficher les liste des lieux et leurs pages détail. \
Les données de lieux sont dans le fichiers JSON suivant : [lieux-events.json](__ressources__/lieux-events.json)

### Page a définir
- `/lieux`  
  Liste les lieux avec :  Nom, Ville & Pays, Notation
- `/lieux/detail/:id`  
  Information d'un lieux

### Bonus
Créer une page d'erreur 404 uniquement pour les lieux 

--- 
## Exercice 03
Modifier le code actuel pour charger les données de maniere asynchrone.  
Pour cela, créer un service qui renvoie les données après un délai.

```js
// Fonction pour simuler du délai 
function delay(time = 1_000) {
    return new Promise((resolve) => { setTimeout(resolve, time); });
}
```

### Page à modifier 
- `/lieux`  
  Affichager la liste asynchrone  
  Afficher le nombre de lieux dans le titre (h1) de page
- `/lieux/detail/:id` 
  Afficher les données du asynchrone

### Nouvelle page
- `/dashboard`  
  Afficher un ensemble de donnée fourni  
  - Afficher le résumé globale (OverallSummary)
  - Afficher le résumé du mois en cours et du mois précédents
  - Afficher les données des évents les plus rentables (TopEvents)

Les données à afficher dans le dashbord soit disponible via le [RapportService](__ressources__/rapport.service.js).
  
--- 
## Exercice 03 (BONUS)
Modifier la page "Lieux" (`lieux`) pour ajouer un mecanisme de pagination.

--- 
## Exercice 04
Modifier la page "A propos" (`/apropos`) pour traiter le formulaire avec des actions serveurs.

### Steps
- Extraire le formulaire dans un composant client
- Mettre en place l'action serveur
- Lier les deux avec le hook `useActionState`

### Remarque
Actuellement, il n'a pas de traitement à faire dans l'action.  
Ajouter juste un "console log" pour vérifier que le formulaire fonctionne.

---
## Exercice 05
Modifier le formulaire pour avec les champs suivants : 
- Email : `string`
- Sujet : `string (min 5 et max 50)` [Optionnel]
- Message : `string (min 10)`
- Priorité : `string (normal ou urgent)`
- Etre recontacté : `boolean`

Valider les données dans l'action serveur
- En cas d'erreur : Afficher les erreurs dans le formulaire
- En cas de success : Redirigé vers la page d'accueil