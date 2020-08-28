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

// particlesJS.load('particles-js', './assets/script/particlesjs-config.json', function () {
//     console.log('callback - particles.js config loaded');
// });