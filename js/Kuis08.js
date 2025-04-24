$(document).ready(function(){
    // Fungsi untuk efek Slide Toggle
    function slideToggleEffect() {
        $("#box1").slideToggle(1000);
    }

    // Fungsi untuk efek Swing
    function swingEffect() {
        $("#box2").hide().show('swing', 1000);
    }

    // Fungsi untuk efek Fade Out
    function fadeOutEffect() {
        $("#box3").fadeOut(1000);
    }

    // Fungsi untuk efek Slide Up
    function slideUpEffect() {
        $("#box4").slideUp(1000);
    }

    // Fungsi untuk efek Animate
    function animateEffect() {
        $("#box5").animate({
            opacity: '0.3',
            height: '150px',
            width: '150px'
        }, 1000);
    }

    // Menjalankan fungsi ketika tombol ditekan
    $("#slideToggleBtn").click(slideToggleEffect);
    $("#swingBtn").click(swingEffect);
    $("#fadeOutBtn").click(fadeOutEffect);
    $("#slideUpBtn").click(slideUpEffect);
    $("#animateBtn").click(animateEffect);
});
