# Bienvenue

## 🚀 Commencer le test Front UI :

Vous devez avoir Git, Node 20 et NPM installés pour exécuter les commandes.

- Cloner ce repo
- Entrez dans le dossier /test-front
- Créer une branche à votre nom
- Installer les modules :
  ```
  npm install
  ```
- Lancer le serveur local :

  ```
  npm run dev
  ```

  adresse locale par défaut : http://localhost:5173/

- A la fin de votre test, committez et poussez votre branche
  ```
  git push origin maBranche
  ```

## Objectifs

Vous devez développer les composants de votre choix dans l'ordre que vous désirez parmi les 5 proposés.

Il n'y a pas de template de page définit, les composants doivent s'afficher correctement hors contexte, dans tout types de navigateurs.

## Maquettes et ressources

Les maquettes graphiques et éléments externes se trouvent dans src/assets

## Environnement technique :

- La structure du projet est déjà créée, vous devez développer dans les fichiers existants (ou en créer de nouveaux si besoin)
- Dans src/comp se trouvent les dossiers des composants.
- Chaque dossier a son propre html, css (scss) et js.
- Le fichier src/style.scss est commun.
- Utilisez le JS (ou jquery) si besoin.
- Toute sauvegarde d'un fichier recharge la compilation et la page du navigateur (live reload).

## Spécificités

### Page

Créez un container à la largeur de votre choix de fond blanc , la page doit avoir un fond gris clair

couleur text par défaut: 044258

### Breakpoints:

small : 799px, desktop: 1024px

### Composant Alert

Créer toutes les variations

gris clair : f8f9f9, gris foncé : e3e6e9

orange clair: fff9f5, orange foncé : ffb885

rouge claire: fff5f5, rouge foncé : ff999c

Breakpoint small: l'icone se cache

### Composant Popin

bleu clair: 11bad5

### Composant Form Text

Champ texte de formulaire, créez tous les états.

bleu clair: 11bad5, gris clair : adb5bc

size label : 12px,
size value : 16px,
size supporting text : 12px

Pour l'icone, choisissez celui de votre choix dans les assets

### Composant card-links

Créez une liste de liens, toute la zone est cliquable, au survole les couleurs des text/background s'échangent.

Pour l'icone, choisissez celui de votre choix dans les assets

couleur de fond : f0f7fa,
couleur lien :044258

Breakpoint small: Les cartes passent à 100% de la largeur

### Composant tab

Voir les détails sur la maquette

# Bonne chance 👍
