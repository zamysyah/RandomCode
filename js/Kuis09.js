$(document).ready(function(){
    // 1. Menambahkan Element Baru
    $("#btn1").click(function(){
      $("<p>Element baru telah ditambahkan.</p>").appendTo(".container");
    });
  
    // 2. Mengubah Teks
    $("#btn2").click(function(){
      $("h1").text("Kuis 09 - Penerapan jQuery DOM");
    });
  
    // 3. Menghapus Element
    $("#btn3").click(function(){
      $(".container p:last-child").remove();
    });
  
    // 4. Mengubah Warna Latar Belakang
    $("#btn4").click(function(){
      $(".container").css("background-color", "#ffcccc");
    });
  
    // 5. Efek Animasi
    $("#btn5").click(function(){
      $(".container").fadeOut(1000).fadeIn(1000);
    });
  });
  