// Iteration #1

require("../db");

const droneSeeds = [
  { name: "Tie Fighter", propellers: 3, maxSpeed: 12 },
  { name: "X Wing", propellers: 4, maxSpeed: 20 },
  { name: "Imperial Star Destroyer", propellers: 92, maxSpeed: 8 },
];

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

Drone.create(droneSeeds)
  .then(() => {
    console.log(`Seeded database with ${droneSeeds.length} objects`);
    mongoose.connection.close();
  })
  .catch(() => console.log("Error while seeding database"));
