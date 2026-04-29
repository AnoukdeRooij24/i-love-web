# Sprint 4

## Maandag 20-4-2026
In de standup aangegeven dat de darkmode tokens nu goed om werken, en dat ik vrijdagmiddag naar de ['the web you want'](../content-events/the-web-you-want.md) conferentie ben geweest. En dat ik met Robbert ga overleggen wat mijn plan is voor de komende sprint. 
Robbert gaf aan dat ik in de /stage-anouk repo de dark en light mode in een bestand kan zetten. Dit kan ik doen door: .fdnd-theme met light mode, de color-scheme en de @media in 1 file. <br>
Robbert heeft me het even zelf uit laten vogelen en ik was al een heel eind gekomen. Maar ik liep toch vast op hoe ik het in de css kon krijgen dus keek hij even met mij mee. 
- Ik heb de dark en lightmode tokens bestanden in een tijdelijke map geparkeerd
```
    // maak twee builds aan, een voor de lightmode en een voor de darkmode en zet dit in een tmp (temporary) map
    const sdLight = new StyleDictionary({
    ...createThemeConfig({ buildPath: "tmp/light-mode/" }),
    preprocessors: [colorSchemeDefaultPreprocessor.name, "tokens-studio"],
    });
    await sdLight.buildAllPlatforms();

    const sdDark = new StyleDictionary({
    ...createThemeConfig({ buildPath: "tmp/dark-mode/" }),
    });
    await sdDark.buildAllPlatforms();
```

- De dist map hadden we daardoor verwijderd dus die moeten we weer opnieuw maken
``` 
    // aanmaken van de dist map
    await mkdir("dist/");

```

- Daarna zoek je de css bestanden op in de tijdelijke map en zet je ze allebij in een variablele
```
    // zoek de light en dark mode css bestanden en lees deze uit
    const cssDark = await readFile("./tmp/dark-mode/variables.css", "utf-8");
    const cssLight = await readFile("./tmp/light-mode/variables.css", "utf-8");
```

- De css bestanden die in de losse variabelen staan voeg je samen tot een variabele waar je eerst de light mode aan toevoegd, dan de `@media` waarin je de darkmode toevoegd. Als je tussen backtiks aan het typen bent kun je met `${ }` een string toevoegen waar in dit geval net aangemaakte js variablen staan.
```
    // zet de lightmode in een de cssVariables, voeg een @media voor darkmode toe en zet daar de darkmode css in
    let cssVariables =`${cssLight} @media (prefers-color-scheme: dark) {\n${cssDark}\n}`;
```
- Als laatste stap build je alles wat er in de samengevoegde variabele staat en plaats je dat in de `dist` map in het `variables.css` bestand
``` 
    // voer de commando' in cssVariables uit en zet het in de dist map in het variables.css bestand
    await writeFile("./dist/variables.css", cssVariables);
```

Het resultaat in css is dan:
```
/**
 * Do not edit directly, this file was auto-generated.
 */

:root {
  --fdnd-color-violet: #9F77EE;
  --fdnd-color-cyaan: #89E2C1;
  ...

}

@media (prefers-color-scheme: dark) {
    :root {
    --fdnd-color-violet: #9F77EE;
    --fdnd-color-cyaan: #89E2C1;
    ...
    }
}
```

Na een kleine refactor van Robbert om de js iets leesbaarder te maken ziet het stukje code om de light en darkmode samen te voegen er nu zo uit: 
```
    const css = (strings) => strings.join("");

    // zet de lightmode in een de cssVariables, voeg een @media voor darkmode toe en zet daar de darkmode css in
    let cssVariables = css`
    /* light mode here */

    @media (prefers-color-scheme: dark) {
        /* dark mode here */
    }
    `
    .replace("/* light mode here */", cssLight)
    .replace("/* dark mode here */", cssDark);
```
Ik heb de werkende light en dark mode die nu in een bestand staan gereleased als nieuwe versie naar mn npm package. In de middag heb ik met Robbert Vite en colorjs.io geinstalleerd, dit is handig voor de live reload van web componenten en colorjs is handig voor een grotere kleuren range. Van Robbert heb ik een scriptje gekregen waarmee je tokens/css kan scrapen van een website. Het is nu nog hard coded en ik snap er nog niet veel van maar het werkt iig wel. De komende dagen ga ik me foccussen op het snappen van het script en wat meer js/ts kennis opdoen via frontend masters.

