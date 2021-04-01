$(document).ready(function() {


//------------------------ Start Navigation --------------------------//

$(".m-btn").click(function(){
    $("#main_navigation").slideToggle(800);
});    


//------------------------ Start MagnificPopup -----------------------//

  $('.gallery_row').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
      enabled:true
    }
  });

 //------------------------- End MagnificPopup ------------------------// 

});

$(window).on('load', function () {		
	$("#loading").delay(2000).fadeOut('slow');
 });


