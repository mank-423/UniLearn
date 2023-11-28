const mongoose = require('mongoose');

const Subject = new mongoose.Schema({
    subjectName : {type: String, required: true, unique: true},
    courseName : {type: String, required: true},
    courseYear : {type: Number, required: true},
    driveLink : {type: String, required: true}
},
{collection: 'subject'}
)

module.exports = mongoose.model('Subject', Subject);