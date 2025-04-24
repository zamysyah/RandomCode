// Mendefinisikan fungsi hitungLuasPersegiPanjang yang menerima dua parameter (panjang dan lebar) dan mengembalikan luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
    var luas = panjang * lebar;
    return luas;
}

// Menggunakan fungsi untuk menghitung luas persegi panjang dengan panjang 5 dan lebar 10
var panjang = 5;
var lebar = 10;
var luasPersegiPanjang = hitungLuasPersegiPanjang(panjang, lebar);

// Tampilkan hasilnya menggunakan console.log()
console.log("Luas persegi panjang dengan panjang", panjang, "dan lebar", lebar, "adalah:", luasPersegiPanjang);

