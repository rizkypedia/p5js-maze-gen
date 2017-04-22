function Population() {
  this.rockets = [];
  this.popsize = 25;
  this.mattingpool = [];

  for (var i=0; i<this.popsize;i++) {
    this.rockets[i] = new Rocket();
  }

this.evaluate = function() {

  var maxfit =0;

  for (var i=0; i<this.popsize;i++) {
    this.rockets[i].calcFitness();
    if (this.rockets[i].fitness > maxfit) {
      maxfit = this.rockets[i].fitness;
    }
  }
  //createP(maxfit);

  for (var i=0; i<this.popsize;i++) {
    this.rockets[i].fitness/=maxfit;
  }

  this.mattingpool = [];
  for (var i=0; i<this.popsize;i++) {
    var n = this.rockets[i].fitness * 100;
    for (var j=0; j< n; j++) {
      this.mattingpool.push(this.rockets[i]);
    }
  }
}

this.selection = function() {
  var newRockets = [];
  for (var i=0; i<this.rockets.length;i++) {
    var parentA = random(this.mattingpool).dna;
    var parentB = random(this.mattingpool).dna;
    var child = parentA.crossover(parentB);
    child.mutation();
    newRockets[i] = new Rocket(child);
  }
    this.rockets = newRockets;
}


  this.run = function() {
    for (var i=0; i<this.popsize;i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }

};
