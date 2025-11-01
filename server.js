// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// bestanden in mappen kunnen lezen
import { readdir, readFile } from 'node:fs/promises'

import { marked } from 'marked'

const files1 = await readdir('content-j1')
const files2 = await readdir('content-j2')
const files3 = await readdir('content-wlw')
const files4 = await readdir('content-events')

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// HOME
app.get('/', async function(request, response){
    response.render('home.liquid')
})

// LEARNING JOURNAL JAAR 1
app.get('/learning-journal-1', async function(request, response){
    response.render('learning-journal-1.liquid', {files1: files1})
})

    app.get('/learning-journal-1/:slug', async function (request, response) {
        // console.log(request.params.slug)
        const fileContents1 = await readFile('content-j1/' + request.params.slug + '.md', { encoding: 'utf8' })
        const markedUpFileContents1 = marked.parse(fileContents1)
        response.render('artikel-1.liquid', {fileContents1: markedUpFileContents1})
    })

// LEARNING JOURNAL JAAR 2
app.get('/learning-journal-2', async function(request, response){
    response.render('learning-journal-2.liquid', {files2: files2})
})

    app.get('/learning-journal-2/:slug', async function (request, response) {
        // console.log(request.params.slug)
        const fileContents2 = await readFile('content-j2/' + request.params.slug + '.md', { encoding: 'utf8' })
        const markedUpFileContents2 = marked.parse(fileContents2)
        response.render('artikel-2.liquid', {fileContents2: markedUpFileContents2})
    })

// WE LOVE WEB
app.get('/we-love-web', async function(request, response){
    response.render('wlw.liquid', {files3: files3})
})

    app.get('/we-love-web/:slug', async function (request, response) {
        // console.log(request.params.slug)
        const fileContents3 = await readFile('content-wlw/' + request.params.slug + '.md', { encoding: 'utf8' })
        const markedUpFileContents3 = marked.parse(fileContents3)
        response.render('wlw-detail.liquid', {fileContents3: markedUpFileContents3})
    }) 

// EVENTS
app.get('/events', async function(request, response){
    response.render('events.liquid', {files4: files4})
})

    app.get('/events/:slug', async function (request, response) {
        // console.log(request.params.slug)
        const fileContents4 = await readFile('content-events/' + request.params.slug + '.md', { encoding: 'utf8' })
        const markedUpFileContents4 = marked.parse(fileContents4)
        response.render('events-detail.liquid', {fileContents4: markedUpFileContents4})
    }) 


// ABOUT ME
app.get('/about-me', async function(request, response){
    response.render('about-me.liquid')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })


