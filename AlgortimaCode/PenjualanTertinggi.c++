#include <iostream>
#include <string>
using namespace std;

int main() {
    // Mendefinisikan larik untuk menyimpan nama wiraniaga dan nilai penjualan
    string wiraniaga[5];
    int nilaiPenjualan[5];

    // Input nama dan nilai penjualan untuk setiap wiraniaga
    cout << "Masukkan nama wiraniaga dan nilai penjualan:\n";
    for (int i = 0; i < 5; ++i) {
        cout << "Nama wiraniaga " << i+1 << ": ";
        cin >> wiraniaga[i];
        cout << "Nilai penjualan: ";
        cin >> nilaiPenjualan[i];
    }

    // Mencari nilai penjualan tertinggi
    int maxPenjualan = 0;
    int indeksMax = -1;
    for (int i = 0; i < 5; ++i) {
        if (nilaiPenjualan[i] > maxPenjualan) {
            maxPenjualan = nilaiPenjualan[i];
            indeksMax = i;
        }
    }

    // Menampilkan nama wiraniaga dengan penjualan tertinggi
    if (indeksMax != -1) {
        cout << "Wiraniaga dengan penjualan tertinggi adalah: " << wiraniaga[indeksMax] << endl;
    } else {
        cout << "Tidak ada data yang dimasukkan.\n";
    }
    return 0;
}
