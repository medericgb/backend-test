const express = require('express')
const router = express.Router()

router.get('/api/persons', (req,res) => {
    if (req.query.name) res.send(`You have requested people ${req.query.name}`)
    else res.send('You have requested a person')
})

// Get name by req.params
router.get('/api/persons/:name', (req,res) => {
    res.send(`You have requested a person ${req.params.name}`)
})

router.get('/api/error', (req,res) => {
    throw new Error('This is a forced error')
})


module.exports = router