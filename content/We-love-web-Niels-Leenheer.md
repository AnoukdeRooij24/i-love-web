Resilience 

## Over Niels
- werkt bij salonhub
- webdeveloper in de basis
- vroeger noemde ze het "webmasters" ipv frontend developer

## Over HTML (en niet over JS!)
- je mag fouten maken in HTML -> resilience
- mensen maken fouten
- Niels kijkt naar hoe andere het doen en het zelf dan ook zo proberen te doen
- World wide web was een browser en editor in een - tim berners lee 
- browsers nergeren HTML elementen die ze niet kennen
- als je browser geen script ondersteund, ondersteund hij ook de noscript tag. Dan zie je gewoon tekst
- noscript -> inhoud is niet zichtbaar, komt wel in de DOM. Verder geen functie
- dit principe kunnen we gebruiken voor:
    - polyfils voor onbekende tags maken
        - blink, laat tekst knipperen. Kan je nu met css maken
        - marqee, laat tekst over je beeld lopen

- tussen de HTML en de DOM zit een tokenizer & tree builder 
- tokenizer, doet teken voor teken door het HTML bestand gaan en alle info eruit halen. Als je parse errors tegenkomt stopt hij niet met je bestand analyseren
- tree builder, krijgt de tokens van de tokenizer en bouwt daar de DOM tree mee. Maakt nieuwe ontbrekende elementen aan die verplicht zijn 
- als je de eerste website door een HTML validator haalt krijg je een error o.a. omdat er een a tag dubbel is afgesloten. Maar het werkt nog wel omdat de browser zo'n foutje nergeerd
- inspireer mensen, werk samen en er zijn geen grenzen op het web
- nielsleenheer.com
- noscript kan je niet stylen - doet actief niks :)

