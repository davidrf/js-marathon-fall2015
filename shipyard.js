var launchpad, ship, trainCrew, names, loadCrew, rocket;

rocket = {
 fuel: 0,
 fire: function(){
   if (this.fuel > 0){
     this.fuel--;
     console.log("We have this fuel remaining: " + this.fuel);
   }else {
     console.log("We can't take off. There isn't enough fuel.");
   }
 }
}

ship = {
  name: "SharkRocket TinCan",
  crew: [],
  captain: function() {
    return this.crew[Math.floor(Math.random()*this.crew.length)];
  },
  propulsion: undefined,
  mountPropulsion: function(rocket) {
    this.propulsion = rocket;
  },
  fuelShip: function(fuelAmount) {
    console.log("Adding " + fuelAmount + " to tanks");
    this.propulsion.fuel += fuelAmount;
  },
  takeoff: function(){
    console.log("Firing propulsion drives.");
    console.log("WHOOOOOOOSH!!!!");
    this.propulsion.fire();
  }
};

countDown = function(count, ship){
  if (count === 0) {
    console.log("BLAST OFFFFFF!!!!");
    ship.takeoff();
  } else {
    var timeoutCallback = function() {
      console.log(count);
      count -= 1;
      countDown(count, ship);
    };
    setTimeout(timeoutCallback, 1000);
  }
};

trainCrew = function(crewName) {
  return {
    name: crewName
  };
}
names = ["Margaret", "Steven", "Philip", "Pablo", "Mike", "Maribeth", "Jacob", "Shawn", "Erik", "DRod" ]

loadCrew = function(crewNames, ship) {
  for (var i = 0; i < crewNames.length; i++) {
    var newMember = trainCrew(crewNames[i]);
    ship.crew.push(newMember);
  }
}

launchpad = function(ship, names, rocket) {
  ship.mountPropulsion(rocket);
  loadCrew(names, ship);
  console.log("The Captain is "+ ship.captain().name);
  ship.fuelShip(25);
  console.log("Commencing countdown, engines on.");
  console.log("Take off for " + ship.name + " in 10 seconds.");
  countDown(10, ship);
};

launchpad(ship, names, rocket);
