var tord = "";
let truthb = document.getElementById('truth');
truthb.addEventListener('click', truth);
let dareb = document.getElementById('dare');
dareb.addEventListener('click', dare);
let homeb = document.getElementById('home');
homeb.addEventListener('click', home);
let studyb = document.getElementById('study');
studyb.addEventListener('click', study);
// let yesb = document.getElementById('yes');
// yesb.addEventListener('click', yes);
// let nob = document.getElementById('no');
// nob.addEventListener('click', no);

$(document).ready(function() { 
  $(".one").click(function() {
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/1.jpg') {
        $("img").attr("src","images/2.jpg");
    } else if(src == "images/2.jpg") {
        $("img").attr("src","images/3.jpg"); 
    } else if(src == "images/3.jpg"){
        $("img").attr("src","images/4.jpg");
    } else {$("img").attr("src","images/1.jpg");}
  });
  // $('#b').removeClass('one').addClass('two');
});

function truth() {
  tord = "t";
  $(".two").click(function() {
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/4.jpg') {
        $("img").attr("src","images/t.jpg");
    } else if(src == "images/t.jpg") {
        $("img").attr("src","images/t1.jpg"); 
    } else if(src == "images/t1.jpg"){
        $("img").attr("src","images/t2.jpg");
    } else {$("img").attr("src","images/t.jpg");}
  }); 
}

function dare() {
  tord = "d";
  $(".two").click(function() {
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/4.jpg') {
        $("img").attr("src","images/d.jpg");
    } else if(src == "images/d.jpg") {
        $("img").attr("src","images/d1.jpg"); 
    } else if(src == "images/d1.jpg"){
        $("img").attr("src","images/d2.jpg");
    } else {$("img").attr("src","images/d.jpg");}
  }); 
}

function home() {
  if(tord == "t") {
    $(".three").click(function() {
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/tp1.jpg') {
          $("img").attr("src","images/tp2.jpg");
      } else if(src == "images/tp2.jpg") {
          $("img").attr("src","images/tp3.jpg"); 
      } else if(src == "images/tp3.jpg"){
          $("img").attr("src","images/tp4.jpg");
      } else {$("img").attr("src","images/tp1.jpg");}
    }); 
  }
  else {
    $(".two").click(function() {
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/ts1.jpg') {
          $("img").attr("src","images/ts2.jpg");
      } else if(src == "images/ts2.jpg") {
          $("img").attr("src","images/ts3.jpg"); 
      } else if(src == "images/ts3.jpg"){
          $("img").attr("src","images/ts4.jpg");
      } else {$("img").attr("src","images/ts1.jpg");}
    }); 
  }
}

function study() {
  if(tord == "t") {
    $(".three").click(function() {
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/dp1.jpg') {
          $("img").attr("src","images/dp2.jpg");
      } else if(src == "images/dp2.jpg") {
          $("img").attr("src","images/dp3.jpg"); 
      } else if(src == "images/dp3.jpg"){
          $("img").attr("src","images/dp4.jpg");
      } else {$("img").attr("src","images/dp1.jpg");}
    }); 
  }
  else {
    $(".two").click(function() {
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/ds1.jpg') {
          $("img").attr("src","images/ds2.jpg");
      } else if(src == "images/ds2.jpg") {
          $("img").attr("src","images/ds3.jpg"); 
      } else if(src == "images/ds3.jpg"){
          $("img").attr("src","images/ds4.jpg");
      } else {$("img").attr("src","images/ds1.jpg");}
    }); 
  }
}

// function yes() {
//   $(".four").click(function() {
//     var src = $('img').attr('src');
//     $("img").width('25%')
//     if(src == 'images/y1.jpg') {
//         $("img").attr("src","images/11.jpg");
//     } else if(src == "images/11.jpg") {
//         $("img").attr("src","images/12.jpg"); 
//     } else if(src == "images/12.jpg"){
//         $("img").attr("src","images/13.jpg");
//     } else if(src == "images/13.jpg"){
//         $("img").attr("src","images/14.jpg");
//     } else if(src == "images/14.jpg"){
//         $("img").attr("src","images/15.jpg");
//     } else if(src == "images/15.jpg"){
//         $("img").attr("src","images/16.jpg");
//     } else if(src == "images/16.jpg"){
//         $("img").attr("src","images/call.jpg");
//     } else {$("img").attr("src","images/y1.jpg");}
//   }); 
// }

