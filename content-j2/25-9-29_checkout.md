## Wat heb ik vandaag gedaan?
Samen met miel heb ik een [kleurenpalet](https://github.com/fdnd-agency/snappthis/issues/39#issue-3465153165) opgesteld met 7 variaties van elke kleur. 3 lichtere en 3 donkerdere varianten van de basis kleur. Daarna heb ik deze kleuren toegevoegd aan de [stylesheet](https://github.com/fdnd-agency/snappthis/commit/4508d66d8a2a877c704f704d9b1a54db51d8a64a). We hebben wevoor gekozen om alles in HSL kleuren te doen, later wil ik de kleuren omzetten naar oklch met als fallback voor de browsers die dit niet ondersteutnen HSL. Zo worden de gradients mooier.

## Leervragen:
**1. Welke bronnen uit het onderdeel Color in CSS ga je later nog eens lezen?** <br>
https://css-tricks.com/new-css-color-features-preview/

**2. Onderzoek een robuste code strategie voor het toepassen van moderne color functions en kleurenspectra, mét een nette fallback voor browsers die dit niet ondersteunen.** <br>

`	
background-color: rgb(0 255 0); 
	
@supports(color: color(display-p3 0 1 0)){
        background-color: color(display-p3 0 1 0)
}
`
