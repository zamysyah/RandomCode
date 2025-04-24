$(document).ready(function() {
    $("h1").css("color", "blue");
    $("#myDiv").mouseenter(function() {
        $(this).text("Kurson Mouse Berada di dalam");
    });
    $("#myDiv").mouseleave(function() {
        $(this).text("Kurson Mouse Berada di Luar");
    });
    $("#myButton").click(function() {
        alert("Tombol Diklik!");
    });
    $(document).keypress(function(event) {
        var key = String.fromCharCode(event.which);
        $("#hasil_input").text("Anda menekan tombol " + key);
    });
    $("#myForm").submit(function() {
        event.preventDefault();
        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        $("#hasil_form").text("Nama: " + name + ", Email: " + email);
    });
});