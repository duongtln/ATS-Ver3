
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#top-control').css({
				bottom: "0px"
			});
		} else {
			$('#top-control').css({
				bottom: "-100px"
			});
		}
	});
	$('#top-control').click(function () {
		$('html, body').animate({
			scrollTop: '0px'
		}, 800);
		return false;
	});


	//Roadmap show/hide
	$("#tu-chon").css({
		display: "none",
	});
	
	$("#bat-buoc-tab").click(function () {
		$("#bat-buoc").css({
			display: "block"
		});
		$("#tu-chon").css({
			display: "none",
		});
	});

	$("#tu-chon-tab").click(function () {
		$("#bat-buoc").css({
			display: "none"
		});
		$("#tu-chon").css({
			display: "block",
		});
	});
});


function detailMandatory(id) {
	var isHideTable = document.getElementById("intro-step-11");
	var userId01 = document.getElementById("user_id_01");
	var userId02 = document.getElementById("user_id_02");
	var userId03 = document.getElementById("user_id_03");
    isHideTable.style.display = "none";
    switch (id) {
        case '1':
            userId01.style.display = "block";
            break;
        case '2':
            userId02.style.display = "block";
            break;
        case '3':
            userId03.style.display = "block";
            break;
    }
}

function back() {
	var isHideTable = document.getElementById("intro-step-11");
	var userId01 = document.getElementById("user_id_01");
	var userId02 = document.getElementById("user_id_02");
	var userId03 = document.getElementById("user_id_03");
    isHideTable.style.display = "block";
    userId01.style.display = "none";
    userId02.style.display = "none";
    userId03.style.display = "none";
}

//Menu
$(document).ready(function(){	

	$('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
		$(".parent-menu").removeClass('active');
		$('.details:first-child').addClass("active");
		$('.parent-menu:first-child').addClass("active");

	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
	});
	
	// $('.details:first-child').toggleClass("active");
	
	$('.parent-menu').hover(function() {
		$(".details").removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		var href = $("a", this).attr('href');
		$(href).addClass('active').siblings().removeClass('active');
	});
	
	
	//Breadcrumb
	$('.breadcrumb').find('.divider').css('display','none');
	$('.breadcrumb').find('li').addClass('hvr-shrink');
	$('.breadcrumb').find('li:last-child').css("background-color","#d5dddd").css("font-weight","600").css("width","auto");
	
	//Courses
	$('.courses').addClass('row');
	$('.paging').addClass('col col-12');
	$('.coursebox').addClass('card col col-3');
	// $('.moreinfo').find('img').css("display","none");
	// $('.coursename').append('<i class="fad fa-book-spells mr-3"></i>'); 
	
	//Categories
	$('.subcategories').addClass('list-group').css("margin-bottom", "10px");
	$('.subcategories').find('.category').addClass('list-group-item list-group-item-action');
});