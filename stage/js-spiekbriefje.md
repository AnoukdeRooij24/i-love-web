# JavaScript spiekbriefje

## Values and data types
- `typeof` = kan in de console aangeven als je het voor iets zet wat voor code het is:
    - `typeof “42”` returns `"string"`
    - `typeof 42` returns `"number"`
    - `typeof true` returns `“boolean”`
- Primitive types = string, number, boolean, undefined & null
- Objects = al het andere
- `number` = zonder quotes een getal of infinity
- `string` = textual pieces of data:
    - Dit kunnen letters, cijfers, emojis etc. zijn tussen de volgende quotes:
    - `“dubbel quotes”`
    - `‘single quotes’`
    - ``backticks``
- `boolean` = returns `true` or `false`
- `undefined` = perongeluk niks ingezet maar er had wel wat in moeten staan
- `null` = expres niks ingezet

### Strings:
- `.length` = vertelt hoeveel iets er in iets zit
    - vaak een getal van een aantal karakters in een string
    - de telling van de nummers begint bij 0
    - een spatie telt ook als een karakter
    - `""` = een empty string
    - `" ".length` returns 1 (spatie)
    - `"boe".length` returns `3`
    - `“some string"` returns `11` (spatie)
- `index` = the number given to each thing inside a more complex thing when that thing is ordered
    - door de `[ ]` met een getal erin achter een string te plakken krijg je het karakter terug wat op dat getal in de string staat
    - `"boe"[0]` returns `"b"`
    - `"boe"[2]` returns `"e"` (telling begint bij 0)
- `.indexOf` = de index (positie getal) van een bepaald karakter
    - als er meerdere dezelfde karakters in een string staan dan returnt alleen de eerste die hij tegenkomt
    - Een -1 geeft aan dat die karakter niet in de string staat
    - Hoofdletter gevoelig!!!
    - `"boe".indexOf("e")` returns `2`
    - `"boe".indexOf("h")` returns `-1`
    - `.indexOf` werkt ook als je van een substring de index wilt weten:
        - `"kiekenboe".indexOf("boe")` returns `7` (vanaf dat punt begint de substring, eind positie krijg je niet)
        - `"kiekenboe".indexOf("schrik")` returns `-1`
- `.includes` = heeft de string een bepaald stukje string in zich bestaande uit specifieke karakters
    - returns met een boolean (true or false)
    - `"kiekenboe".includes("boe")` returns `true` (ja dit stukje string zit in de grote string)
    - `"kiekenboe".includes("schrik")` returns `false` (nee zit er niet in)
- `.startsWith` = start een string met bepaalde karakters
    - returns met een boolean (true or false)
    - `"kiekenboe".startsWith("kiek")` returns `true`
    - `"kiekenboe".startsWith("boe")` returns `false`
- `+` = telt twee strings bij elkaar op
    - `"kieken" + "boe"` returns `"kiekenboe"`
- `.toLowerCase()` = maakt alle karakters in de string waar je dit achter zet lower case
    - `"KIEKENBOE".toLowerCase()` returns `"kiekenboe"`
- `.toUpperCase()` = maakt alle karakters in de string waar je dit achter zet upper case
    - `"kiekenboe".toUpperCase()` returns `"KIEKENBOE"`

***

## Operators
- Operator voorbeelden:
    - `+` `-` `*` `/` (artihmetic)
    - `>` `<` `===` (comparison)
    - `typeof`
- Arithmetic operators
    - `+` = plus
    - `-` = min
    - `*` = keer
    - `/` = delen door
- `+` operator kan je voor verschillende dingen gebruiken:
    - `“string” + “string”` samenvoegen
    - `nummer + nummer` samenvoegen
    - heeft minstens twee values nodig
- De volgorde waarin JS de `+` `-` `*` `/` is het zelfde als met wiskunde
- `*` wordt eerst uitgevoerd en daarna de `+`
- `4 + 1 * 2` returns `6`
- Als je de `+` tussen haakjes `()` zet dan wordt dit als eerst uitgevoerd
- `(4 + 1) * 2` returns `10`
- Comparison operators
    - `>` = groter dan
    - `<` = kleiner dan
    - `>=` = groter dan of gelijk aan
    - `<=` = kleiner dan of gelijk aan
    - `===` of `==` = gelijk aan
    - `!==` of `!=` = niet gelijk aan
    - je krijgt een boolean terug (`true` of `false`)
