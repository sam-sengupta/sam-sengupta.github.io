var tord = "";
let truthb = document.getElementById('truth');
truthb.addEventListener('click', truth);
let dareb = document.getElementById('dare');
dareb.addEventListener('click', dare);
let homeb = document.getElementById('home');
homeb.addEventListener('click', home);
let studyb = document.getElementById('study');
studyb.addEventListener('click', study);
let yesb = document.getElementById('yes');
yesb.addEventListener('click', yes);
let nob = document.getElementById('no');
nob.addEventListener('click', no);
let stopb = document.getElementById('stop');
stopb.addEventListener('click', stop);

$(document).ready(function() { 
  $('audio#bg')[0].play()
  $(".one").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  $(".one").click(function() {
    $('audio#bg')[0].play()
    var src = $('img').attr('src');
    $("img").width('25%')
    $('audio#in')[0].play()
    if(src == 'images/1.jpg') {
        $("img").attr("src","images/2.jpg");
    } else if(src == "images/2.jpg") {
        $("img").attr("src","images/3.jpg");
    } else if(src == "images/3.jpg"){
        $("img").attr("src","images/4.jpg");
        $(".truth").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
        $(".dare").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
    } else {$("img").attr("src","images/1.jpg");}
  });
});

function truth() {
  tord = "t";
  $(".one").css("backgroundColor", "rgba(0,0,0,0)");
  $(".truth").css("backgroundColor", "rgba(0,0,0,0)");
  $(".dare").css("backgroundColor", "rgba(0,0,0,0)");
  $(".two").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  $(".two").click(function() {
    $('audio#in')[0].play()
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/4.jpg') {
        $("img").attr("src","images/t.jpg");
    } else if(src == "images/t.jpg") {
        $("img").attr("src","images/t1.jpg"); 
    } else if(src == "images/t1.jpg"){
        $("img").attr("src","images/t2.jpg");
        $(".home").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
        $(".study").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
    } else {$("img").attr("src","images/t.jpg");}
  }); 
}

function dare() {
  tord = "d";
  $(".one").css("backgroundColor", "rgba(0,0,0,0)");
  $(".truth").css("backgroundColor", "rgba(0,0,0,0)");
  $(".dare").css("backgroundColor", "rgba(0,0,0,0)");
  $(".two").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  $(".two").click(function() {
    $('audio#in')[0].play()
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/4.jpg') {
        $("img").attr("src","images/d.jpg");
    } else if(src == "images/d.jpg") {
        $("img").attr("src","images/d1.jpg"); 
    } else if(src == "images/d1.jpg"){
        $("img").attr("src","images/d2.jpg");
        $(".home").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
        $(".study").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
    } else {$("img").attr("src","images/d.jpg");}
  }); 
}

function home() {
  $(".a").css("backgroundColor", "rgba(0,0,0,0)");
  $(".switch").css("backgroundColor", "rgba(0,0,0,0)");
  $(".three").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  if(tord == "t") {
    $(".three").click(function() {
      $('audio#in')[0].play()
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/tp1.jpg') {
          $("img").attr("src","images/tp2.jpg");
      } else if(src == "images/tp2.jpg") {
          $("img").attr("src","images/tp3.jpg"); 
      } else if(src == "images/tp3.jpg"){
          $("img").attr("src","images/tp4.jpg");
          $(".yes").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
          $(".no").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
      } else {$("img").attr("src","images/tp1.jpg");}
    }); 
  }
  else if(tord == "d")  {
    $(".three").click(function() {
      $('audio#in')[0].play()
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/dp1.jpg') {
          $("img").attr("src","images/dp2.jpg");
      } else if(src == "images/dp2.jpg") {
          $("img").attr("src","images/dp3.jpg");
      } else if(src == "images/dp3.jpg") {
          $("img").attr("src","images/dp4.png"); 
          $(".yes").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
          $(".no").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
      } else {$("img").attr("src","images/dp1.jpg");}
    }); 
  }
}

function study() {
  $(".a").css("backgroundColor", "rgba(0,0,0,0)");
  $(".switch").css("backgroundColor", "rgba(0,0,0,0)");
  $(".three").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  if(tord == "t") {
    $(".three").click(function() {
      $('audio#in')[0].play()
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/ts1.jpg') {
          $("img").attr("src","images/ts2.jpg");
      } else if(src == "images/ts2.jpg") {
          $("img").attr("src","images/ts3.jpg"); 
      } else if(src == "images/ts3.jpg"){
          $("img").attr("src","images/ts4.jpg");
          $(".yes").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
          $(".no").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
      } else {$("img").attr("src","images/ts1.jpg");}
    }); 
  }
  else if(tord == "d"){
    $(".three").click(function() {
      $('audio#in')[0].play()
      var src = $('img').attr('src');
      $("img").width('25%')
      if(src == 'images/ds1.jpg') {
          $("img").attr("src","images/ds2.jpg");
      } else if(src == "images/ds2.jpg") {
          $("img").attr("src","images/ds3.jpg"); 
      } else if(src == "images/ds3.jpg"){
          $("img").attr("src","images/ds4.jpg");
          $(".yes").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
          $(".no").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
      } else {$("img").attr("src","images/ds1.jpg");}
    }); 
  }
}

function yes() {
  $(".a").css("backgroundColor", "rgba(0,0,0,0)");
  $(".switch").css("backgroundColor", "rgba(0,0,0,0)");
  $(".four").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  $(".four").click(function() {
    $('audio#in')[0].play()
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/y1.jpg') {
        $("img").attr("src","images/11.jpg");
    } else if(src == "images/11.jpg") {
        $("img").attr("src","images/12.jpg"); 
    } else if(src == "images/12.jpg"){
        $("img").attr("src","images/13.jpg");
    } else if(src == "images/13.jpg"){
        $("img").attr("src","images/14.jpg");
    } else if(src == "images/14.jpg"){
        $("img").attr("src","images/15.jpg");
    } else if(src == "images/15.jpg"){
        $("img").attr("src","images/16.jpg");
        $(".stop").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
    } else {$("img").attr("src","images/y1.jpg");}
  }); 
}

function no() {
  $(".a").css("backgroundColor", "rgba(0,0,0,0)");
  $(".switch").css("backgroundColor", "rgba(0,0,0,0)");
  $(".four").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
  $(".four").click(function() {
    $('audio#in')[0].play()
    var src = $('img').attr('src');
    $("img").width('25%')
    if(src == 'images/n1.jpg') {
        $("img").attr("src","images/11.jpg");
    } else if(src == "images/11.jpg") {
        $("img").attr("src","images/12.jpg"); 
    } else if(src == "images/12.jpg"){
        $("img").attr("src","images/13.jpg");
    } else if(src == "images/13.jpg"){
        $("img").attr("src","images/14.jpg");
    } else if(src == "images/14.jpg"){
        $("img").attr("src","images/15.jpg");
    } else if(src == "images/15.jpg"){
        $("img").attr("src","images/16.jpg");
        $(".stop").css("backgroundColor", "rgba(100, 109, 119, 0.726)");
    } else {$("img").attr("src","images/n1.jpg");}
  }); 
}

function stop() {
  $('audio#call')[0].play()
  $(".a").css("backgroundColor", "rgba(0,0,0,0)");
  $(".switch").css("backgroundColor", "rgba(0,0,0,0)");
  $("img").attr("src","images/call.jpg");
}