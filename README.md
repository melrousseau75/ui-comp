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

Il n'y a pas de template de page défini, les composants doivent s'afficher correctement hors contexte, dans tout types de navigateurs.

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

## Composants

Voir les maquettes associées dans src/assets/maquettes

### Alert

Messages d'information. Créez toutes les variations.

gris clair : f8f9f9, gris foncé : e3e6e9

orange clair: fff9f5, orange foncé : ffb885

rouge claire: fff5f5, rouge foncé : ff999c

titre: 16px, text: 14px

Breakpoint small: l'icone se cache

### Popin

Doit se comporter comme une popin/modal, fixée au scroll de page avec son layer.

bleu clair: 11bad5

titre: 18px, text: 14px, cta 14px

### Form Text

Champ texte de formulaire, créez tous les états.

bleu clair: 11bad5, gris clair : adb5bc

text label : 12px,
text value : 16px,
text supporting text : 12px

Pour l'icone, choisissez celui de votre choix dans les assets

### Card Links

Une liste de liens, toute la zone du lien est cliquable, au survole les couleurs des text/background s'échangent. au breakpoint small: Les cartes prennent 100% de la largeur.

Pour l'icone, choisissez celui de votre choix dans les assets

couleur de fond : f0f7fa,
couleur lien :044258

text: 16px

### Tab

Liens de navigation
text: 16px

Voir les détails sur la maquette

# Bonne chance 👍
