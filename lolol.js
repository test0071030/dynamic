$(document).ready(function() { 


  $(".word").hide();
  $(".word").each(function(i) {
    if (this.complete) {
      $("#w1").fadeIn(1000);
      $("#w2").delay(1000).fadeIn(1500);
      $("#w3").delay(2500).fadeIn(1500);
      $("#w4").delay(4000).fadeIn(1500);

    } else {
      $(this).load(function() {
      $("#w1").fadeIn(1000);
      $("#w2").delay(1000).fadeIn(1500);
      $("#w3").delay(2500).fadeIn(1500);
      $("#w4").delay(4000).fadeIn(1500);

      });
    }
  });

  $("#plate")
    .animate({
      bottom:'-13px',
      left: '610px'},1000)
       ;

  $("#soup")
    .animate({
      bottom: '-3px',
      left: '520px'},1000)
       ;

  $("#plate1")
    .delay(1000)
    .animate({
      bottom:'87px',
      left: '-220px'},1500)
       ;

  $("#soup1")
    .delay(1000)
    .animate({
      bottom: '95px',
      left: '-100px'},1500)
       ;

  $("#plate2")
    .delay(2500)
    .animate({
      bottom:'200px',
      left: '610px'},1500)
       ;

  $("#soup2")
    .delay(2500)
    .animate({
      bottom: '210px',
      left: '520px'},1500)
       ;

  $("#plate3")
    .delay(4000)
    .animate({
      bottom:'310px',
      left: '30px'},1500)
       ;

  $("#soup3")
    .delay(4000)
    .animate({
      bottom: '310px',
      left: '150px'},1500)
       ;


  $("#b").click(function(){
        $("#knife").fadeIn(300);
        $("#fork").fadeIn(300);
          });
});


