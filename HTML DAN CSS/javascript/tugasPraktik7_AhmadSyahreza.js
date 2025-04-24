// Fungsi untuk menentukan teks berdasarkan kondisi
function determineText(number) {
    if (number % 15 === 0) {
        return "gamelab indonesia";
    } else if (number % 3 === 0) {
        return "game";
    } else if (number % 5 === 0) {
        return "gamelab";
    } else {
        return ""
    }
}

// Fungsi untuk menampilkan hasil uji
function runTest(testNumber, limit) {
    let result = "Hasil uji " + testNumber + "\n";
    for (let i = 1; i <= limit; i++) {
        result += determineText(i);
        if (i !== limit) {
            result += " ";
        }
    }
    console.log(result);
}

// Menjalankan uji pertama
runTest("pertama", 10);

// Menjalankan uji kedua
runTest("kedua", 25);

// Menjalankan uji ketiga
runTest("ketiga", 35);
