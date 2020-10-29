const mongoose = require("mongoose");
const Player = require("../models/PlayerModel");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spacegame', {useNewUrlParser: true});

let playerSeed = {
    name: "testPlayerName",
    firebaseID: "testPlayerID",
    starsCollected: 557
}

Player.deleteMany({})
  .then(() => Player.create(playerSeed))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
