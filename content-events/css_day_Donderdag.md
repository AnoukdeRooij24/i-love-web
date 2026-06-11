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
- 