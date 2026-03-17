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

