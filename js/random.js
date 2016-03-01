// JavaScript Document

<script type="text/javascript">
$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
 // (a little sooner than page load)
  $('#slickbox').hide();
 // shows the slickbox on clicking the noted link  
  $('a#slick-show').click(function() {
    $('#slickbox').slideDown('slow');
    return false;
  });
 // hides the slickbox on clicking the noted link  
  $('a#slick-hide').click(function() {
    $('#slickbox').slideUp('fast');
    return false;
  });
 
 // toggles the slickbox on clicking the noted link  
  $('a#slick-toggle').click(function() {
    $('#slickbox').slideToggle(400);
    return false;
  });
});
</script>
<script type="text/javascript">
$(document).ready(function(){
	$(".thumbs").stop().fadeTo("fast", 0.5); // This sets the opacity of the thumbs to fade down to 60% when the page loads

	$(".thumbs").hover(function(){
		$(this).stop().fadeTo("slow", 1.0); // This should set the opacity to 100% on hover
	},function(){
   		$(this).stop().fadeTo("slow", 0.5); // This should set the opacity back to 60% on mouseout
	});
});
</script>