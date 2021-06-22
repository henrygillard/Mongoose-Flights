const mongoose = require('mongoose');

mongoose.connect(
    // DB connection strength
    "mongodb://localhost/flights",
    // connection options
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

// shortcut var to...
const db = mongoose.connection;

db.on("connected", function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});