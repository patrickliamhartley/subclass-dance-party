// Creates and returns a new dancer object that can step
var subZero = function(left, up, right, down, atk) {
  this.l = left;
  this.u = up;
  this.r = right;
  this.d = down;
  this.ak = atk;
  var subZero = '<img id="sub" src=projectzero/standing.gif>'; 
  $("a").empty();
  $('body').css('background-image', 'url(projectzero/back.png)');
  $('body').append(subZero);
  var title = '<img id="fight" src=projectzero/fight.gif>';
  $('body').append(title);
  $('#fight').fadeOut(1400);

  this.standing = false;
  this.attacking = false;
  $(document).keydown(this.movesDown(evt));
  console.log(evt.keyCode);
  $(document).keyup(this.moveUp(e)); 
  //keyup to turn off walking animations
  console.log(e.keyCode);

};

  //to set standing and walking gifs
subZero.prototype.standF = function () {
  if (standing === true) {
    $('#sub').attr("src", 'projectzero/walking.gif');
  } else {
    $('#sub').attr("src", 'projectzero/standing.gif');
  }
};

  //attack function
subZero.prototype.attack = function() {
  if (attacking === true) {
    $('#sub').attr("src",'projectzero/sAttack.gif');
  } else {
    $('#sub').attr("src",'projectzero/standing.gif');
  }

};
  
// subZero.prototype.listenDown = function() {
//   $(document).keydown(this.movesDown(evt));
//   console.log(evt.keyCode);
// };
    
subZero.prototype.movesDown = function(evt) {
//directional movement
  if (evt.keyCode === this.d) {     
    $('#sub').css({position:'relative','top':"+=10px"});
    this.standing = true;
    this.standF();
  }
  if (evt.keyCode === this.u) {     
    $('#sub').css({position:'relative','top':"-=10px"});
    this.standing = true;
    this.standF();
  }
  if (evt.keyCode === this.r) {     
    $('#sub').css({position:'relative','right':"-=10px"});
    this.standing = true;
    this.standF();
  }
  if (evt.keyCode === this.l) {     
    $('#sub').css({position:'relative','right':"+=10px"});
    this.standing = true;
    this.standF();
  }
  //special attack
  if (evt.keyCode === this.ak) {     
    this.attacking = true;
    this.attack();
  }
};    

// subZero.prototype.listenUp = function () {
//   $(document).keyup(this.moveUp(e)); 
//   //keyup to turn off walking animations
//   console.log(e.keyCode);
// };

subZero.prototype.moveUp = function(e) {
  if (e.keyCode === this.r) {
    this.standing = false;
    this.standF();
  }
  if (e.keyCode === this.l) {
    this.standing = false;
    this.standF();
  }
  if (e.keyCode === this.u) {
    this.standing = false;
    this.standF();
  }
  if (e.keyCode === this.d) {
    this.standing = false;
    this.standF();
  }
//turn off attacking animation
  if (e.keyCode === this.ak) {
    this.attacking = false;
    this.attack();
  }
};    
