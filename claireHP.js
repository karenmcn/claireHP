$(document).ready(function(){
 
  $("#hogwarts").click(function(){
  
  $("#modal").fadeToggle(); 
    
    
    }); 
});
$(document).ready(function(){

 $("#closeModal").click(function(){
   $("#modal").hide();
   $("#hogwarts").hide();
 });
});
$(document).ready(function(){

$("#menu").click(function(){
    $("#menuItems").fadeToggle();
});
$("#partyGames").click(function(){
   $("#games").fadeToggle();
});
});

$('nav ul li a').smoothScroll();