## Dinsdag 21-4-2026
In de standup aangegeven dat ik met een css scraper bezig ben om te kunnen vergelijken of de gebruikte css overeen komt met de design tokens. Iets wat ook vooral Bart heel vet vond. In de standup had Robbert aangegeven dat ik bart vandaag ook even kon lastigvallen voor hulp. Ik had van Bart de volgende code gekregen: `pnpm add @nl-design-system-community/design-tokens-schema` `import { walkTokens } from '@nl-design-system-community/design-tokens-schema'` `walkTokens(myTokens, (token => { console.log(token.$type); });` en daarna zijn we samen in een huddle gegaan. Ik heb heb de code uitgelegd en laten zien. En toen heeft hij me geholpen met het toepassen van de code die hij had gestuurd. Toen we voor elkaar hadden gekregen dat de gescrapde info in een console.log te zien is moest hij door naar een volgende meeting, dus heb ik zelf verder gepuzzeld. <br>
Ik ben ook een beetje orde in de chaos gaan aanbrengen en ik heb een aantal issues gedocumenteerd in het projectboard. En heb ik alle openstaande tabjes die interessant zijn opgeslagen zodat ik die weer terug kan vinden. En heb ik bedacht wat ik verder allemaal wil documenteren zodat ik dat morgen of volgende week (wanneer ik niet op kantoor ben) kan doen. Ik ben in de middag begonnen met de JavaScript course op frontend masters. Ik heb hiervan aantekeningen gemaakt en in een issue op mijn stage repo gezet, in een gedeeld slack kanaal gezet zodat mijn stagebegeleiders in de gaten kunnen houden welke dingen ik wel en niet al weet en voor mezelf heb ik dat spekbriefje ook in een [markdown](./js-spiekbriefje) in mn i love web gezet zodat ik het kan bewaren als ik niet meer op stage ben. 

## Woensdag 22-4-2026
In de standup van vanochtend heb ik aangegeven dat ik vandaag vooral verder ga met de frontend masters JS course. In de ochtend heb ik veel dingen aan documentatie voor mezelf geordend in mn i love web en in issues op de /stage-anouk repo. Ook heb ik gekeken hoe ik de info van de `walkTokens` variable die nu alleen in een console.log staat op de website kan tonen maar ik kwam hier niet uit. Ik ben verder gegaan met het hofdstuk 'operators' van de js course, hiervan heb ik aantekeningen gemaakt zodat ik het makkelijk terug kan vinden. Ik heb ook onderzocht waarom de kleuren in de json niet overeen komen met de kleuren van de fdnd site, en toen ik dat had gevonden heb ik ze aangepast zodat het wel de zelfde kleuren zijn. Dit heb ik doorgezet van de main branch naar de side quest branch waar ik met de scraper in aan het werken ben. Hier kan ik nu op kijken of de keur tokens nu wel overeen komen met de css van de website. Dit wilde nog niet lukken. Verder heb ik nog even met Justus gekletst ook over alle mogelijkheden voor de toekomst. 

## Donderdag 23-4-2026
In de standup vandaag aangegeven dat ik bezig ben met de javascript first steps course en dat ik daar vandaag mee verder ga. Ik heb twee hoofdstukken (van ruim een uur) gedaan vandaag, ik heb ondertussen aantekeningen gemaakt met voorbeelden zodat ik het makkelijk terug kan lezen. Mijn 'nieuwe dingen leer' laadje is nu wel vol dus ben ik ook verder gegaan met kijken of ik met het script van de scraper wat verder kon komen.

## Vrijdag 24-4-2026
In de standup heb ik verteld dat ik vandaag naar de git sessie met utrecht ga, dit was al weer een tijdje geleden. En dat in de middag stichting accessebility op school langs komt en dat ik daar in de middag mee bezig ben. De workshop van stichting accessebility was interessant. We gingen kijken in groepjes studenten wat stichting accessebility belangrijk vind en welke punten in hun leerdoelen staan. Daarna hebben we gekeken waar we die leerdoelen al behandelen in het fdnd progamma. We hebben ook bespoken waarom we sommige punten niet behandelen en welke we meer terug kunnen laten komen. 

*** 

## Dinsdag 28-4-2026
In de standup aangegeven dat ik vandaag mijn geschreven notities van vrijdag even goed ga orderenen en verder ga met de JS cursus afmaken. Ik ben in de ochtend veel bezig geweest met dingen ordenen en mn notities op orde maken. Na de luch heb ik meegekeken met de heartbeat waar Bart heeft verteld over de theme wizzard updates. En er is verteld waarom het belangrijk is om de figma hygiene aan te houden en wat dat precies inhoud. Daarna heb ik ook het [filmpje wat Koop doorstuurde](https://www.youtube.com/watch?app=desktop&v=HgNDii20FG4) gekeken, daar stonden best wat interessante dingen in. 

## Woensdag 29-4-2026
In de standup verteld dat ik verder ga waar ik gister mee bezig was, de js curuses en dat mijn focus deze week vooral ligt op het opdoen van nieuwe kennis. Ik heb de JS curus [the first steps of js](https://frontendmasters.com/courses/javascript-first-steps/) vandaag afgerond en ook de laatste aantekeningen toegevoegd aan mijn [js spiekbriefje](./js-spiekbriefje) en de bijbehoorende issue op /stage-anouk gesloten. Daarnaast ben ik verder gaan kijken en heb ik uitgevonden hoe ik de tokens van de `fdnd.json` in de `niceColors` kan krijgen en heb ik dat gedaan.