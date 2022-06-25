const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')
const { engine } = require('express-handlebars')

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
}) )

// Configuración para acceder al req body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')
app.use('/', rutas)

app.listen(8080, err => {
    if(err) {
        console.log(`Ocurrió un error: ${err}`)
    } else {
       console.log('Escuchando el puerto 8080')
    }
})
