const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Connect to db
const user = ''
const password = ''

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-yhusb.mongodb.net/test?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to db')
)

const costumerSchema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Costumer', costumerSchema)