// Creates and returns a new dancer object that can step
var subZero = function() {

  var subZero = '<img class="sub" src=projectzero/standing.gif>'; 
  $("a").empty();
  $('body').css('background-image', 'url(projectzero/back.png)');
  $('body').append(subZero);
  $(document).keyup(function(evt) {
    if (evt.keyCode == 32) {
      
      subZero='<img class="sub" src=projectzero/walking.gif>';

    }
  });

  
  // $('body').append(subZero.$back);
};  
//   this.$node = $('<span class="fighter"></span>');
//   this.setPosition(this.top, this.left);
//   //initates step function to start repeating
//   this.step();
  
// };

// //step function binds to makeDancer 
// makeDancer.prototype.step = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);  
  
// };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body


 