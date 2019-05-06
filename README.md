# Exercice utilisateurs et POO JS

Il s'agit d'un exercice produit dans le cadre de mon poste de formateur en développement web. Cet exercice est donné aux apprenants lorsqu'ils maîtrisent l'algorithmie en JavaScript et la manipulation avancée du DOM. L'objectif de cet exercice est de leur faire pratiquer la programmation orientée objet JS et notamment de travailler avec plusieurs objets en même temps.

Une version en ligne de l'exercice avec une interface graphique est visible à : https://thomgo.github.io/usersJSPOO/

Au travers de cet exercice, ils apprennent à :
- déclarer des attributs
- déclarer des méthodes
- déclarer un objet littéral  
- réaliser des vérifications au travers d'un objet
- stocker des données dans un objet
- passer un objet en argument d'une méthode d'un autre objet


## Consignes

Dans cet exercice, pour débuter, nous allons travailler la déclaration littérale des objets. Vous allez déclarer un objet user avec :

Les propriétés suivantes :

- prénom
- nom
- pays de résidence
- age
- moyens de paiement enregistrés (un tableau contenant des strings de type "visa", "mastercard" etc...)

Les méthodes suivantes :

- une méthode qui alerte le prénom de l'utilisateur
- une méthode qui alerte le nom de l'utilisateur
- une méthode qui alerte l'année de naissance de l'utilisateur en faisant le calcul à partir de son âge

Appelez toutes ces méthodes dans votre script pour afficher les informations suivantes : nom, prénom, date de naissance.

## Pour aller plus loin

Vous avez créé un objet avec des propriétés et vous les avez affichées à l'écran ce qui est déjà un grand pas ! Cependant soyons honnête, dans la plupart des programmes vous devrez faire bien plus que ça.

Pour continuer à vous entraîner nous allons maintenant créer un objet qui va nous permettre de vérifier les informations de notre utilisateur. Pas de panique si vous y allez étape par étape tout ira bien.

Dans un premier temps, déclarez un objet litéral qui contient les propirétés suivantes :

- la liste en majuscules des pays autorisés pour notre utilisateur

- la liste en majuscules des moyens de paiement autorisés sur le site

- l'âge minimum pour entrer sur le site

Vous avez maintenant un objet avec les valeurs de référence auxquelles vous allez pouvoir comparer l'utilisateur. Vous allez donc ajouter les méthodes suivantes à cet objet :

- Une méthode qui vérifie si notre utilisateur a l'âge minimum requis et affiche un message en conséquence

- Une méthode qui vérifie que le pays de l'utilisateur est bien dans la liste des pays autorisés et affiche un message en conséquence

- Une méthode qui vérifie quels moyens de paiement de l'utilisateur sont autorisés sur le site et affiche un message avec les moyens de paiement utilisables

Maintenant appelez ces trois méthodes dans votre script et vérifiez qu'elles affichent les bons messages.

C'est super, normalement tout marche correctement ! Cependant vous pouvez encore améliorer un peu votre code ! Il est pénible de devoir lancer chaque méthode séparemment. Créez donc une méthode qui effectue toutes les vérifications des informations de l'utilisateur en une fois et vous aurez fini !

## Pour aller encore plus loin

Proposez un visuel HTML/CSS pour votre programme. Vous pouvez par exemple afficher les information de l'utilisateur sous forme d'une carte et déclencher la vérification de ses informations par un clic sur un bouton. Des message d'erreur ou de succès seront alors affichés à l'écran.
