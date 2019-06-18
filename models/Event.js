const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Event = mongoose.model('event', EventSchema);