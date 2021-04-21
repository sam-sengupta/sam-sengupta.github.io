var player = 1;
let resetBtn = document.getElementById('resetting');
resetBtn.addEventListener('click', reset);

$('button').click(function() {
    if (player == 1) {
      $("#commentary").text("IT'S PLAYER 2'S TURN.");
      $(this).text("O");
      $(this).addClass("check");
      if (check("check")) {
        player = 0;
        $("#commentary").text("PLAYER 1 WINS!");
      } else {
        player = 2;
      }
    } else if (player == 2) {
      $("#commentary").text("IT'S PLAYER 1'S TURN");
      $(this).text("X");
      $(this).addClass("cross");
      if (check("cross")) {
        player = 0;
        $("#commentary").text("PLAYER 2 WINS!");
      } else {
        player = 1;
      }
    }
    if (player != 0 && ($("button.check").length + $("button.cross").length == 9)) {
        player = 0;
        $("#commentary").text("IT'S A DRAW.");
    }
  });
  $("button").click(function() {
    if (player == 0) {
      return;
    }
});

function check(checkClass) {
    if ($(".sq1").hasClass(checkClass) && $(".sq2").hasClass(checkClass) && $(".sq3").hasClass(checkClass))
    {
        $(".sq1").css("color", "green");
        $(".sq2").css("color", "green");
        $(".sq3").css("color", "green");
        return true;
    } else if ($(".sq4").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq6").hasClass(checkClass))
    {
        $(".sq4").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq6").css("color", "green");
        return true;
    } else if ($(".sq7").hasClass(checkClass) && $(".sq8").hasClass(checkClass) && $(".sq9").hasClass(checkClass))
    {
        $(".sq7").css("color", "green");
        $(".sq8").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(checkClass) && $(".sq4").hasClass(checkClass) && $(".sq7").hasClass(checkClass)) 
    {
        $(".sq1").css("color", "green");
        $(".sq4").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else if ($(".sq2").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq8").hasClass(checkClass))
    {
        $(".sq2").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq8").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(checkClass) && $(".sq6").hasClass(checkClass) && $(".sq9").hasClass(checkClass)) 
    {
        $(".sq3").css("color", "green");
        $(".sq6").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq7").hasClass(checkClass)) 
    {
        $(".sq3").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq9").hasClass(checkClass)) 
    {
        $(".sq1").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else {
        return false;
    }
}

function reset() {
   $("#commentary").text("DO NOT CLICK FILLED BOXES");
   $("#commentary").css("background-color", "transparent");
   $(".a").empty();
   $(".a").removeClass("check");
   $(".a").removeClass("cross");
   player = 1;
   $(".a").css("color", "black");
}