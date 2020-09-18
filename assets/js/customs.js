(function($) {
	"use strict"; // Start of use strict
	// Toggle the side navigation
	$("#sidebarToggle").on('click',function(e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-toggled");
		$(".sidebar").toggleClass("toggled");
		$("#main").toggleClass("toggled");
		$(".btnsidebarToggle").toggleClass("toggled");
	});
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
})(jQuery); // End of use strict