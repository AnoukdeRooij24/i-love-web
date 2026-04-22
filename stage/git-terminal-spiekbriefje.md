# git spiekbriefje
- `Control + backtick` = vsCode terminal openen / sluiten
- `Command + backtick` = iTerm openen / sluiten
- `Command + T` = nieuwe tab openen 
- `cd ..` = een map terug navigeren
- `code .` = opent vscode in de huidige map
- `code .git/config` = open de config file in de .git map in vscode 

## git
* `git clone (SSH url uit github)` = repo clonen naar je computer 
* `git log` = de commits en andere info in de terminal laten zien
* `git pull` = de info in de github repo syncen met de info op je computer
* `git fetch` = de info wel ophalen maar niet meteen syncen met je computer
* `git status` = overzichtje van de staged changes (rood is niet toegevoegd aan de git commit en groen is wel toegevoegd aan de git commit)
* `git add`  = hierachter kan je zetten wat je wilt toevoegen, je kan de rode paths kopieeren uit het git status overzicht 
* `git add package.json README.md `= bestanden aanspreken die je wilt pushen in dit geval package.json en de readme
* `git add .`  = alle veranderde bestanden in de huidige map toevoegen aan je commit, gebruik dit voorzichtig en doe het liever per stuk
* `git commit -m 'Added Readme and package.json' `= de commit message tussen de ' ' 
* `git commit -m ' blabla ' --no-verify `= zo kan je altijd pushen als back-up want met de --no-verify ontwijk je de lint testen
* `git commit —amend `= laatste commit message aanpassen
* `git commit —fixup 606c914c9ed63e11a742d54d4670f7a1166ca542` = een commit aan een oudere commit koppelen dit kan via de commit hash of de commit naam
* `git push` = de commit pushen naar github
* `git checkout` = de laatste commit van een branch binnenhalen in een bepaald bestand (bijv. git checkout origin/main ../basis-design-tokens/style-dictionary.config.mjs)
* `git reflog` = alle geschiedenis op je computer bekijken die je op deze repo hebt gedaan
* `git rebase --interactive origin/main` = het reorganiseren en squashen van commits
* `git rebase --abort` = stoppen met rebase
* `git switch -c 'feat/FloDecision-to-storybook-react'` = het aanmaken en switchen van en naar een nieuwe branch, tussen de ' ' staat de naam van de branch. Zorg dat je daar geen spaties in gebruikt
* `git reset HEAD~1` = reset je code terug naar de vorige commit
* `Q` = quit de command
* `git branch -m feat/flodecision-basepath-fix `= je branch renamen naar in dit geval feat/flodecision-basepath-fix
* `git config --global push.default current` = standaard naar de branch met dezelfde naam pushen 
* `git rm ' '` = files via git verwijderen, dit is handiger dan met de hand want zo weet je zeker dat git ook weet dat die file weg is
* `git branch` = alle branches in een repo bekijken
* `git switch ' '` = switchen naar een andere branch
* `git merge ' '` = zorg dat je in de branch zit waar je naartoe wilt mergen en noem de naam van de branch die je erin wilt mergen
* `git merge --abort` = stop met de merge uitvoeren
* `git mv` = het verplaatsen van een bestand naar een andere plek
* `git reset --soft` = verwijderd de commit maar houd de veranderingen gestaged
* `git reset --hard` = verwijderd de commit en verwijderd ook alle veranderingen

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
- `npm login` = inloggen op npmjs.com
- `npm publish` = als je ingelogd bent een nieuwe versie van een npm package releasen, vergeet niet het versie nummer te updaten

