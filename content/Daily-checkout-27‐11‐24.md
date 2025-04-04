### Wat heb ik vandaag gedaan?
Ik heb met Dion naar mijn code gekeken want ik kreeg mijn gradient over de header niet werkend. We hebben gevonden waar het aan lag en gelijk opgelost. Ik heb zijn [feedback](https://github.com/AnoukdeRooij24/look-and-feel-corporate-identity/issues/17) ook opgeslagen als een issue zodat ik het makkelijk weer terug kan vinden. Daarna heb ik de Read Me geschreven van de opdracht waar ik nu mee bezig ben, [de Over ons pagina van Bieb in Bloei](https://github.com/AnoukdeRooij24/look-and-feel-corporate-identity/blob/main/README.md). Ik heb ook vast bedacht wat ik morgen aan de opdrachtgever wil laten zien (figma bestanden) en wat ik aan de [opdrachtgever wil vragen](https://github.com/AnoukdeRooij24/look-and-feel-corporate-identity/issues/9).

### Mijn codevraag:
Mijn vraag aan Dion was dat mijn gradient niet werkte en hoe we dit konden oplossen. We hebben een aantal dingen aangepast:
* class name veranderd van "header.image" naar "gradient"
* kleurcode aangepast van hex naar rgba
* de div van het gradient niet meer om de H1 en nav laten staan maar er een losse div van gemaakt
* position: absolute gegeven aan gradient en position: relative gegeven aan de header
* z-index: 1 gegeven aan de H1 en nav die onder de gradient stonden

Ik heb er samen met wat ander [feedback van Dion](https://github.com/AnoukdeRooij24/look-and-feel-corporate-identity/issues/17) een issue van gemaakt.