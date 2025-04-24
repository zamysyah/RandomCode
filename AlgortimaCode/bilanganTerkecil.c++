#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Masukkan jumlah bilangan: ";
    cin >> n;

    if (n <= 0) {
        cout << "Jumlah bilangan harus lebih dari 0." << endl;
        return 1;
    }

    int bilangan, terkecil;
    cout << "Masukkan bilangan ke-1: ";
    cin >> terkecil;

    for (int i = 2; i <= n; ++i) {
        cout << "Masukkan bilangan ke-" << i << ": ";
        cin >> bilangan;
        if (bilangan < terkecil) {
            terkecil = bilangan;
        }
    }

    cout << "Bilangan terkecil adalah: " << terkecil << endl;

    return 0;
}
