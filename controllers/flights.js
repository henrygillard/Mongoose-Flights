var Flight = require("../models/flight");

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
        console.log(req.params.id);
        res.render("flights/show",{flight} );
    })
}

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