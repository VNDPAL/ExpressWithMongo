const mongoose = require('mongoose')

const teamInfoSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    short_name: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number
    },
    status: {
        type: String,
        default: 'I',
        required: true
    }
})

module.exports = mongoose.model('team_info', teamInfoSchema)