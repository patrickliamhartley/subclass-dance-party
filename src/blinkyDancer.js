var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //get inheritance from makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  
};

//gets methods from makeDancer
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//new step function calls makeDancer's step and redefines this to blinkyDancer and toggles
makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
