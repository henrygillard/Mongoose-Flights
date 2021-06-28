require("./config/database");
const Flight = require("./models/flight");
const Ticket = require("./models/ticket");


let f, t;

Flight.find({}, function(err, flights) {
    console.log(flights);
})
Ticket.find({}, function(err, tickets) {
    console.log(tickets);
})