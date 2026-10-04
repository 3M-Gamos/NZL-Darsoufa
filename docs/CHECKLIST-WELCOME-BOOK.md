# Check-list — Welcome Book / Guide d'accueil digital

À remplir avec le Riad Dar Soufa. Chaque ligne indique le fichier où l'information est saisie
(ou la rubrique correspondante dans `/admin/`). Toutes les informations sont à fournir **en français
et en anglais** (nous pouvons traduire si le riad fournit uniquement le français).

Les valeurs actuelles du site sont des **exemples à remplacer** ; elles sont repérables par
« à compléter » / « A-COMPLETER ».

## 1. Le riad — `settings/riad.json` (admin : « Le riad » → Informations générales)

- [ ] Nom exact et accroche (1 phrase)
- [ ] Texte de présentation pour la page d'accueil (2 courts paragraphes)
- [ ] Adresse complète (rue / derb, numéro, code postal)
- [ ] Lien Google Maps du riad (Google Maps → Partager → Copier le lien)
- [ ] Téléphone affiché
- [ ] Numéro WhatsApp (celui qui recevra les demandes clients)
- [ ] E-mail de contact
- [ ] Lien de réservation (Booking, moteur de réservation, ou simple WhatsApp)
- [ ] Comptes Instagram / Facebook (facultatif)
- [ ] Horaires : arrivée (de… à…), départ (avant…), petit-déjeuner (de… à…), accueil (de… à…)
- [ ] Wi-Fi : nom du réseau et mot de passe
- [ ] Accès au riad : comment venir, où se faire déposer en taxi, accueil à l'entrée de la médina ?
- [ ] Parking : lequel, tarif, gardé ou non, possibilité de réservation
- [ ] Photos : 1 grande photo d'accueil (patio / terrasse), 1 photo « la maison »

## 2. Textes propres au guide — `settings/guide.json` (admin : « Guide d'accueil »)

- [ ] Mot de bienvenue (3 à 4 phrases) et signature
- [ ] Vie de la maison : non-fumeur, calme après 22h, clé / porte la nuit, serviettes, animaux…
- [ ] Se déplacer à Rabat : petits taxis, tramway, train, applications (vérifier tarifs)
- [ ] Numéros d'urgence : police, pompiers/SAMU, médecin ou clinique recommandés, pharmacie
- [ ] Bon à savoir : monnaie / distributeurs, vendredi, eau, tenue dans la médina, pourboires…

## 3. Chambres — `rooms/*.json` (admin : « Chambres »)

Pour chaque chambre :
- [ ] Nom, description (2 à 3 phrases)
- [ ] Capacité, surface, literie
- [ ] Équipements (4 à 6)
- [ ] Prix « à partir de » par nuit
- [ ] 1 photo (idéalement 2 à 3 pour une galerie future)

## 4. Services & extras — `services/*.json` (admin : « Services & extras »)

- [ ] Petit-déjeuner : inclus ? horaires, contenu
- [ ] Dîner marocain : menu type, prix par personne, heure de service, délai de réservation
- [ ] Transfert aéroport Rabat-Salé : prix, nombre de passagers, modalités
- [ ] Transfert aéroport Casablanca : prix
- [ ] Transfert gare (Rabat-Ville / Agdal) : prix
- [ ] Chauffeur à la journée / excursions : destinations et prix ou « sur devis »
- [ ] Hammam / massage : partenaire, prix « à partir de »
- [ ] Visite guidée : prix, durée
- [ ] Autres extras : location de vélos, lessive, baby-sitting, late check-out, cours de cuisine…
- [ ] Pour chaque service : visible sur le site ? visible dans le guide ?

## 5. Minibar — `settings/minibar.json` (admin : « Minibar »)

- [ ] Liste des articles et prix en MAD
- [ ] Mode de règlement (relevé au départ ? carte ? espèces ?)

## 6. Bonnes adresses à Rabat — `places/*.json` (admin : « Bonnes adresses »)

Pour chaque adresse : nom, catégorie (à visiter / où manger / cafés / shopping / nature / soirées),
2 phrases, distance ou temps depuis le riad, « notre conseil » (facultatif), lien Google Maps.

- [ ] Valider ou remplacer les 12 adresses proposées en exemple
- [ ] Choisir 3 adresses « mises en avant » pour la page d'accueil
- [ ] Ajouter les restaurants partenaires où le riad peut réserver

## 7. QR code

- [ ] Nom de domaine définitif (nécessaire avant d'imprimer : le QR code pointe vers `domaine/guide/`)
- [ ] Nombre de cartes à imprimer (une par chambre + accueil / terrasse)
- [ ] Support souhaité : carte A6 sur chevalet, autocollant, cadre…
