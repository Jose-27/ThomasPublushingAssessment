//slider function
function readyAll(jquery) {
    var count = $(".slider ul > li").length
    var slider = 1
    var speed=5000
    var fadeSpeed = 300
    var loop 
    start();


    $("#1").fadeIn(fadeSpeed);
    $('.next').click(right)
    $('.slider').hover(stop,start)
    
    function start(){
        loop = setInterval(next, speed)
    }

    function stop(){
        clearInterval(loop)
    }
    
    function right() {
        stop()
        next()
        start()
        return false
    }

    function next() {
        slider++
        if (slider > count) {
            slider = 1
        }

        $(".slider ul > li").fadeOut(fadeSpeed)
        $("#" + slider).fadeIn(fadeSpeed)
    }

};

//for mobile bar toggle
$(".toggle").click(function() {
  $(this).toggleClass("on");
  $("nav").slideToggle();
});

//load object
$(document).ready(readyAll);