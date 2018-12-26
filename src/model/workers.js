const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkersSchema = new Schema({
    name: String,
    job: String,
    age: Number
});

module.exports = mongoose.model('workers',WorkersSchema);