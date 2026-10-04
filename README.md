# Riad Dar Soufa — site web & guide d'accueil digital

Site bilingue (FR / EN) du Riad Dar Soufa à Rabat, avec un **guide d'accueil digital** (Welcome Book)
accessible depuis le site et depuis un QR code placé dans chaque chambre.

Site et guide partagent exactement les mêmes données (`src/content/`) : une information se modifie
à un seul endroit et se met à jour partout. Aucun doublon.

## Pages

| Page | FR | EN |
| --- | --- | --- |
| Accueil | `/fr/` | `/en/` |
| Chambres | `/fr/chambres/` | `/en/rooms/` |
| Services & extras (dîner, transferts, minibar…) | `/fr/services/` | `/en/services/` |
| Bonnes adresses à Rabat (liens Google Maps) | `/fr/rabat/` | `/en/rabat/` |
| Contact & accès | `/fr/contact/` | `/en/contact/` |
| **Guide d'accueil (mobile)** | `/fr/guide/` | `/en/guide/` |

- `/` et `/guide/` détectent la langue du téléphone et redirigent (français par défaut).
- `/qr/guide.svg` : le QR code du guide (pointe vers `/guide/`), généré automatiquement au build.
- `/qr/` : planche imprimable de 4 cartes A6 à poser dans les chambres (non indexée).
- `/admin/` : interface d'édition du contenu (Decap CMS), voir plus bas.

Le guide contient : horaires, Wi-Fi (avec bouton « copier »), accès au riad, parking, services avec
tarifs (dîner marocain, minibar, transferts aéroport, transports), bonnes adresses avec itinéraires
Google Maps, vie de la maison, numéros d'urgence, bouton WhatsApp flottant avec message pré-rempli.

## Stack

- [Astro 7](https://astro.build) — site statique, très rapide, sans base de données.
- [Tailwind CSS 4](https://tailwindcss.com) — styles ; palette définie dans `src/styles/global.css` (`@theme`).
- Contenu en JSON validé par un schéma (`src/content.config.ts`) : une erreur de saisie casse le build
  plutôt que d'afficher une page cassée.
- [Decap CMS](https://decapcms.org) — édition du contenu par le client via `/admin/`.
- `qrcode` — génération du QR code au build.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le site statique dans dist/
npm run preview    # prévisualise dist/
npm run check      # vérification TypeScript / Astro
```

Variable d'environnement : `SITE_URL` (voir `.env.example`). Elle fixe l'URL publique utilisée
pour le sitemap, les balises SEO et **le QR code**. À renseigner avec le domaine définitif avant
d'imprimer les cartes.

## Modifier le contenu (3 façons)

Tout vit dans `src/content/` :

```
src/content/
├── settings/riad.json      # nom, coordonnées, WhatsApp, horaires, Wi-Fi, accès, parking, photos
├── settings/guide.json     # mot de bienvenue, vie de la maison, transports, urgences, bon à savoir
├── settings/minibar.json   # articles et prix du minibar
├── rooms/*.json            # une chambre par fichier
├── services/*.json         # un service par fichier (dîner, transferts, hammam…)
└── places/*.json           # une bonne adresse par fichier (avec lien Google Maps)
```

Chaque texte existe en `fr` et `en`. Pour un service, les cases `showOnSite` / `showInGuide`
décident où il apparaît.

1. **Interface d'administration `/admin/`** (recommandé pour le client) : formulaires en français,
   enregistrement = commit Git = reconstruction automatique du site. Nécessite une configuration
   d'authentification à faire une fois au déploiement (voir ci-dessous).
2. **GitHub en ligne** : ouvrir le fichier JSON dans le navigateur, crayon « Edit », « Commit ».
3. **En local** : modifier le fichier, `git commit`, `git push`.

### Activer `/admin/` (Decap CMS)

Le fichier `public/admin/config.yml` décrit les formulaires. Il faut connecter l'authentification :

- **Netlify** (le plus simple) : activer *Identity* + *Git Gateway* sur le site Netlify, remplacer
  dans `config.yml` le bloc `backend` par `name: git-gateway`, puis inviter le client par e-mail.
- **Vercel / Cloudflare Pages / autre** : garder `name: github`, déployer un petit service OAuth
  GitHub (ex. [decap-proxy](https://github.com/sterlingwes/decap-proxy) sur Cloudflare Workers ou
  tout « netlify-cms-oauth-provider ») et renseigner `base_url`. Le client doit avoir un compte
  GitHub avec accès en écriture au dépôt.
- **Test en local** sans authentification : `npx decap-server` dans un terminal, décommenter
  `local_backend: true` dans `config.yml`, puis `npm run dev` et ouvrir `/admin/`.

## Déploiement

Site statique : Netlify, Vercel, Cloudflare Pages ou n'importe quel hébergeur statique.

- Commande de build : `npm run build` — dossier de sortie : `dist/`
- Node ≥ 22.12
- Variable `SITE_URL` = domaine public (ex. `https://www.riaddarsoufa.com`)
- Mettre à jour `Sitemap:` dans `public/robots.txt` et `site_url` dans `public/admin/config.yml`.

## Photos

Les images actuelles sont des **visuels de remplacement** (`public/images/placeholders/`).
Déposer les vraies photos dans `public/images/` (ou via l'interface d'administration, qui les range
dans `public/images/uploads/`) et mettre à jour les champs `image` / `images` des fichiers JSON.
Formats recommandés : JPEG/WebP, 1600 px de large pour la photo d'accueil, 1200 px pour les chambres.

## Palette & typographie

Définies dans `src/styles/global.css` : papier `#fbf7f1`, sable `#efe6d8`, encre `#2b2522`,
terre cuite `#a9573b`, ocre `#c9973f`, vert zellige `#4f6f5e`. Titres en Cormorant Garamond,
texte en Jost (Google Fonts). Modifier ces variables suffit à rethémer le site et le guide.

## Check-list Welcome Book

La liste des informations à collecter auprès du riad pour compléter le guide se trouve dans
[`docs/CHECKLIST-WELCOME-BOOK.md`](docs/CHECKLIST-WELCOME-BOOK.md).
