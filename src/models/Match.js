const {Schema, model} = require('mongoose');

const matchSchema = new Schema({
    localTeam:{type: String, required: true},
    awayTeam:{type: String, required: true},
    localScore:{type: Number, required: true},
    awayScore:{type: Number, required: true}
})

module.exports = model('Match', matchSchema);