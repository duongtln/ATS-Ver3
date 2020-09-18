// Inner form
gsap.from(".inner-form", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        delay: 0.1,
        stagger: 0,
        ease: "elastic",
        force3D: true
    });
	
//Logo
    gsap.from("#logo-fe, #logo-tc", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        delay: 0.1,
        stagger: 0.1,
        ease: "elastic",
        force3D: true
    });

    //Title login
    // var text = $(".title-login");
    // var split = new SplitText(text);

    // function random(min, max) {
        // return (Math.random() * (max - min)) + min;
    // }
    // $(split.chars).each(function (i) {
        // TweenMax.from($(this), 1.5, {
            // opacity: 0,
            // x: random(-500, 500),
            // y: random(-500, 500),
            // z: random(-500, 500),
            // scale: .1,
            // delay: 0.1,
            // yoyo: true
        // });
    // });

    //Input
    gsap.from('input, .custom-control, .capcha, .user-icon, .password-icon, .maintenance', {
        scaleX: 0,
        delay: 1,
        stagger: 0.2
    });

    //Button
    gsap.from('.login-animation, .dgdt-animation', {
        scaleY: 0,
        delay: 1,
        stagger: 0.2
    });

    //Note
    // var childSplit = new SplitText(".note-cookie", {
        // type: "lines",
        // linesClass: "split-child"
    // });

    // gsap.from(childSplit.lines, {
        // duration: 1,
        // xPercent: 100,
        // ease: "power4",
        // stagger: 0.1,
        // delay: 1,
        // opacity: 0,
    // });

    var wave1 = $('#feel-the-wave').wavify({
        height: 410,
        bones: 5,
        amplitude: 60,
        color: '#D8E7E1',
        speed: .15
    });

    var wave2 = $('#feel-the-wave-two').wavify({
        height: 455,
        bones: 4,
        amplitude: 60,
        color: '#C3DCD5',
        speed: .25
    });

    var wave3 = $('#feel-the-wave-three').wavify({
        height: 470,
        bones: 6,
        amplitude: 40,
        color: '#AED0C9',
        speed: .30
    });
	
	var wave3 = $('#feel-the-wave-four').wavify({
        height: 490,
        bones: 5,
        amplitude: 60,
        color: '#89BAB2',
        speed: .35
    });