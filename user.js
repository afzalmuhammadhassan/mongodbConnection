const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    password: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    email: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    createat: {
        type: mongoose.SchemaTypes.Date,
        require: true,
        default: new Date(),
    }
})

module.exports = mongoose.model('Users', userSchema);