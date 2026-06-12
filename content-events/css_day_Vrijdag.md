## CSS day 

## Kevin Powell
- `attr()` in de content property om data uit de HTML te halen met een data attribute zoals `data-promo` css
- je kan de attr() bijna op andere porperties gebuiken maaar het is officieel als string dus moet je een `type(<number>)` meegeven zodat het weet dat het bijv. een number is
- er zijn 100en soorten types
- als je data die je inlaat in de css een nummmer is kan je een unit erachter zetten (zoald rem, px, %)
- zorg dat als je een type meegeeft, dat je data dan daadwerkelijk dat type data is anders werkt het niet meer
- als je met css de volgorde van je content veranderd wordt de tabvolgorde de nieuwe volgorde van de content 
- je kan view transitions maken met de data id die je op elementen hebt gezegd dan hoef je niet alles dubbele namen te geven 
- je kan if() gebuiken ipv een media query op de layout van je grid
- container styles kunnen de styles op de container zelf niet zien, met if kan dat wel
- kevinpowell.co/talks/css-is-eating-js -> slides

## Patrick Brossset
- heeft packman met css only gemaakt met `focus-group`
- spelen met de nieuwe dingen van css help op het web up to date te houden
- masanory is de oude naam van grid-lines en werkt in 1 directions
- items willen in de kortste rij 
- gebuik `display:grid; display:grid-lanes;` zodat je altijd een layout fallback hebt of gebuik @supports
- je kiest de direction door grid-templates-rows of grid-template-columns te gebruiken
- grid-column: span 2; gaat de item over de breedte van twee en als je alleen 1 zegt dan gaat dat item naar column 1
- `repeat(auto-fill, auto)` laat de breedte aanpassen op de breedte van de items
- de volgorde van grid-lanes gaat van links naar rechts maar er is geen row (tot er een colums is die de kortste is dan gaat het item daar heen en is er geen logische volgorde meer) inplaats van bij flex direction column waar ze van boven naar beneden gaan
- `tolorance: infinite;` -> alle comlums hebben alle maar de zelfde lengte dus gaan de volgorde van links naar rechts
- je kan er leuke animaties mee maken als inladen of op scroll
- je kan twee grid lanes hebben, een die zich opvult van de onderkant en een van de bovenkant (of links / rechts)
- je kan een kleine draai aan de items meegeven en een diary gevoel geven aan de pagina