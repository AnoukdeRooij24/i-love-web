## Vragenlijst sprint 10

### Legenda: <br>
🫣 0 punten - Ik ben hier nog niet aan toegekomen <br>
😅 1 punt   - Ik heb hiermee geëxperimenteerd, maar ik weet nog niet goed wat dit is <br>
🤓 2 punten - Ik begrijp dit, maar kan dit nog niet (helemaal) zelfstandig toepassen <br>
🍗 3 punten - I got this!!! <br>

### Vragen:
1. **_Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten._** 😅 <br>
Client-side draait op de browser en Server-side draait op de server. De server-side gebruik ik om [GET](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L26-L45) en [POST](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L101-L119) Routes te maken, informatie uit de data base te halen en deze data te [filteren](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L62-L68). De Client-side gebruik ik om een [loading state](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/views/detail.liquid#L103) toe te voegen aan de POST

2. **_Ik heb een strategie voor server-side JavaScript debuggen, voor client-side JavaScript debuggen, en voor Liquid code debuggen._** 😅 <br>
In [server-side Javascript](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L103) gebruik ik console.log om te kijken wat er in de variabelen staat om te checken of dit wel of niet goed ging. 
Voor client-side debuggen loop ik voor mezelf per regel na of bijvoorbeeld alle variabelen wel overeen komen.
Voor liquid ... 


3. **_Ik kan GET en POST routes aanmaken en request parameters gebruiken._** 🤓 <br>
Ik heb [GET routes](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L26-L45) gemaakt voor de pagina's van de website. Met de [request](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L54) haal je informatie uit de database. Met [response](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L41-L43) kan je deze informatie in liquid renderen.
Ik heb een [POST route](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L101-L124) gemaakt waar comments achter gelaten kunnen worden op de webiste. 

4. **_Ik kan server-side JSON data fetchen uit een REST API._** 🤓 <br>
Ik haal de data op met de [link](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L28) naar de server. Dan specificeer ik welke [filters](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L29) ik wil hebben. Vervolgens fetch ik de data en zet ik het om naar [.json code](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L34-L35). 

5. **_Ik kan data uit een REST API filteren of sorteren._** 😅 <br>
In de [server](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/server.js#L59-L68) heb ik ervoor gezorgd dat de data gefilterd kan worden. Deze data kan ik daardoor in [liquid](https://github.com/AnoukdeRooij24/user-experience-enhanced-website/blob/main/views/webinars.liquid#L10-L22) renderen. 

6. Ik snap wat het async keyword doet in JavaScript code.
7. Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON.
8. Ik kan met een client-side fetch een werkend formulier verrijken.
9. Ik kan multi-page en single-page view transitions inzetten en aanpassen.
10. Ik kan verschillende manieren van responsive images uitleggen en toepassen.
 
11. Ik weet hoe ik de resultaten van een performance audit moet interpreteren en hoe ik performance problemen kan oplossen.
12. Ik weet hoe ik met client-side JS de UX kan verbeteren, rekening houdend met progressive enhancement.
13. Ik weet hoe ik binnen HTML, CSS en client-side JS nieuwe technieken toe kan passen, rekening houdend met oudere browsers.
14. Ik weet wat objecten, arrays, strings, loops, variabelen, functies en parameters zijn, en kan die in JavaScript inzetten.
15. Ik weet wat geavanceerdere concepten in JavaScript zijn, zoals closures, promises, callbacks, scope en de event loop.
 
16. Ik kan via GitHub met feature branches werken, pull requests aanmaken, reviewen en mergen.
17. Ik weet hoe ik formulieren pro-actief kan valideren met client-side code.
18. Ik weet de eerste regel van ARIA, en wat dat betekent voor hoe ik HTML schrijf.
19. Ik weet wat layout shifts zijn, door wat ze veroorzaakt worden, hoe ik ze kan meten en hoe ik ze kan oplossen.
20. Ik weet wat de Core Web Vitals zijn, hoe ik die kan meten, en hoe ik de cijfers moet interpreteren.
 
21. Ik weet hoe perceived performance invloed heeft op de beleving van een gebruiker, en ik heb de ontwerp- en code vaardigheden om die toe te passen.
22. Ik kan UI states in meerdere lagen van progressive enhancement inzetten om de UX te verbeteren.
23. Ik kan een UI leuker en prettiger maken, zonder de core functionaliteit uit het oog te verliezen.
24. Ik kan scroll-driven animations inzetten om de UI beter te maken.
25. Ik weet hoe ik verschillende vormen van feature detection in kan zetten in HTML, in CSS en in client-side JS.