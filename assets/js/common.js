var isHideTable = document.getElementById("intro-step-11");
var userId01 = document.getElementById("user_id_01");
var userId02 = document.getElementById("user_id_02");
var userId03 = document.getElementById("user_id_03");

function detailMandatory(id) {
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
    isHideTable.style.display = "block";
    userId01.style.display = "none";
    userId02.style.display = "none";
    userId03.style.display = "none";
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#top-control').css({
            bottom: "0px"
        });
        $('.scroll-down').css({
            display: "none"
        })
    } else {
        $('#top-control').css({
            bottom: "-100px"
        });
        $('.scroll-down').css({
            display: "flex"
        })
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

// Select all links with hashes
$('a[href*="#to"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// particlesJS.load('particles-js', './assets/script/particlesjs-config.json', function () {
//     console.log('callback - particles.js config loaded');
// });