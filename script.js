$(".draggable").draggable({
  drag: function(event, ui){
    // Set all draggable objects to 0 so they behind other
    $(".draggable").css('zIndex', 0);
    // Set 'current' object to 10 so it's on top of all other objects
    $(this).css('zIndex', 10);
  },
});
$("#snowman").click(function toggleGrayscale(){
  console.log("snoman toggled");
  $(".draggable").toggleClass("grayscale");
});
// Not able to allow resizing and draggable
//$(".draggable").resizable();
