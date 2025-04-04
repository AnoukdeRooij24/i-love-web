## Daily checkout, maandag 3-3-25
### Wat heb ik vandaag gedaan?
We hebben vandaag een nieuwe opdrachtgever gekozen. Ik ben voor Oncollaboration gegaan. Ik heb met 4 meiden uit squad G de [briefing](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/1#issue-2890509258) en [debriefing](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/1#issuecomment-2694295831) gedaan. Daarna hebben we ook gelijk de [interface inventory](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/3#issuecomment-2700995306) gemaakt. En ben ik vast begonnen met wat schetsen maken voor de [desktop](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/2#issuecomment-2700981599) versie.

### Bewijsmateriaal:
![Image (17)](https://github.com/user-attachments/assets/16be0f82-4d05-4469-a054-76b674fe747a)


***
## Daily checkout, woensdag 5-3-25
### Wat heb ik vandaag gedaan?
Ik ben verder gegaan met schetsen vandaag. Ik heb een wireflow [getekend](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/2#issuecomment-2700970460) en in [figma](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/2#issuecomment-2700980490) gemaakt en de schetsen van [mobiel](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/2#issuecomment-2700981154) gemaakt met de nodige informatie erbij. Daarnaast ben ik ook begonnen in de code vandaag, ik heb mijn terminal in vs code gefixt, dus die doet het eindelijk! (Het probleem kwam omdat mijn FDND mapje, waar alle repo's in staan, blijkbaar in mijn OneDrive was opgeslagen. Daardoor deed om de een of andere reden de terminal het dus niet.) 

### Bewijsmateriaal:
![Image (16)](https://github.com/user-attachments/assets/03dbebff-cbe2-41eb-8c13-b82668208568)
![Image (15)](https://github.com/user-attachments/assets/d4bfc9a2-862f-4f66-a441-2af9bb0f588c)
![Image (14)](https://github.com/user-attachments/assets/3c13f6ec-1f37-47ef-9844-4f8d25fb2826)
![Image (13)](https://github.com/user-attachments/assets/d9cf1580-4675-41fc-af5d-adb794f8a157)
![Image (12)](https://github.com/user-attachments/assets/1962cb60-1586-472f-bd0a-67e9d02a6c31)

***
## Daily checkout, vrijdag 7-3-2025
### Wat heb ik vandaag gedaan?
Ik heb met mensen die even ver zijn als ik een code/design review gedaan bij elkaar. Ik heb bij Julia een [issue over haar design](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/3#issuecomment-2706100037) gemaakt.
En bij Sebastiaan over [zijn code](https://github.com/Sebastiaan-hva/server-side-rendering-server-side-website/issues/7). Daarna heb ik gelijk een issue die ik had [gekregen opgelost](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/5). In de middag ben ik naar de I love web van Cassie over Gsap gegaan.

***
## Daily checkout, maandag 10-3-2025


***
## Daily checkout, woensdag 12-3-2025
### Workshop Data filteren: 
- Experiment 1: Ik wil alle studenten gesorteerd op name: `'https://fdnd.directus.app/items/person?fields=name'`
- Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D: `'https://fdnd.directus.app/items/person?fields=name&filter[name][_start_with]=D`
- Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K: `'https://fdnd.directus.app/items/person?fields=name&filter[_or][0][name][_start_with]=D&filter[_or][1][name][_start_with]=K`
- Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld: `'https://fdnd.directus.app/items/person/?fields=name ... '`
- Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002: 
- Experiment 6: Haal een lijst van alle unieke fav_tag op, en laat zien hoeveel mensen die tag hebben: 

### Template filters:
- **Experiment Capitalize:** <br>
Het maakt niet uit wat je typt aan blokletters / kleine letters, als je `{{ "title" | capitalize }}` neerzet wordt de eerste letter altijd een hoofdletter. Dit kan in alle tekst elemeten, bijv. `h1`, `h2` & `p` etc.

- **Experiment Join:** <br>
Zorgt ervoor dat bijvoorbeeld alle komma's in de gegeven zin worden vervangen door het woordje "en". Als je het zo neerzet: <br>
`{% assign group = "Anouk, Daniëlle, Marisya, Carmen" | split: ", " %}` `{{ group | join: " en " }}` zorg je dat je met `split` aangeeft welk teken veranderd gaat worden en met `join` wat ervoor in de plaats gaat komen. Dan is je resultaat: 'Anouk en Daniëlle en Marisya en Carmen'

- **Experiment Plus:** <br>
Hiermee tel je een nummer bij een nummer op. Als je `{{ 4 | plus: 2 }}` neerzet, dan is je resultaat '6'.

- **Experiment Replace:** <br>
Hiermee kan je een bepaald gedeelte van je zin veranderen naar iets anders. Bij `| replace` zet je voor de komma wat je wilt laten veranderen en achter de komma wat er voor in de plaats moet komen. <br>
`{{ "Take my protein pills and put my helmet on" | replace: "my", "your" }}` <br>
Dan krijg je: 'Take your protein pills and put my helmet on' 

- **Experiment Split:** <br>
`{% assign group = "Anouk, Daniëlle, Marisya, Carmen" | split: ", " %}` <br> 
`{% for member in group %}` <br>
  `{{ member }}`<br>
`{% endfor %}`<br>
Als je dit zo neer zet dan kan je ipv een komma, de namen onder elkaar zetten. Op de plek van split welk teken je wilt veranderen. Dan is je resultaat: <br>
Anouk <br>
Daniëlle <br>
Marisya <br>
Carmen <br>

***
## Daily checkout, vrijdag 14-3-25
### Wat heb ik vandaag gedaan?
Vandaag hebben we de retrospect gehad van sprint 8. En hebben we met de klas besproken wat er wel en niet goed gaat in de werkruimte en hebben we ideeen bedacht om dit beter te laten gaan.  