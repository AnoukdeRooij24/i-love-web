# CSS Day

## Lea Verou
- De binary color code heeft 4 cijfers die je in hex kan compressen tot 1 letter
- Standardized RGB spaces gebuiken sRGB kleur codes, die zijn speciefieker 
- `red` is niet het felste rood wat je scherm kan geven en het zellde geld voor alle andere vollegide rood (of andere kleur) kleur waardes
- de color gamut van de printer is veel kleiner dan de color gamut van RGB
- veel light in de omgeving van een projector decreses de color gamut bij 85%
- de browsers clippen automatisch de kleuren als het buiten de gamut vallen (alles eronder wordt het minimale en alles erover wordt het maximale)
- Gamut mapping playground -> website waar je met kleuren kan spelen in verschillende kleur waardes
- whatthecolor.com -> een game om een kleur te matchen in een color space
- een goede ui gaat om wat het doel van de user is, een slech ui gaat om wat de maker makkelijker vind om te maken
- polar color spaces 
- bij HSL kan je niet vanuit gaan dat de lightness van de kleuren daadwerkelijk de zelfde lichtheid van kleuren aangeven
- met oklch kan je er wel vanuit gaan dat de lightness hetzelfde voelt
- pallets.colorjs.io
- apps.colorjs.io/gamut -> je kan op het kleurenwiel de gamut zien zodat je snapt waarom de lightness van sommige kleuren hetzelfde zijn
- apps.colorjs.io/tints -> de tinten van de kleuren van een lightness zien
- out of the gamut is the wild west!
- Er is altijd een chroma waarde wat in de gamut is
- als je in een linear gradient inplaats van 0 de waarde none gebruikt krijg je dezelfde kleur maar met minder grijs waarden en dan gebuik je color mix 

## Josh Tumath
- NEVER USE PX UNITS!
- 37% veranderen hun text size op hun telefoon
- `calc(16px * env(preferred-text-scale))`
- de font size is bij default `medium`
- Zorg dat je mobile first met de text scaled up desiged 
- Verander de default font-size in de root niet naar een gefixte waarde
- Zorg dat je rem gebruikt inplaats van px voor sizing your content / layout
- gebuik alleen px voor spacing (`gap` / `padding` / `margin`)
- gebuik alleen single colum layout op een kleine viewport (afbeelding en tekst onder elkaar)
- Met container quearies heb je het scaling probleem sws al minder
- laat de content altijd de hoogte van de layout bepalen dan overflowt het niet of zet een `min-heigt`
- Pas op voor mega groote headings grote headings zijn vaak al groot genoeg om te kunnen lezen voor mensen die 200% inzoomen
- mdn text scale 
- met px werkt de text scaling niet 