const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/spacegame',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Player = require("./models/PlayerModel");

app.get("/api/player", ({ body }, res) => {
  Player.find({})
    .then(dbPlayer => {
      res.json(dbPlayer);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/player", ({ body }, res) => {
  Player.create(body)
    .then(dbPlayer => {
      res.json(dbPlayer);
    })
    .catch(err => {
      res.json(err);
    });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
