const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let path = require('path')

let personsRoute = require('./routes/persons')
let costumerRoute = require('./routes/costumer')

app.use(express.json())
app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(personsRoute)
app.use(costumerRoute)
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send("Bonjour le monde")
})

//Handling 404
app.use(function(req, res) {
    res.status(404).send('404');
});

// Handling 500
app.use(function(error, req, res, next) {
    res.status(500).send('500');
    // res.sendFile(path.join(__dirname, '../public/500.html'))
});

app.listen(PORT, () => {
    console.log(`Magic happens at port ${PORT}`)
})