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