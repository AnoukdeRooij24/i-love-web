# git spiekbriefje
- `Control + backtick` = vsCode terminal openen / sluiten
- `Command + backtick` = iTerm openen / sluiten
- `Command + T` = nieuwe tab openen 
- `cd ..` = een map terug navigeren
- `code .` = opent vscode in de huidige map
- `code .git/config` = open de config file in de .git map in vscode 

## git
- `git clone (SSH url uit github)` = repo clonen naar je computer 
- `git log` = de commits en andere info in de terminal laten zien
- `git pull` = de info in de github repo syncen met de info op je computer
- `git fetch` = de info wel ophalen maar niet meteen syncen met je computer
- `git add package.json README.md` = bestanden aanspreken die je wilt pushen in dit geval package.json en de readme
- `git commit -m 'Readme and package.json'` = de commit message tussen de ' ' 
- `git push` = de commit pushen naar github
- `git checkout` = de laatste commit van een branch binnenhalen in een bepaald bestand (bijv. git checkout origin/main ../basis-design-tokens/style-dictionary.config.mjs)
- `git commit —amend` = laatste commit message aanpassen
- `git reflog` = alle geschiedenis op je computer bekijken die je op deze repo hebt gedaan
- `git commit —fixup 606c914c9ed63e11a742d54d4670f7a1166ca542` = een commit aan een oudere commit koppelen dit kan via de commit hash of de commit naam
- `git rebase —interactive origin/main` = het reorganiseren en squashen van commits op een branch
-`git status` = overzichtje van de staged changes (rood is niet toegevoegd aan de `git commit` en groen is wel toegevoegd aan de `git commit`)
- `git add` / `git add package.json README.md` = hierachter kan je zetten wat je wilt toevoegen, je kan de rode paths kopieeren uit het git status overzicht of de bestanden direct aanspreken zoals tweede voorbeeld 
- `git add .` = alle veranderde bestanden toevoegen aan je commit, gebruik dit voorzichtig en doe het liever per stuk 
- `git commit -m ' blabla ' --no-verify` = zo kan je altijd pushen als back-up want met de `-no-verify` ontwijk je de lint testen 
- `git reset HEAD~1` = reset je code terug naar de vorige commit 

## pnpm
- `pnpm add` = inplaats van npm install
- `pnpm init` = maakt een nieuw project (package.json)
- `pnpm add --save-dev` = iets toevoegen in de dependency map
- `pnpm -w` = vanuit welk mapje dan ook met -w voor je command doe je het command uitvoeren vanuit het hoogste niveau
- `pnpm -w run build` = je build in dit geval iets op het hoogtste niveau, werkt ook met add dan voeg je iets toe in het mapje met het hoogste niveau
- `pnpm -w run lint-fix` = je runt een lint op het hoogste niveau en deze past het gelijk aan (bijv bij error in je pull request)
- `pnpm run lint-fix` = je runt een lint en deze past gelijk de fouten/verschillen aan
- `pnpm run lint` = je runt een lint en krijgt de fouten/verschillen gelogd maar hij past niks zelf aan
- `pnpm run test` = zoekt in je package.json naar het test script onder "scripts" en voert dat commando uit
- `pnpm run build` = zoekt in je package.json naar het build script en voert dat uit

