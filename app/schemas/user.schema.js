var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    gender: String,
    birthData: Date,
    created_date: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('UserSchema', UserSchema);