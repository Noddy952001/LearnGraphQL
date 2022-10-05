const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRegisterSchema = new Schema({
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },

});

module.exports = mongoose.model('User', userRegisterSchema);