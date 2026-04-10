# Sprint 3

## Dinsdag 7-4-2026
Ik heb in de stand up verteld dat ik vandaag ga proberen om mijn npm pakketje op te halen in code pen. Hier ben ik mee bezig geweest. Het pakketje wilt niet meewerken, ik heb er met Cyd naar gekeken en zij gaf me een aantal tips maar dit werkte ook niet. Ik ben verder gegaan aan het herorganiseren van mijn i love web, ik heb een apparte pagina gemaakt voor mijn stage aantekeningen. 

## Woensdag 8-4-2026
In de standup heb ik aangegeven dat ik vandaag even met Robbert ga kijken naar wat ik vandaag ga doen. Hij heeft even meegekeken naar de code pen en hij zag dat het wel al gelukt was maar dat de kleuren van mijn tokens niet zijn aangepast. Dus ik heb gekeken hoe ik die kan aanpassen. In figma heb ik de kleuren nog een keer aangepast en gepushed naar github, daar heb ik het via de terminal met een git pull lokaal gehaald en een pnpm run build uitgevoerd. De kleuren zijn nu wel aangepast bij de `--basis-color-...` kleuren in de /themes repo maar nog niet bij de rest en ook niet in mijn /stage-anouk repo. Om het gelijk te krijgen in de variables.css heb ik de json uit de /themes repo gekopieerd naar de /stage-anouk repo en opnieuw een `pnpm run build` uitgevoerd, maar ook dit werkte niet. Ik heb het variables.css bestand even verwijderd en opnieuw een build gedaan om het weer terug te zetten. Maar ook dit werkte niet. Verder heb ik ook wat issues bijgewerkt van documentatie en commits gekoppeld die ik was vergeten te koppelen. En ik heb weer even wat sub issues ge-reorganiseerd. <br>
Robbert heeft me uitgenodigd voor een meeting met de rijkshuisstijl-community over 'Page Layout brainstorm'. Dit ging over een layout componentje in bijv een header of footer component. Hierop kan dan alleen de styling komen te staan voor de kolommen layout en later evt responsive design. Op die manier kan je overal heel simpel de zelfde layout op verschillende content blokken (wat ook weer apparte componenten zijn, zonder layout styling, zodat het helemaal gestyled kan worden door de layout component) toepassen. Zo kan je dus veel meer variaties maken. Een goed voorbeeld hiervan zijn de websites van [OpenGemeenten](https://www.opengemeenten.nl/over-ons/deelnemende-gemeenten). Deze gemeente websites lijken allemaal heel erg op elkaar en er zijn ongeveer 3 opties voor een layout van de footer die hergebruikt worden door de websites.
Robberts uitleg: 

```
    <footer class="fdnd-footer">
    <div class="fdnd-footer__content">
        <p class="fdnd-footer__text">© 2024 Anouk. All rights reserved.</p>
    </div>
    </footer>

    <footer class="fdnd-footer">
    <div class="fdnd-footer__content">
        <div class="rhc-footer-design"></div>
    </div>
    </footer>

    <utrecht-page-footer>
        <rhc-footer-design>
            <p slot="tagline">Tagline</p>
            <utrecht-link-list>
                <ul slot="column-1">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </utrecht-link-list>
        </rhc-footer-design>
    </utrecht-page-footer>
```

Samen met Robbert heb ik verder gekeken hoe het kan dat de json en de css bestanden niet met elkaar kletsen, hij begreep er ook niks van. Uiteindelijk kwamen we erachter dat de darkmode tokens de lightmode tokens overschrijven. We hebben gekeken hoe we dit uit kunnen zetten, door te spieken bij de [figma.tokens.json](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/figma/figma.tokens.json#L9201) van de rijkshuisstijl community (onderaan het bestand) omdat ze meerdere kleuren themas hebben waar ze tussen kunnen wisselen ([hier een voorbeeld](https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-templates-homepage--docs&globals=theme:Uitvoerend+-+Paars) waar je de kleur aan kan passen bij: uitvoerend - paars theme). En in de [build](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/build.mts#L14) die ze hebben om te kijken hoe ze dan zorgen dat de kleuren elkaar niet constant overschrijven maar alleen wanneer ze dat zeggen. En zijn we erachter gekomen dat je met [dit scriptje](https://www.npmjs.com/package/@tokens-studio/sd-transforms?activeTab=readme) kan zeggen dat hij iets niet moet overschrijven, hier gaan we morgen verder naar kijken. Voor nu hebben we de dark mode uit de `tokenSetOrder` gehaald in de `fdnd.tokens.json`. 

## Donderdag 9-4-2026
In de standup vanochtend heb ik aangegeven dat ik verder ga met het maken van een darkmode voor het npm pakketje wat ik van de fdnd tokens heb gemaakt. En dat ik morgen mn assessment heb en ik me daar vast op voor ga bereiden. Ik heb wat linkjes bijeen gezocht in mn notities zodat ik dat snel kan laten zien en erbij gezet waar de linkjes voor staan en wat ik er aan heb gedaan. Ik heb ook de documentatie in mn i love web verder geupdate, de dingen die ik in een slack kanaal heb gedocumenteerd ook overgezet. Daarna ben ik nog even met css gaan spelen in code pen pm te testen en daarna het toepassen op mn i love web. (h1 van de stage pagina en de hover op de linkjes van home) 
Met Robbert heb ik besproken wat ik heb voorbereid voor mn assessment. We waren allebij te gaar na een lange dag om nog naar de dark mode te kijken dus dit gaan we volgende week doen. Robbert vroeg of ik het interessant vind om wat over style lint te leren, hij heeft me een aantal bronnen gegeven om mee aan de slag te gaan. Je kan daarmee een toevoeging op je config.json maken waarin je de css (die je normaal eigenlijk niet wilt linten) wel kan aanpassen zodat de syntax errors eruit zijn. Hij zei dat het leuk is om dat aan mijn /stage-anouk repo toe te voegen. Dus ik ben begonnen met de bronnen bekijken. 
