$(document).ready(function(){
	$(".dropdown-toggle").dropdown();
	$("#btnSearch").click(function(){
		$("#search-box").toggle();
	});
	$('.courses').on('click',function(ev){		
		if(ev.target.nodeName == 'BUTTON'){
			var loadMore = $(this).find('.load-more');
			if(loadMore){
				$(this).find('.container-fluid').find('.cardinfo').each(function(el){
					if(el >= 2)
						$(this).removeClass('hidden');
				});
				$(loadMore).find("button").hide();
			}
		}
	});
	$(window).bind("scroll",function(){
		if($(window).scrollTop() > 40){
			$('#search-box').addClass("fix-search");
		}else{
			$('#search-box').removeClass("fix-search");
		}
	});	
	$('.singlebutton').find('[type="submit"]').each(function(){
		$(this).addClass('btn btn-info')
	});
	
	var leftsidebar = $("#left-sidebar").find("div").length;
	if (leftsidebar < 1) {
		$("#sidebarToggle").click();
	}
});
window.onscroll = function() {side_bar_fn()};

var header = document.getElementById("navbarResponsive");
var topsearch = document.getElementById("scroll-menu");
if(topsearch && header ){
	var sticky = header.offsetTop;
	var sticky2 = topsearch.offsetTop;

	function side_bar_fn() {

	  if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
			topsearch.classList.add("sticky2");
	  } else {
			header.classList.remove("sticky");
			topsearch.classList.remove("sticky2");
			
			
	  }
	  //
	 
	}
}