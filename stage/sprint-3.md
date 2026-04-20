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

## Vrijdag 10-4-2026
De standup heb ik vanochtend gemist omdat mijn assessment ineens vervroegd was. Mn assessment ging super goed, ik heb 22 van de 24 punten gehaald en dat is omgerekend een 9. In de middag heb ik een style lint toegevoegd aan mn /stage-anouk repo. Ik heb het voorbeeld van Robbert overgenomen en het geinstalleerd als een pnpm pakketje. 

***

## Maandag 13-4-2026
Tijdens de standup heb ik verteld dat mijn assessment van vrijdag heel goed ging en dat ik de style lint heb toegevoegd aan mijn /stage-repo om te oefenen. En ik heb verteld dat ik vandaag verder ga met het toevoegen van de darkmode aan mijn fdnd thema van mijn npm pakketje. 
Ik heb meegedaan aan de retro vanf frameless, dit was een team brede retro dus het ging over de algemeene samenwerking en niet specifiek uit een project. Eerst deden we een ijsbreker die Yolijn heeft verzonnen: <br>
`` "De gepofte aardappel heeft een comeback gemaakt! Honderden Britten wachtten tot wel zes uur om een gepofte aardappel van twee broers uit Preston te scoren. Bij een evenement in Manchester kampeerden mensen zelfs voor de ingang om een gratis exemplaar te bemachtigen. Ook in de sjieke wijk Soho in Londen zorgt hun pop-upkraam dagelijks voor gigantische rijen.Ook de Babbelbox is wel benieuwd en vraagt zich af: voor welke lekkernij zou u uren wachten?" `` Mijn andwoord hierop was de 100 hours brownie. Omdat dat deeg heel lang moet chillen in de koelkast voor de textuur. <br>
Daarna gingen we door met het aangeven door een emoji hoe je de samenwerking vind gaan. En daarna konden we feedback in 4 kolommen neerzetten: Wat ging er goed en moeten we niet vergeten, wat ging er prima maar kan beter, wat ging niet goed en wat snap je niet/overige vragen. We hebben hier 10 minuten voor gekregen en daarna gingen we de ingestuurde punten groeperen op categorie. Hierna gingen we stemmen op de punten die je het belangrijkste vind, iedereen kreeg 5 stemmen. De punten waar het meest op was gestemd gingen we daarna met zn allen bespreken. Hier kwam eigenlijk uit naar voren dat de samenwerking al erg goed gaat en mensen elkaar graag helpen en dat ook fijn vinden. Wat vooral nog beter kan was meer documentatie en overzicht creeeren omdat er in zo veel projecten tegerlijk wordt gewerkt. 

## Dinsdag 14-4-2026
Ziek.

## Woensdag 15-4-2026
In de standup aangegeven dat ik ziek was dus vandaag weer ga op pakken waar ik maandag was gebleven. Dus dat ik verder ga met de darkmode aan de fdnd tokens toevoegen. Ik heb alle tokens in figma toegevoegd en daarna de json naar github gepushed. Daar vanuit heb ik de css aangepast, de lightmode is nu overschreven door de nieuw toegevoegde darkmode tokens. Dat wil ik morgen graag samen met Robbert uitzoeken. Ik heb een aantal extra test buttons gemaakt op de test pagina zodat ik kan zien wat er gebeurd als de dark/light mode switchen. 

## Donderdag 16-4-2026
Bij de standup vandaag aangegeven dat ik verder ga met het uitzoeken van de js van de darkmode waar ik gister mee bezig was, en dat ik ga kijken of ik de style lint nog verder kan uitbreiden. Ik ben in de ochtend gaan spelen met een [codepen](https://codepen.io/anouk24/pen/LERqdxV?editors=1100), want ik had een idee wat ik al even uit wilde werken, namelijk een checkbox die als je het aanvinkt gehighlight wordt dus dat heb ik uitgewerkt. Robbert kwam even bij mij buurten of ik eruit kwam met de darkmode. We hebben een scriptje geschreven waarin de darkmode uit een van de json bestanden wordt verwijderd en hij een duplicate maakt waarin de darkmode blijft staan. Het scriptje werkt wel maar wat elke regel precies doet weet ik nog niet. Ik kreeg de taak om verder uit te zoeken of de light dark mode nu met de hand werkt en dat doet het. Ik heb een `@media (prefers-color-scheme: dark) {}` om ALLE darkmode css variabelen gezet en hetzelfde voor de lightmode. Ook moest ik het nieuwe bestand uit het darkmode mapje linken in de HTML. Ik heb ook een divje gezet met de classname voor kleuren, die als het goed is gaan wisselen op dark of light mode. Dat doet het al wel, maar de dark mode variabelen staan in de lightmode css file en andersom. Ik denk dat het in het scriptje verkeerd is gezegd want in de json staan de tokens nog wel goed. In het volgende scriptje verwijder je namenlijk juist de darkmode bij de darkmode.
```
    const colorSchemeDarkPreprocessor = {
        name: "color-scheme-dark", 
        preprocessor(tokensJSON) {
            removeDarkMode(tokensJSON);
            return tokensJSON;
        },
    };
```
De oplossing hiervan hebben we voor nu even heel simpel gehouden, morgen kan ik het beter refactoren. Voor nu heb ik de lightmode tokens naar de darkmode map verwezen en andersom zodat het visueel klopt op de test website. Ik kreeg ook nog dit stukje code van Robbert: 
``` 
    // zet er op de build bij dat het darkmode css bestand binnen een media query staat, zodat deze 
    alleen wordt toegepast wanneer de gebruiker een voorkeur voor een donker kleurenschema heeft ingesteld
    let css = await readFile("./dist/dark-mode/variables.css", "utf-8");
    css = `@media (prefers-color-scheme: dark) {\n${css}\n}`;
    await writeFile("./dist/dark-mode/variables.css", css);
```
Dit stukje code zorgt ervoor dat de `@media (prefers-color-scheme: dark) {}` automatisch bij de build wordt neergezet. Als je dit elke keer met de hand doet dan wordt het bij elke build overschreven. Ik heb comments gezet in de code die we vandaag hebben geschreven zodat ik weet wat waarvoor is en comments erbij gezet wat ik nog moet refactoren. 
Ook heb ik aan Yolijn vermeld dat ik er volgende week vrijdag middag niet ben omdat stichting accessibility dan langs komt op school en Justus het leuk vind als ik daarbij ben. Yolijn is er benieuwd wat ze komen vertellen omdat zij ook met hun samenwerken. 

## Vrijdag 17-4-2026
In de standup aangegeven dat ik vandaag de code van gister ga refactoren en vanmiddag naar de 'the web you want' dag ga. Savi kent een van de spreeksters en vond het leuk dat ik daar heen ga! Daarna heb ik de code geupgrade zodat het leesbaar en logish is. Ik heb het stukje waar je de darkmode tokens removed hernoemt naar:
```
    const colorSchemeDefaultPreprocessor = {
        name: "color-scheme-default", 
        preprocessor(tokensJSON) {
            removeDarkMode(tokensJSON);
            return tokensJSON;
        },
    };
```
Op deze manier klopt het leesbaar en visueel. In de middag ben ik naar de ['the web you want'](../content-events/the-web-you-want.md) conferentie geweest. 