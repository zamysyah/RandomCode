#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Masukkan bilangan: ";
    cin >> n;

    // Loop untuk menghitung dan menampilkan kuadrat dari 1 hingga n
    for (int i = 1; i <= n; i++) {
        int kuadrat = i * i;
        cout << kuadrat;
        
        // Tambahkan koma jika belum mencapai akhir deret
        if (i < n) {
            cout << ", ";
        }
    }

    return 0;
}
