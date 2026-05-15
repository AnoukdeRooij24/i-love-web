# Sprint 5

## Maandag 4-5-2026
In de standup heb ik aangegeven dat ik vandaag verder ga met het puzzlen met web componenten. Ik heb mijn notion bij gedocumenteerd, en ik heb de issue waarin ik aan het werk was voor de [webcomponenten gedocumenteerd](https://github.com/frameless/stage-anouk/issues/40). De draggeble functie van de tasklist deed het niet, daarvan heb ik uitgezocht waar het aan kon liggen. Uiteindelijk bleek de code wel goed te zijn maar de import link niet. Toen ik het probeleem had gevonden in een nieuwe codepen heb ik het ook op de oude codepen toegepast. 

## Dinsdag 5-5-2026
In de standup heb ik verteld (vooral voor Robbert want die had ik een week niet gesproken) dat ik de afgelopen dagen met web componenten bezig ben geweest en dat ik me nu weer ga onderdompelen in Javascript, hij vroeg hoe ik dat ging doen. Ik gaf aan dat ik een curus ging zoeken op frontend masters die iets dieper op Javascript in gaat, van Marwa kreeg ik toen een curus door gestuurd die zij, Tessa en Savi hebben gedaan. 
Ik heb de rest van de dag de cursus gedaan, geoefend in een codepen en issues gemaakt waarin ik de curus kan documenteren.

## Woensdag 6-5-2026
In de standup aangegeven dat ik verder ging met de JS cursus die Marwa had aangeraden. 
Hier ben ik de hele dag mee bezig geweest en ik heb in de codepen verder geoefend.

## Donderdag 7-5-2026
In de standup verteld dat ik verder ga met de JS cursus en dat ik graag even met Robbert bij wil kletsen. Ik heb bijna drie hoofdstukken kunnen doen van de cursus. De aantekeningen bijgehouden en geoefend in de codepen. Ook heb ik Robbert geupdate over hoe afgelopen week is gegaan en wat ik heb gedaan. Aan het eind van de middag kreeg ik van Robbert nog een belasting lesje. Ze willen/moeten een certificatie krijgen over de loon omgeving van de medewerkers van Frameless. Dus hij vertelde waarom een bedrijf dat wilt, dan heeft het bedrijf waar de facturen vandaan komen minder kans om aansprakenlijk gesteld te worden voor als een medewerker/ingehuurde zzp-er de loonheffingsbelasting niet betaald. Frameless heeft dan strakjes 3 certificaten: voor veiligheid, voor kwaliteit en dan voor belasting. Hij liet zien dat ze alle documentatie van dit soort dingen op een website willen hebben: [handboek.frameless.io](https://handbook.frameless.io/docs/category/registrations). Hierop kunnen alleen mensen komen die toegang hebben en daar staat veel documentatie/stappenplannen voor procedures. Deze website is dus ook goed om aan te kunnen tonen bij een audit voor de certificaten.

## Vrijdag 8-5-2026
In de standup heb ik verteld dat ik me weer verstop in de JS cursus en dat ik bij de meeting met het kernteam van Utrecht aanschuif. 
In de meeting met Utrecht kwamen er een paar voorbeelden van goeie of juist slechte websites: [Delft](https://www.delft.nl/) is een slecht toegankelijke website, de gemeente [Utrecht](https://www.utrecht.nl/) heeft ook veel verbeterpuntjes maar is al wel op de goede weg & [GoVocal](https://www.govocal.com/nl-nl) had 140 issues uit een audit die Savi had gedaan en die zijn ze nu stuk voor stuk aan het oplossen om de A status te behalen. Ook heeft Robbert de verschilende token bestandjes samengevoegd voor Utrecht zodat ze dat via figma kunnen updaten, maar de [Chromatics test](https://www.chromatic.com/build?appId=62d564c42f1b71308b19d073&number=3524) geeft heel erg veel veranderingen aan en Robbert denkt dat ik daar ook wel naar zou kunnen kijken of het me lukt om een simpele op te lossen. 
Ik heb het hoofdstuk waar ik gister mee bezig was van de cursus afgerond en alle documentatie/oefeningen daarvan gemaakt. Ook heb ik het laatste hoofdstuk van dit onderdeel van de cursus afgerond en de [issue](https://github.com/frameless/stage-anouk/issues/45) gedocumenteerd en gesloten. 
Robbert kwam bij me checken of ik nog verder was gekomen met de scraper code, ik heb laten zien dat ik de niceColor tokens array heb aangepast door: `niceColors.push(token.$value)`. Robbert vond dat ik goed bezig was maar het zou ook op een veiligere manier kunnen: `niceColors = [...niceColors, token.$value];`. Op deze manier verander je niet de oude array, maar voeg je aan alles wat er in de oude array zat, de nieuwe tokens toe en blijft de oude array in tact. Het maken van nieuwe arrays is gunstig voor performance maar niet voor de opslag, ik kreeg hierover een klein geschiedenislesje. Met het aanmaken van nieuwe arrays moet Robbert altijd denken aan het [defragmenteren van een harde schijf](https://www.youtube.com/watch?v=jFbkujZ0OuI). 

***

## Maandag 11-5-2026
In de standup heb ik verteld dat ik verder ga met de JS cursus en dat ik er bijna doorheen ben. Ik heb dat de rest van de dag ook gedaan.

## Dinsdag 12-5-2026
In de standup heb ik aangegeven dat ik vandaag (of misschien morgen) de JS cursus denk af te ronden. En dat ik even bij de heartbeat ga buurten vanmiddag. 
Ik heb 3 hoofdstukken van de JS course gedaan en de oefen codepen die erbij hoort afgemaakt. Ook ben ik bij de heartbeat geweest waar Robbert ging vertellen over het root component. Dat was een duidelijk verhaal en een slimme oplossing voor veel problemen. Hij noemde nog een paar dingen die ik zelf even wil opzoeken en uitzoeken de komende dagen.

## Woensdag 13-5-2026
In de standup aangegeven dat ik de JS course vandaag af ga ronden. Dat is me ook gelukt. Ik heb daarnaast ook nog gekeken naar de font-size-adjust want robbert had het daarover in de heartbeat van gister en ik vond het interessant om dat uit te zoeken voor mn i love web. 