- Strict vs loose operators
    - `===` is een stricte operator, deze kijkt of het type value overeen komt en de inhoud overeen komt
    - `==` is een minder stricte operator, deze kijkt of als hij het omzet naar de dezelfde value type of de inhoud dan het zelfde zou zijn
    - `"1" === "1"` returns `true`
    - `1 === "1"` returns `false`
    - `1 == "1"` returns `true`
    - `1 == 2` returns `false`

    ***

## Expressions
- Een expressie resulteert in een waarde
- Een expression kunnen bijvoorbeeld twee strings zijn die samen een nieuwe string vormen
    - `“kieken" + "boe"`  returns `"kiekenboe"`
    - `"kiekenboe".includes("kieken" + "boe"` returns `true` want de expression (van twee strings bij elkaar gevoegd) zit in de eerste string

### Variables:
- Je kan een variable vergelijken met het toevoegen van iemand aan je contacten. Je maakt een nieuw contact en voegt daar een naam en nummer aan toe. Wanneer je deze naam aanroept/belt dan wordt het nummer gebruikt om die naam te bellen.
- Naamgeving van variables
    - `validVariable` (camelCase) = het meest voorkomend
    - `also_valid_but_less_common` (snake-case)
    - `Oddbut_Technicallyfine2`
    - Je kan niet starten met een nummer of andere karakters gebruiken zoals een !
