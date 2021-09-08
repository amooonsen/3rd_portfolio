// page resize function

$(function(){

        $('.hamburger').click(function(){

          $('.head_nav').stop().slideToggle("fast");

        });

      });

   $(window).resize(function(){

      if(window.innerWidth>=1099){

          $('.head_nav').show();
          $('.headDetail').hide();

       } else {
       		$('.head_nav').hide();
          $('.headDetail').hide();
       }

   });


   // header nav mouseenter function


$(function(){
  $('.head_nav ul li').mouseover(function(){
    $(this).children('.headDetail').stop().slideDown(200);
  }).mouseout(function(){
    $('.headDetail').stop().slideUp(200);
  });
});