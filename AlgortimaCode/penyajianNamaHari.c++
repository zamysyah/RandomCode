#include <iostream>
#include <ctime>
using namespace std;

string penyajianNamaHari(int day, int month, int year) {
    struct tm time = {0, 0, 0, day, month - 1, year - 1900};
    mktime(&time);
    char weekday[10];
    strftime(weekday, 10, "%A", &time);
    return weekday;
}

int main() {
    int day, month, year;
    cout << "Masukkan tanggal (dd mm yyyy): ";
    cin >> day >> month >> year;

    string namaHari = penyajianNamaHari(day, month, year);
    cout << "Nama hari: " << namaHari << endl;

    return 0;
}