// function no() {
//   $(".four").click(function() {
//     var src = $('img').attr('src');
//     $("img").width('25%')
//     if(src == 'images/n1.jpg') {
//         $("img").attr("src","images/11.jpg");
//     } else if(src == "images/11.jpg") {
//         $("img").attr("src","images/12.jpg"); 
//     } else if(src == "images/12.jpg"){
//         $("img").attr("src","images/13.jpg");
//     } else if(src == "images/13.jpg"){
//         $("img").attr("src","images/14.jpg");
//     } else if(src == "images/14.jpg"){
//         $("img").attr("src","images/15.jpg");
//     } else if(src == "images/15.jpg"){
//         $("img").attr("src","images/16.jpg");
//     } else if(src == "images/16.jpg"){
//         $("img").attr("src","images/call.jpg");
//     } else {$("img").attr("src","images/y1.jpg");}
//   }); 
// }


// $('.switch').on({
//   'click': function(){
//       $("img").attr('src','2.jpg');
//   }
// });

// var player = 1;
// let resetBtn = document.getElementById('resetting');
// resetBtn.addEventListener('click', reset);

// $('button').click(function() {
//     if (player == 1) {
//       $("#commentary").text("IT'S PLAYER 2'S TURN.");
//       $(this).text("O");
//       $(this).addClass("check");
//       if (check("check")) {
//         player = 0;
//         $("#commentary").text("PLAYER 1 WINS!");
//       } else {
//         player = 2;
//       }
//     } else if (player == 2) {
//       $("#commentary").text("IT'S PLAYER 1'S TURN");
//       $(this).text("X");
//       $(this).addClass("cross");
//       if (check("cross")) {
//         player = 0;
//         $("#commentary").text("PLAYER 2 WINS!");
//       } else {
//         player = 1;
//       }
//     }
//     if (player != 0 && ($("button.check").length + $("button.cross").length == 9)) {
//         player = 0;
//         $("#commentary").text("IT'S A DRAW.");
//     }
//   });
//   $("button").click(function() {
//     if (player == 0) {
//       return;
//     }
// });

// function check(checkClass) {
//     if ($(".sq1").hasClass(checkClass) && $(".sq2").hasClass(checkClass) && $(".sq3").hasClass(checkClass))
//     {
//         $(".sq1").css("color", "green");
//         $(".sq2").css("color", "green");
//         $(".sq3").css("color", "green");
//         return true;
//     } else if ($(".sq4").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq6").hasClass(checkClass))
//     {
//         $(".sq4").css("color", "green");
//         $(".sq5").css("color", "green");
//         $(".sq6").css("color", "green");
//         return true;
//     } else if ($(".sq7").hasClass(checkClass) && $(".sq8").hasClass(checkClass) && $(".sq9").hasClass(checkClass))
//     {
//         $(".sq7").css("color", "green");
//         $(".sq8").css("color", "green");
//         $(".sq9").css("color", "green");
//         return true;
//     } else if ($(".sq1").hasClass(checkClass) && $(".sq4").hasClass(checkClass) && $(".sq7").hasClass(checkClass)) 
//     {
//         $(".sq1").css("color", "green");
//         $(".sq4").css("color", "green");
//         $(".sq7").css("color", "green");
//         return true;
//     } else if ($(".sq2").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq8").hasClass(checkClass))
//     {
//         $(".sq2").css("color", "green");
//         $(".sq5").css("color", "green");
//         $(".sq8").css("color", "green");
//         return true;
//     } else if ($(".sq3").hasClass(checkClass) && $(".sq6").hasClass(checkClass) && $(".sq9").hasClass(checkClass)) 
//     {
//         $(".sq3").css("color", "green");
//         $(".sq6").css("color", "green");
//         $(".sq9").css("color", "green");
//         return true;
//     } else if ($(".sq3").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq7").hasClass(checkClass)) 
//     {
//         $(".sq3").css("color", "green");
//         $(".sq5").css("color", "green");
//         $(".sq7").css("color", "green");
//         return true;
//     } else if ($(".sq1").hasClass(checkClass) && $(".sq5").hasClass(checkClass) && $(".sq9").hasClass(checkClass)) 
//     {
//         $(".sq1").css("color", "green");
//         $(".sq5").css("color", "green");
//         $(".sq9").css("color", "green");
//         return true;
//     } else {
//         return false;
//     }
// }

// function reset() {
//    $("#commentary").text("DO NOT CLICK FILLED BOXES");
//    $("#commentary").css("background-color", "transparent");
//    $(".a").empty();
//    $(".a").removeClass("check");
//    $(".a").removeClass("cross");
//    player = 1;
//    $(".a").css("color", "black");
// }