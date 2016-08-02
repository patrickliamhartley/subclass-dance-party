var slidingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

slidingDancer.prototype = Object.create(makeDancer.prototype);
slidingDancer.prototype.constructor = slidingDancer;

slidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ "left": "-=50px" }, "slow" );
  this.$node.animate({ "right": "-=50px" }, "slow" );
  
};