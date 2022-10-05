const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentRegisterSchema = new Schema({
    school: {
        type: String,
    },
    class: {
        type: String,
    },

});

module.exports = mongoose.model('Student', studentRegisterSchema);