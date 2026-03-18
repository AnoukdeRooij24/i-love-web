# Sprint 1

## Maandag 9-3-2026
Vanochtend heb ik in de standup aangegeven dat ik vandaag met Robbert ga zitten om een plan te maken voor de komende weken en vanuit daar een plan voor vandaag te maken. In het gesprekje met Robbert hebben we gekeken welke projectjes voor mij leuk zouden zijn om op te pakken de komende periode. Hier hebben we issues van gemaakt in het projectboard van mijn stage repo. De komende tijd ga ik me eerst foccussen op het FDND thema afmaken, dit is een waardevolle skill om later evt ook op Utrecht toe te passen. Ook ga ik kijken hoe ik de huisstijlchecker website kan maken, dit is een goeie combi tussen de frontend en wat meer JS om dit ook meer te oefenen. <br>
Daarna ging ik met Woutine, Savi en Tessa in een meeting. Dit ging over een Quick scan over de toegankelijk van 2 specifieke paginas van [GoVocal](https://ideasfeed.stg.govocal.com/en/projects/ideas-portal/ideas-feed?phase_id=4efa7267-f3a0-43a1-b1f5-36d834289555). Ik kreeg eerst wat achter liggende informatie over welke type testen ze hanteren bij Frameless en daarna hoe, wat en waarom ze deze website gaan testen. We hebben samen de pagina's bekeken en daarna in een parabol zelf puntjes in verschillende categorien opgeschreven die belganrijk zijn en niet mogen vergeten tijdens de test naast het standaard lijstje. <br>
Na de lunch ben ik begonnen met wat orde in de chaos creeeren, ik ga beginnen met kijken wat voor bewijslast ik per indicator wil hebben en dit opschrijven in een notitie (en in een comment bij de indicator in het projectboard). Aan de hand hiervan kan ik een planning gaan maken voor welke projecten ik op ga pakken de komende week. <br>
Verder heb ik vandaag een bug in mn 1password met google gefixt waar ik ook lang mee bezig was aangezien niemand nou helemaal wist waar het door kwam. <br>
In de trein heb ik een ontwerp gemaakt in de Frameless huisstijl om mijn stage daily verhaaltjes op te zetten. 

## Dinsdag 10-3-2026
In de standup heb ik aangegeven dat ik gister met Robbert heb gezeten om een plan te maken voor de komende weken en dat ik daar dus mee bezig ben. Daarna ben ik verder gegaan met overzicht creeeren in het projectboard van mijn stage repo van frameless. Ik heb een eigen stage repo op mijn eigen github account aangemaakt en ben hier ook een projectboard begonnen, maar meer om mijn bewijslast in op te kunnen slaan en te kijken wat ik nog extra moet aanvullen. Dan hou ik mijn andere projectboard meer voor taken om uit te voeren. <br>
Daarna heb ik de laatste tokens toegevoegd aan de tokens studio in figma en heb ik dit weer naar github gepushed. En daarbij de bijpassende issue gedocumenteerd en gesloten. Ik heb gezorgd dat mijn issues overal weer up to date zijn. Daarna heb ik een kleine uitleg gekregen van Robbert over hoe ik het fdnd thema in een repo kan krijgen, in de terminal hebben we hem via 'git clone ...' gecloned naar de github map. Vanuit daar hebben we 'pnpm install' en 'pnpm run build' op de ma-design-tokens map gedaan. Daar kan ik nu de json in aanpassen en dan zie ik als het goed is de css veranderen. 

## Woensdag 11-3-2026
Ik heb de standup in de tein meegedaan door een mega vertraging op het spoor. Ondertussen ben ik begonnen met het lezen van een artikel die bart heeft geschreven [The CSS selection](https://www.projectwallace.com/the-css-selection/2026). Ik ben tot 'rulesets' gekomen. Ik heb een kleine uitleg gekregen van Robbert over pnpm en wat bronnen om door te lezen. Daarna heb ik de iTerm terminal geinstalleerd. Via deze terminal heb ik daarna mijn stage repo naar mijn computer gecloned met `git clone (SSH url)`. Daarvoor moesten we eerst een [SSH key instellen](https://developer.1password.com/docs/ssh/get-started/) op [github](https://github.com/settings/keys) en 1Password zodat ik die met mijn vingerprint kan accepteren. (Ook aangezien mijn stage repo een prive repo is op het frameless github account.) <br>
In de terminal kan je met verschillende commands dingen doen:
- `Command + backtick` = iTerm openen / sluiten
- `Command + T` = nieuwe tab openen 
- `pnpm add` = inplaats van `npm install`
- `cd ..` = naar de home map navigeren
- `git clone (SSH url uit github)` = repo clonen naar je computer 
- `git log` = de commits en andere info in de terminal laten zien
- `git pull` = de info in de github repo syncen met de info op je computer
- `git fetch` = de info wel ophalen maar niet meteen syncen met je computer
- `git add package.json README.md` = bestanden aanspreken die je wilt pushen in dit geval package.json en de readme
- `git commit -m 'Readme and package.json'` = de commit message tussen de '' 
- `git push` = de commit pushen naar github
- `pnpm init` = ? 
- `code .` = open huidige map? of nieuwe map
- `code .git/config` = open de config file in de .git map in vscode 
- `pnpm add --save-dev` = iets toevoegen in de dependency map

## Donderdag 12-3-2026
De standup van vanochtend heb ik vanaf school gedaan en heb ik aangegeven wat ik ga doen vandaag. Ik heb vandaag de style-dictionary geinstalleerd in mijn stage repo, de vervolg stappen heb ik ook geprobeerd maar daar kwam ik nog niet helemaal uit. Ik heb ook onderzoek gedaan naar de terminal en wat handige commands opgeschreven om te hergebruiken. 

## Vrijdag 13-3-2026
In de standup had ik aangegeven dat ik verder ga met de style dictionary. Daar was ik mee begonnen en toen ging ik om 11.00 weer in de meeting met het kernteam van de utrecht design system. Daarin werden wat vragen besproken en heeft Robbert aangegeven dat ik met het zelfde bezig ben als een van hun collega's. Volgende week vrijdag kan ik daar iets over presenteren. Verder heb ik geprobeerd de style dictionary aan de praat te krijgen maar ik kreeg steeds errors. Uiteindelijk kwam ik erachter dat het json bestand waar de tokens instaan niet gelezen kan worden door de code die ik geschreven heb. Ik was aan het uitzoeken hoe ik dat op kan lossen maar ik kon niet zo snel een nette oplossing vinden. 

***

## Maandag 16-3-2026
In de standup van vanochtend heb ik gezecht dat ik vandaag verder ga met de style dictionary en dat ik me vanochtend heb aangemeld voor de Frontend masters courses en dat ik ga kijken wat dat inhoud en of er wat interessants tussen zit om te doen. Ik vroeg aan Robbert welke technologiëen nou echt handig zijn om op te pakken en hij zei: 

#### Aangemeld voor:
- GitHub
- Git 
- GitHub actions
- Node.js
- npm
- Playwright
- Typescript 
- Vite
- Vitest
- (css + JS)

#### Interessant voor de toekomst:
- Docker
- RxJS
- Storybook

Ik heb in de themes repo van Frameless de ma tokens/css variabelen aangepast naar de fdnd tokens. 
- Ik heb het `fdnd.tokens.json` bestand toegevoegd in het src mapje. 
- Ik heb daarna in het `style-dictionary-config.js` bestand de oude `tokens.json` aangepast naar de `fdnd.tokens.json` in de `const createConfig = ({ source = ['src/**/fdnd.tokens.json', 'src/**/*.fdnd.tokens.json'] })` 
- Ik heb in de `style-dictionary.mjs` ook weer de oude `tokens.json` aangepast naar de `fdnd.tokens.json` bij de `let sd = new StyleDictionary({ source: ['src/fdnd.tokens.json', 'src/*.fdnd.tokens.json'] });`
- Daarna heb ik in de `style-dictionary-config.mjs` ook de oude `tokens.json` aangepast naar de `fdnd.tokens.json` bij de `  const sd = new StyleDictionary({ source: ['figma/**/*.fdnd.tokens.json'] });`
- Met `pnpm ruin build` in de terminal heb ik de veranderingen doorgevoerd naar het `variables.css`, hierin zijn nu de ma kleur variabelen veranderd naar de fdnd kleuren
- In de terminal vanuit het hoogste niveau themes met `cd packages/storybook` naar het storybook mapje navigeren, dan in de terminal `pnpm run storybook` om lokaal een storybook te runnen

Verder heb ik acces nodig om een nieuwe branch aan te maken en te kunnnen pushen naar de themes repo dus dat heb ik gelijk geregeld met Robbert. Nu heb ik een nieuwe branch aangemaakt alleen zijn mijn commits beland op de main branch denk ik, dus ik kan nu alsnog geen pullrequest aanmaken. <br>
Ik ben in de frontend masters course begonnen met een git course. De 'Git In-depth' van Nina Zakharenko. Omdat ik veel git dingen nog kan leren. Ik ben ongeveer 50 minuten bezig geweest hiermee. Er is ook een [frontend masters blog](https://frontendmasters.com/blog/) die ik in de gaten kan houden de komende weken.

## Dinsdag 17-3-2026 
In de standup aangegeven dat ik ik vandaag een pull request ga maken van wat ik gister heb gedaan. Ook dat ik het in mijn stage repo ook geregeld wil hebben als dat gaat lukken en dat ik verder ga kijken naar de courses. <br>
Ik heb een [pull request aangemaakt](https://github.com/nl-design-system/themes/pull/1379) via github branches en deze gedocumenteerd en een label 'do not merge' aangehangen aangezien het een oefen pull request is. Ik kreeg een foutmelding en Robbert vertelde dat de meest gebruikte manier om het op te lossen is om `pnpm run lint-fix` te runnen, maar omdat deze niet overal bij kan is een `pnpm run lint` ook handig om erbij te gebruiken. `pnpm run test` en `pnpm run build` zijn ook nog goeie om te controleren waarom een test in je pull request faalt. Aan de hand van die uitleg heb ik mijn [git spiekbriefje](/content-j2/stage/git-terminal-spiekbriefje.md) aangevuld in de markdown van deze repo. Robbert zag dat en zei dat ik hem ook in een slack canvas kan bijhouden in het kanaal wat ik met Robbert en Yolijn heb, op die manier kan hij checken of ik het goed begrijp. <br>
Ik heb meegeluisterd met de heartbeat van het NL design system. Er werdt verteld over hoe het Candidate proces gaat, dit houd in dat de componenten herbruikbaar gemaakt worden. En er was een gebruikers onderzoek gedaan en de resultaten hiervan werden gedeeld en besproken. Het was heel interessant om te zien dat er daadwerkelijk echte gebruikers een figma prototype hebben getest en aan de hand daarvan een redesign is gekomen waarna het nog een keer getest is. <br>
Daarna ben ik bezig geweest met het debuggen van de pullrequest. Ik heb met `pnpm run lint-fix` een prettier issue gefixt en een extention gedownload zodat hij nu op save standaard een prettier runt. Daarna was het nog niet gefixed dus heb ik een `pnpm run lint` gedaan, maar hier kwamen alleen twee warnings uit die geen invloed hadden op de werking van de code. Morgen ga ik verder uitzoeken wat dit probleem is.

## Woensdag 18-3-2026
In de stand up heb ik gezegd dat ik vandaag bezig ga met het debuggen van een error. Daarna heb ik in figma tokens studio de tokens die een error in figma gaven opgelost. Deze heb ik gepushed naar mijn stage repo in github, vanuit daar heb ik het bestand gekopieërd naar de nl-design-system/themes repo. Hierin heb ik weer de `pnpm run build`, `pnpm -w run lint` en `pnpm run storybook` gerunt. Hieruit kwamen geen errors, behalve dat in het storybook de 'color' property niet gelezen kan worden, wat al zo was. 
Ik kreeg een pnpm error, de npm en pnpm deed het niet meer. Ik heb met Marwa en Ali in call gezeten om het opnieuw te instaleren. Daarna werkte dat wel weer, maar kreeg ik een error in de pull request. De `pnpm run test` en `pnpm run build` komen goed terug dus ik ben aan het uitzoeken hoe ik het kan oplossen. 