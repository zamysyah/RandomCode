#include <iostream>
using namespace std;

int main() {
    int jumlahAngka;
    double total = 0.0;

    cout << "Masukkan jumlah angka: ";
    cin >> jumlahAngka;

    // Validasi jumlah angka
    if (jumlahAngka <= 0) {
        cout << "Jumlah angka harus lebih besar dari 0." << endl;
        return 1; // Keluar dari program dengan kode error
    }

    // Input dan hitung total
    for (int i = 1; i <= jumlahAngka; ++i) {
        double angka;
        cout << "Masukkan angka ke-" << i << ": ";
        cin >> angka;
        total += angka;
    }

    // Hitung rata-rata
    double rataRata = total / jumlahAngka;

    // Tampilkan rata-rata
    cout << "Rata-rata dari " << jumlahAngka << " angka adalah: " << rataRata << endl;

    return 0; // Keluar dari program dengan kode berhasil
}
