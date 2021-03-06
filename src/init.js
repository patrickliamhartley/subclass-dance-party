$(document).ready(function() {
  window.dancers = [];


  $('.zero').on('click', function () {
    new subZero(37, 38, 39, 40, 93, "sub");
    $('a').empty();
    $('span').remove();    

    $(".topbar").css({display: 'none'});
    $("span").css({display: 'none'});
    $('body').css('background-image', 'url(projectzero/back.png)');
    var title = '<img id="fight" src=projectzero/fight.gif>';
    $('body').append(title);
    $('#fight').fadeOut(1400);
    var start = '<img class="start" src=projectzero/start.gif>';
    var two = '<img id= "two" class="start" src=projectzero/pl2.gif>';
    
    $('body').append(two);
    $('body').append(start);
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();

  }); 

    // $("a").empty();
    // $('body').css('background-image', 'url(projectzero/back.png)');
    // $('body').append('<img class="sub" src=projectzero/standing.gif>');
    // $(document).keyup(function(evt) {
    //   if (evt.keyCode == 32) {
    //   $(".sub").remove();
    //   $('body').append('<img class="sub" src=projectzero/walking.gif>');

    //   }
    // });
  

  


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    // dancer.$node.addClass(dancerMakerFunction);

    $('body').append(dancer.$node);
  });
});

