var magicDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

magicDancer.prototype = Object.create(makeDancer.prototype);
magicDancer.prototype.constructor = magicDancer;

magicDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
  
};