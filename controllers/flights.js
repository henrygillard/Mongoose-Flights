var Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights);
        res.render('flights/index', { title: 'All Flights', flights });
      });
}
    



function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render("flights/show",{
                flight,
                tickets
            });
        })
    })
};

    
            


function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        console.log(flight)
        console.log(err)
        res.redirect("/flights");
    })
    
}


function newFlight(req, res) {
    res.render("flights/new");
}