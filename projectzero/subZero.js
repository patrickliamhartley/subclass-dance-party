// Creates and returns a new dancer object that can step
var subZero = function() {

  var subZero = '<img id="sub" src=projectzero/standing.gif>'; 
  $("a").empty();
  $('body').css('background-image', 'url(projectzero/back.png)');
  $('body').append(subZero);
  var title = '<img id="fight" src=projectzero/fight.gif>';
  $('body').append(title);
  $('#fight').fadeOut(1400);

  var standing = false;
  var attacking = false;

  //to set standing and walking gifs
  var standF = function () {
    if (standing === true) {
      $('#sub').attr("src", 'projectzero/walking.gif');
    } else {
      $('#sub').attr("src", 'projectzero/standing.gif');
    }
  };

  //attack function
  var attack = function() {
    if (attacking === true) {
      $('#sub').attr("src",'projectzero/sAttack.gif');
    } else {
      $('#sub').attr("src",'projectzero/standing.gif');
    }

  };
  

  $(document).keydown(function(evt) {
    console.log(evt.keyCode);
    
//directional movement
    if (evt.keyCode === 40) {     
      $('#sub').css({position:'relative','top':"+=10px"});
      standing = true;
      standF();
    }
    if (evt.keyCode === 38) {     
      $('#sub').css({position:'relative','top':"-=10px"});
      standing = true;
      standF();
    }
    if (evt.keyCode === 39) {     
      $('#sub').css({position:'relative','right':"-=10px"});
      standing = true;
      standF();
    }
    if (evt.keyCode === 37) {     
      $('#sub').css({position:'relative','right':"+=10px"});
      standing = true;
      standF();
    }
//special attack
    if (evt.keyCode === 93) {     
      attacking = true;
      attack();
    }    

  });

  $(document).keyup(function(e) {
  //keyup to turn off walking animations
    console.log(e.keyCode);
    if (e.keyCode === 39) {
      standing = false;
      standF();
    }
    if (e.keyCode === 37) {
      standing = false;
      standF();
    }
    if (e.keyCode === 38) {
      standing = false;
      standF();
    }
    if (e.keyCode === 40) {
      standing = false;
      standF();
    }
//turn off attacking animation
    if (e.keyCode === 93) {
      attacking = false;
      attack();
    }

  });
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


 
