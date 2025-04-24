$(document).ready(function() {
    $("#hideE1").click(function() {
        $("#element1").toggle();
    });

    $("#hideClass").click(function() {
        $(".kelas").toggle();
    });

    $("#hideAttr").click(function() {
        $("[href='#']").toggle();
    });
});
