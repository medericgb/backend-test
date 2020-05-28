const express = require('express')
const router = express.Router()

let CostumerModel = require('../models/costumer.model')

// POST localhost:3000/api/costumer
router.post('/api/costumer', (req,res) => {
    if (!req.body) res.status(400).send('Request body is missing')
    // Creating a new costumer
    let model = new CostumerModel(req.body)
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) res.status(500).send()
            // 201 for ressource was created
            res.status(201).send(doc)
        })
        
        .catch(err => {
            res.status(500).json(err)
        })
})


// GET
router.get('/api/costumer', (req,res) => {
    if(!req.query.email) res.status(400).send('Missing URL parameters: email')
    
    CostumerModel.find({email: req.query.email})
        .then(doc => res.json(doc))
        .catch(err => {
            res.status(500).json(err)
        })
})

// UPDATE
router.put('/api/costumer', (req,res) => {
    if(!req.query.email) res.status(400).send('Missing URL parameters: email')
    
    CostumerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
        .then(doc => res.json(doc))
        .catch(err => {
            res.status(500).json(err)
        })
})

// DELETE
router.delete('/api/costumer/', (req,res) => {
    if(!req.query.email) res.status(400).send('Missing URL parameters: email')
    
    CostumerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc => res.json(doc))
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router