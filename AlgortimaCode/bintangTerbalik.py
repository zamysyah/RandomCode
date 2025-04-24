# Input jumlah baris
tinggi = int(input("Masukkan jumlah baris: "))

# Loop untuk setiap baris
for i in range(tinggi, 0, -1):
    # Cetak bintang sebanyak i kali
    for j in range(i):
        print("*", end="")
    print()  # Pindah ke baris baru setelah mencetak bintang
