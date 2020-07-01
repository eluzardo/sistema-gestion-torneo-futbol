const {Schema, model} = require('mongoose');

const teamSchema = new Schema({
    name:{type: String, required: true, unique:true},
    games: {type: Number, default:0},
    points: {type: Number, default:0},
    win: {type: Number, default:0},
    draw: {type: Number, default:0},
    lose: {type: Number, default:0},
    goalsFor: {type: Number, default:0},
    goalsAgainst: {type: Number, default:0},
    goalDif: {type: Number, default:0}
})

module.exports = model('Team', teamSchema);