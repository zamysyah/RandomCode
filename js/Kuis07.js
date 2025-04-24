$(document).ready(function() {
    // Click event
    $("#btn-click").click(function() {
        $("#output").text("Button clicked!").fadeOut(2000).fadeIn(2000);
    });

    // Double click event
    $("#btn-dblclick").dblclick(function() {
        $("#output").text("Button double clicked!").slideUp(1000).slideDown(1000);
    });

    // Mouse enter event
    $("#btn-mouseenter").mouseenter(function() {
        $("#output").text("Mouse entered the button!").css("color", "#4CAF50");
    });

    // Mouse leave event
    $("#btn-mouseleave").mouseleave(function() {
        $("#output").text("Mouse left the button!").css("color", "#f44336");
    });

    // Hover event
    $("#btn-hover").hover(
        function() {
            $("#output").text("Mouse hovered over the button!").css("color", "#ffa500");
        },
        function() {
            $("#output").text("Mouse left the button!").css("color", "#f44336");
        }
    );
});
