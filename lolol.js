$(document).ready(function() { 

  $(".word").hide();
  $(".word").each(function(i) {
    if (this.complete) {
      $("#w1").fadeIn(1800);
      $("#w2").delay(1800).fadeIn(1800);
      $("#w3").delay(3600).fadeIn(1000);
      $("#w4").delay(4600).fadeIn(1000);
    } else {
      $(this).load(function() {
        $("#w1").fadeIn(1000);
        $("#w2").delay(1000).fadeIn(1000);
        $("#w3").delay(2000).fadeIn(1000);
        $("#w4").delay(3000).fadeIn(1000);
      });
    }
  });

  $("#plate")
    .animate({
    left: '500px',bottom: '15px'},1000)
    .delay(800)
    .animate({
    left: '-170px',bottom: '90px'},1500)

    ;

  $("#soup")
    .animate({
    left: '800px',bottom: '30px'},1800)
    .animate({
    left: '-200px',bottom: '120px'},1800)

    ;

  $("#b").click(function(){
        $("#knife").fadeIn(300);
        $("#fork").fadeIn(300);
          });
});


