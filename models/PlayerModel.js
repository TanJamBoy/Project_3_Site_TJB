const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    firebaseID: {type: String, required: true},
    starsCollected: {type: Number, default: 0}
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;