- `const` = maakt een nieuwe variable aan waarvan de value ‘constant’ is en dus nooit gereassigned kan/mag worden
- `let` = creates een nieuw variable in JS, de value hiervan kan/mag worden veranderd door een andere value te assignen
    - Voorbeeld: `let remember = "Aug. 1";`
    - Achter de `let`  kan je een woord zetten wat de naam wordt van je nieuwe variable (in dit geval `remember` )
    - `=` = een value aan de naam meegeven/assignen (kan je onthouden als een pointer (→)
    - De value in dit geval is een string (`”Aug. 1”`)
    - `;` = einde variable
- Je kan ook eerst een variable maken (`let remember;`) en dan later op een andere plek in je JS een value meegeven (`remember = “Aug. 1”;`)
- Een variable kan ingezet worden als een `expression` bijv:
    - `42 - 10` returns `32`
    - `let answerToLife = 42;` en daarna `answerToLife - 10` returns `32` want de variable wordt gezien als wat er in staat
    - `let parentsAge = 23 + 24;` en daarna `parentsAge` returns `47`
- We kunnen de variables inzetten als de value die eraan is meegegeven
    - `myDeclaredVariable.toUppercase()` returns met dat wat er in de meegeven string van de variable staat in hoofdletters
- Een variable kan je ook gebruiken om een html element aan te spreken, dit doe je door een variable te maken en daaraan bijv. de `#id` mee te geven als value:
    - `let board = document.quesrySelector("#board");`
    - Wanneer je nu `board` aanroept krijg je het element terug bijv. `div id="board">`
    - Dan kan je dit ook gebruiken om informatie uit te halen zoals `board.children.length` returns `9` inplaats van `document.quesrySelector("#board").children.length`
- Een variable aan een variable meegeven kan ook, hiermee zeg je dat de eerste variable dezelfde value heeft als de meegegeven variable bijv:
    - `let scrub = “ fly”;` `let busta = scrub;` gebeurd er `busta` returns `"fly"` de connectie van `busta = scrub;` zorgt ervoor dat busta naar de value van scrub linkt en niet naar de naam van de variable
    - Als je daarna `scrub = "no love";` doet dan wordt de oude connectie met de string uitgevaagd en wordt er een nieuwe link gemaakt naar de nieuwe value dus `scrub` returns `"no love"`
    - Als je daarna het volgende doet: `busta` returns nog steeds `“fly”`  want de connectie tussen van `busta` linkt niet naar de variable `scrub` maar naar de value van scrub voordat het veranderd werd (volgorde van de code maakt uit)

### Statements vs. expressions
- Een `expression` is een vraag aan JS bijvoorbeeld wat de waarde van iets is
    - bijv. `6 + 4` (je vraagt nu aan JS wat is 6 + 4)
- Een `statement` is iets wat we zeggen dat JS moet doen zoals het maken en assignen van een variable
    - bijv. `let tien = 6 + 4;` (je zegt tegen JS dat 6 + 4 tien is)
    - `let` , `const` , `if` , `else` , `for` zijn statements

*** 

## Arrays
- Is een manier om meerdere values samen te houden in 1 collectie
    - Staat altijd tussen de vierkante haken `[ ]`
    - Voorbeeld: `let boe = ["aah", "schrik", "whahh"];`
- Alle elementen in een array krijgen een index nummer
    - Dit werkt het zelfde als met de strings
    - `boe.length` returns `3` (er zitten 3 values in de array)
    - `boe[1]` returns `"schrik"`
    - `boe.indexOf("aah")` returns `0`
    - `boe.includes(”whahh”)` returns `true`
- De values van een array kan je aanpassen
    - `boe[2] = "help";` hiermee wordt de value die op index twee staat van boe veranderd naar de nieuw meegegeven value, dus `boe` returns `Array(3)["aah", "schrik", "help"]`
    - `let lastItem = boe.pop();` met `.pop()` wordt de laatste value van boe gepakt en in een nieuwe variable gezet, dus `lastItem` returns `"help"` & `boe` returns `Array [ "aah", "schrik"]`
    - `boe.push("hallo");` met `.push()` kan je iets achter aan de array toevoegen, dus `boe` returns `Array [ "aah", "schrik", "hallo"]`
- De inhoud van een array kan veel zijn:
    - `[ ]` = een lege array
    - `["lonely"]` = een array met 1 value
    - Arrays accepteren meerdere types values in een array, dus `["string", 6, document]` gemixt kan ook
    - In een array kunnen ook meerdere arrays staan
- `.sort()` = de values in een array sorteren op alfabetische volgorde
    - `["c", "a", "d", "b"].sort()` returns `["a", "b", "c", "d"]`
    - `[4, 2, 3, 1].sort()` returns `[1, 2, 3, 4]`
    - `[100, 2, 50]` werkt niet, want de cijfers worden omgezet naar een string onderwater en de alfabetische textuele volgorde wordt aangehouden
- `.join()` = voegt de values in de array samen met het karakter tussen de `()`
    - `[”a”, “b”, “c”].join("&")` returns `["a" & "b" & "c"]`
    - `.join( )` werkt ook want dan komt er een spatie tussen de values in te staan
- `.concat()`  = concatenate, het voegt twee strings samen tot een string
    - `[1, 2, 3].concat([4, 5, 6])` returns `[1, 2, 3, 4, 5, 6]`
    - Dit kan je ook doen met een variable waar een waarde in staat:
        - `let numbers = [1, 2, 3];`
        - `let result = numbers.concat([4]);`  returns `[1, 2, 3, 4]`
        - De waarde van `numbers` returns nog steeds `[1, 2, 3]` want die waarde is niet aangepast omdat we een nieuwe variable hebben gemaakt
    - Het verschil met `.push` is dat `.push` de originele array aanpast, `.concat` maakt een nieuwe array en voegt er wat aan toe

### Mutable vs. immutable:
- Mutable data kan aangepast worden zoals `arrays`
    - Bijv. met `.push`
    - Bijv. met `let` een variable aanmaken en een value geven
- Immutable data blijft altijd het zelfde zoals `strings`  & andere `primitive types`
    - Bijv. doormiddel van `.concat` (een nieuwe array aanmaken en de oude in tact laten)
    - Bijv. met `const` een variable aanmaken en een value geven
- Bij een immutable variable die je met const aanmaakt kan de link tussen de naam en de value niet veranderd worden. Maar de inhoud van de value kan wel veranderen en is dus wel mutable.

***

## Objects
- Een object kan je herkennen doordat het tussen `{ }` staat
- Een object heeft een value, die met properties naar verschillende values wijst, tussen de properties staat altijd een komma
    - `const person = { 
       name: “Anouk”,
       birthYear: 2005
    };`
- Je kan de naam van het object aanroepen en met een `.` ertussen de specifieke property aanroepen binnen het object
    - [`person.name`](http://person.name) returns “Anouk”
- Je kan dezelfde dingen met de properties doen als dat je rechtstreeks met de strings/numbers zou doen:
    - `person.name.startsWith("A")` returns `true`
    - `let age = 2026 - person.birthYear;` en daarna `age` returns `21`
- Je kan een array in een object gebruiken
    - `const person = { 
       name: “Anouk”,
       hobbies: ["reizen", "lezen", "creatieve dingen"],
       birthYear: 2005
    };`
- Je kan de waarde van de value van een property aanpassen:
    - `const dag = { 
       lunch: “wrap”
    };`
    - `dag.lunch` returns `"wrap"`
    - Als je daarna `dag.lunch = “pasta”;` aanmaakt en dan nog een keer de waarde van lunch vraagt krijg je dit:
    - `dag.lunch` returns `"pasta"`
- Je kan ook een nieuwe property toevoegen met de `.`
    - `dag.snack = framboos`
    - Als je daarna opnieuw de waarde vraagt van dag returned hij allebei de properties
    - `dag` returns `object {lunch: "pasta", snack: "framboos" }`
- Een function meegeven aan een property kan ook:
    - `const person = { 
       name: “Anouk”,
       boe: function () {
          console.log("aah");
       }
    };`
    - Nu roept de property `boe`  de functie aan die `function ()` heet
- Voorbeeld van een object met properties waarin properties genest zijn:
`const menu = { 
   lunch: {
      voor: "salade",
      hoofd: "broodje",
      na: "framboos"
   },
   dinner: {
      voor: "soep",
      hoofd: "pasta",
      na: "brownie"
   }
};`
    - `menu.dinner.na` returns `brownie`
- Je kan een property van een object ook laten verwijzen naar de variable van een array, op die manier komt de informatie die in die variable staat ook in het object te staan

### Verschil objects en arrays:
- Bij een object benoem je de propperties met “strings”
    `object = { 
       name: “Anouk”,
       birthYear: 2005
    };`
- Bij een array benoemd JS het automatisch met nummers
    - Wat je typt:
    `array = [”Anouk”, 2005]`
    - Wat je onder water niet ziet:
    `array = [ 
       0: “Anouk”,
       1: 2005
    ];`

### Build in methods
- Document is ook een object, als je `document` in de console in de browser typt dan krijg je alle properties te zien
    - bijvoorbeeld `document.querySelector()`
- Console is hier ook een voorbeeld van:
    - `console.log()`
    - `console.warn`
    - `console.error`
    - `console.clear()` (of in het kort `clear()`) zijn ook pre build methods
- Math is ook een build in object:
    - `Math.random()` returns elke keer een random getal tussen 0 en 1
    - `Math.PI` returns 3.1415926
- Strings zijn primitive types maar achter de schermen maakt JS er een object van zodat we er mee kunnen interacten door methods en properties
    - Bijv. `.toUpperCase`
    - De waarde van de string blijft altijd het zelfde, met de methods maak je en kopie aan


## Functions
- Maak een functie aan door:
    - `function half(x) {
        return x / 2;
    }`
    - De naam van de functie is: `half`
    - De value van de functie staat altijd tussen de `()` als het tussen de `()` leeg is, heeft de functie geen value
- Een functie oproepen/gebruiken:
    - `const one = half(2);`
    - Je gebruikt hier de functie naam `half` om de geschreven functie te gebruiken in een variable
    - Een functie zonder `()` erachter wijst naar de functie zelf, een functie met `()` voert de functie uit
- Parameters zijn values die een functie nodig heeft om te werken, dit kunnen ook een soort placeholders voor echte values zijn:
    - `function test(x, y) {
        return x + y;
    }`
    - De x en y zijn de parameters die een waarde nodig hebben
    - `test(2, 3);` zijn arguments, geeft waarde mee aan de “placeholder values”/parameters, dit doe je door de functie naam aan te roepen en het tussen de `()` een op een te vervangen met de nieuwe waardes.
- Sommige functies hebben geen values nodig, bijv:
    - `function getRandomNumber() {
        return Math.random();
    }`
    - Als je de functie `getRandomNumber();` uitvoert dan krijg je een random nummer (tussen 0-1) terug
- Alle functies hebben een return nodig in de functie, anders stuurt JS niks terug en krijg je een `undefined`
    - `function logAndReturn(x) {
        console.log(x * x);
        return x * x;
    }`
    - `const result = logAndReturn(3)` returns `9`
    - Als je bovenstaande code herhaalt, zonder de return:
    - `function logWithoutReturn(x) {
        console.log(x * x);
    }`
    - `const result = logWithoutReturn(3)` returns `undefined`
- Javascript stopt met het uitvoeren van de code na de `return` in een functie
- Met een fat arrow `=>` kan je een korte functie schrijven zonder een functie te maken
    - Bijv. `const name = (firtsName, lastName) => firstName + " " + lastName;`
    - Bijv. `const shorterThan = (a, b) => a.length < b.length;`
    - `const add = (x, y) => x + y;` is hetzelfde als:
    `function add(x, y) { return x + y; }`
    - De naamgeving gaat via de variable, de functie werkt door de `=>`
    - Tussen de `()` worden de parameters aangegeven en rechts van de `=>` staan de return values
    - Dit kan je gebruiken als je alleen een value wilt returnen
- Met een `=> { }` kan je ook meerdere dingen in een fat arrow functie zetten:
    - Dit kan je doen door alles na de `=>` tussen `{}` te zetten
    - `const addAndLog =  (x, y) => {
    let sum = x + y;
    console.log('Opgeteld is dat', sum);
    return sum;
    }`
    - Door de variable `sum` aan te maken in de functie hoeven we niet steeds `x + y` te herhalen
- Met de html attribute `disabled= “”` in een button kan je hem on-klikbaar maken
    - Dit kan je in JS meegeven door:
    `const disable = (button) => {
    button.setAtribute("disabled", "");
    }`
    - En je kan het weer aanzetten door de attribute te verwijderen:
    `const enable = (button) => {
    button.removeAtribute("disabled");
    }`
- Als je een variable aan maakt in een functie kan de global scope die niet vinden, of wel een zelfde variable vinden maar met een andere waarde. Let dus goed op dat je op de juiste laag tegen de variabele praat
    - Van een wijdere scope kunnen we niet in kleinere/nested scopes kijken
    - Van een kleinere/nested scope kunnen we wel in de grotere scopes om de kleinere scope heen kijken

## Event listeners
- `.addEventListener()` heeft twee parameters nodig:
    - Waar die naar moet luisteren (bijv. `”click”`)
    - Een handler function die JS gaat uitvoeren wanneer er iets met het element gebeurd
    - Voorbeeld: 
    `button.addEventListener(”click, (event) => {
        console.log(”event.target”)
    });`
    - Met `event.target` in de console log krijg je te zien op welk element er is geklikt
- Een paar meest voorkomende types events zijn: `“click”` `“dblclick”` `“mouseover”` `“mouseout”` `“focus”`

## Conditionals
- Met een if statement geef je aan dat als iets wat tussen de `()` staat true is, voer dan deel twee uit wat tussen de `{}` staat
    - `if (you.wannabeMyLover) {
        you.gottaBeWithMyFriends = true;
    };`
- Met een if else statement geef je aan dat als het if statement niet true is, het else statement uitgevoerd moet worden
    - `if (you.reallyBug(me)) {
        me.say(”goodbye”);
    } else {
         me.say(”Hello”);
    }`
- Je kan meerdere if else statements achter elkaar zetten:
    - `function compare(x, y) {
        if (x > y) {
            console.log(x, "is greater than", y);
        } else if (x < y) {
            console.log(x, "is less than", y);
        } else {
            console.log(x, "is equal to", y);
        }
    };`
    - Hiermee zeg je, als de eerste if niet true is dan kunnen er nog twee opties zijn, als de tweede if ook niet true is dan is het altijd de laatste optie
    - `compare(3,2)` returns `3 is greater than 2`
    - `compare(2,3)` returns `2 is less than 3`
    - `compare(2,2)` returns `2 is equal to 2`
- `if (!uitroepteken) { }` met het `!` zeg je dat als het true is dat de condition tussen de `()` niet waar is dan moet het tussen de `{}` uitgevoerd worden, als het niet klopt dat het niet waar is wordt er niks uitgevoerd
- `if (dingEen && dingTwee) {}` met de `&&` kijk je of allebei de voorwaardes kloppen/waar zijn en alleen dan wordt het tussen de `{}` uitgevoerd
- `if (dingEen || dingTwee) {}` met de `||` kijk je of (minstens) een van de voorwaardes klopt/waar is en dan wordt get tussen de `{}` uitgevoerd
- Er is een shortcut voor if else en dat is een `?` dat kan je zien als:
    - `let mood = forecast === "sunny" ? "happy" : "sad"`
    - `let mood; if (forecast === "sunny") { mood = "happy"; } else { mood = "sad"; }`
    

### Loops / iteration
- Een `for` loop heeft 3 onderdelen
    - `for` geeft aan dat het een for loop is
    - `( )` hoe de loop moet runnen
    - `{ }` wat er moet gebeuren als de loop doorlopen wordt
- Een voorbeeld van een for loop:
    - `for (let count = 0; count <= 100; count += 10) {
        console.log(count);
    }`
    - Met `count = 0;` tellen we hoe vaak de loop heeft gerund of wat de waarde is
    - Met `count <= 100;` geef je een voorwaarde aan die JS checkt of/tot wanneer de code in de loop gerund wordt, in dit geval zolang de counter lager dan of gelijk aan 100 is
    - Met `count += 10` geef je aan dat elke keer dat de code gerund wordt, dit erbij moet komen
    - de `+=` kijkt naar de huidige waarde en telt een waarde erbij op bijv. `let dogs = 0;` en daarna `dogs += 1` returns `1` , dit werkt het zelfde als `dogs = dogs + 1`
- Een `for…of` loop kan je alleen gebruiken op Iterable objects zoals arrays en strings
    - (Een iterable is een type verzameling die systematisch doorlopen kan worden, waarbij de items in een bepaalde volgorde staan)
    - `for (let char of "ALOHA") {
        console.log(char);
    }`
    - Deze geeft alle characters van de string in een aparte console.log door
    - `for (variable of iterable) { statement };`
- Het verschil tussen een `for` en `for ... of` loop is dat je met een `for` loop meer controle hebt over hoe de loop moet runnen, dus wat je tussen de `( )` aangeeft. Met een `for ... of`  loop zeg je meteen dat je in een object wilt zoeken zonder verder te specificeren hoe
- Met `.classList.add()` kan je een css toevoegen aan een element

### Map & Filter
- Filter kan onderdelen uit een array halen die je niet wilt
    - `const groep = [
        {name: "Anouk", nickname: "Noukie"}, 
        {name: "Kiekenboe", nickname: "schrik"}
    ];`
    - `const anouk = groep.filter(person => person.name.includes("A"));` returns een nieuwe array `[ {name: "Anouk", nickname: "Noukie"} ]`
    - .filter zoekt een true/false en maakt een nieuwe array aan, bij true komt het onderdeel in de nieuwe array en bij false niet
- Met map kan je dingen doen tegen alle onderdelen die overblijven
    - `const nicknames = groep.map(person => person.nickname);` returns een nieuwe array `[ “Noukie”, “schrik” ]`
    - .map geeft een nieuwe array met alleen de bijnamen ipv de oude array aanpassen
- Reduce combineert alle overgebleven onderdelen tot 1 ding

### Templates
- Met de backticks string kan je tussen ``${ }`` een dollar teken en curly braces JS typen
    - ``1 + 2 bij elkaar opgeteld is ${ 1 + 2 }`` returns `"1 + 2 bij elkaar opgeteld is 3"`
- Met spread `...` kan je alles in een variabele aanspreken zonder alles over te hoeven typen
    - `const skills = ["HTML", "CSS"];
    const newSkills = ["JS", "git"];
    skills.push(...newSkills);`
    - `skills` returns `["HTML", "CSS", "JS", "git"]`

### While loops
- Je geeft een voorwaarde mee aan de loop, deze blijft runnen tot de voorwaarde true is
- `while (randomNumbers.length < 5) { randomNumbers.push(math.random());}` deze blijft nu runnen tot er 5 nummers in de `randomNumbers` array staan
- Zet nooit een voorwaarde erin die altijd true is, dan crashed je browser

### Math.
- `math.floor()` kan je alleen alles wat voor de `,` in een getal komt laten zien
- `math.random() * arrayLength` kan je de random opties laten genereren op basis van hoelang de array is

### fetch()
- Met een fetch kan je een API URL ophalen met `fetch(”url”);`
- Je hebt ook een promise nodig, omdat de async code van een fetch lang kan duren
    - pending: aan het laden
    - fulfilled: klaar
    - rejected: mislukt
- Met een async stukje code, stopt js dit in zn todo lijstje en gaat ondertussen door maar soms heb je de data nodig voor js verder kan. Met `await` zorg je ervoor dat js pas verder gaat als de data er is
- `let response = await fetch("url");` hier wacht de code met verder gaan tot de promise van de fetch compleet is maar je krijgt nog niet het lijstje met json data wat je wilt
- Als je daaronder `let body = await response.json();` doet dan