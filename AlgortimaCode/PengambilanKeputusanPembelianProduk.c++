#include <iostream>
#include <string>
using namespace std;

// Fungsi untuk mencari informasi tentang produk
void cariInformasiProduk(string produk) {
    cout << "Mencari informasi tentang produk " << produk << "..." << endl;
    // Simulasi pencarian informasi
    cout << "Informasi ditemukan!" << endl;
}

// Fungsi untuk mengevaluasi informasi yang diperoleh
void evaluasiInformasi(string produk) {
    cout << "Evaluasi informasi tentang produk " << produk << "..." << endl;
    // Simulasi evaluasi informasi
    cout << "Informasi dievaluasi dengan baik." << endl;
}

// Fungsi untuk menentukan prioritas dan kriteria pembelian
void tentukanPrioritas(string produk) {
    cout << "Menentukan prioritas dan kriteria pembelian untuk produk " << produk << "..." << endl;
    // Simulasi menentukan prioritas dan kriteria pembelian
    cout << "Prioritas dan kriteria pembelian ditetapkan." << endl;
}

// Fungsi untuk membuat keputusan pembelian
void buatKeputusanPembelian(string produk) {
    cout << "Membuat keputusan pembelian untuk produk " << produk << "..." << endl;
    // Simulasi pembuatan keputusan pembelian
    cout << "Keputusan pembelian telah dibuat." << endl;
}

// Fungsi utama
int main() {
    string produk;

    // Langkah 1: Identifikasi kebutuhan atau keinginan untuk membeli produk
    cout << "Masukkan nama produk yang ingin Anda beli: ";
    getline(cin, produk);

    // Langkah 2: Cari informasi tentang produk
    cariInformasiProduk(produk);

    // Langkah 3: Evaluasi informasi yang diperoleh
    evaluasiInformasi(produk);

    // Langkah 4: Tentukan prioritas dan kriteria pembelian
    tentukanPrioritas(produk);

    // Langkah 5: Buat keputusan pembelian
    buatKeputusanPembelian(produk);

    return 0;
}
