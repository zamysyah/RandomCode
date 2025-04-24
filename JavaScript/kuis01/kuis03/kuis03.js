// Fungsi untuk memeriksa apakah rumah memenuhi kriteria
function cekKriteria(rumah) {
    // Memeriksa kriteria lokasi
    if (rumah.rawanBanjir || rumah.rawanLongsor || rumah.kawasanIndustri) {
        return false;
    }

    // Memeriksa kriteria luasan
    if (rumah.luasTanah < 800 || rumah.luasBangunan < 400) {
        return false;
    }

    // Memeriksa kriteria fasilitas
    if (!rumah.kolamRenang || !rumah.parkirLuas || !rumah.kebunBelakang) {
        return false;
    }

    return true; // Memenuhi semua kriteria
}

// Fungsi untuk memfilter rumah-rumah yang memenuhi kriteria
function seleksiRumah(offers) {
    let rumahYangDipilih = [];
    for (let i = 0; i < offers.length; i++) {
        if (cekKriteria(offers[i])) {
            rumahYangDipilih.push(offers[i]);
        }
    }
    return rumahYangDipilih;
}

// Data penawaran rumah
let penawaranRumah = [
    {   
        name: 'Rumah 1',
        rawanBanjir: false,
        rawanLongsor: true,
        kawasanIndustri: false,
        luasTanah: 2000,
        luasBangunan: 850,
        kolamRenang: true,
        parkirLuas: true,
        kebunBelakang: true
    },
    {
        nama: 'Rumah 2',
        rawanBanjir: false,
        rawanLongsor: false,
        kawasanIndustri: false,
        luasTanah: 1000,
        luasBangunan: 450,
        kolamRenang: false,
        parkirLuas: true,
        kebunBelakang: true
    },
    {
        nama: 'Rumah 3',
        rawanBanjir: false,
        rawanLongsor: false,
        kawasanIndustri: false,
        luasTanah: 1200,
        luasBangunan: 650,
        kolamRenang: true,
        parkirLuas: true,
        kebunBelakang: true
    },
    {
        nama: 'Rumah 4',
        rawanBanjir: false,
        rawanLongsor: false,
        kawasanIndustri: false,
        luasTanah: 1100,
        luasBangunan: 1650,
        kolamRenang: true,
        parkirLuas: true,
        kebunBelakang: true
    },
    {
        nama: 'Rumah 5',
        rawanBanjir: false,
        rawanLongsor: false,
        kawasanIndustri: false,
        luasTanah: 3200,
        luasBangunan: 550,
        kolamRenang: true,
        parkirLuas: true,
        kebunBelakang: true
    },
    {
        nama: 'Rumah 6',
        rawanBanjir: false,
        rawanLongsor: false,
        kawasanIndustri: false,
        luasTanah: 1300,
        luasBangunan: 750,
        kolamRenang: true,
        parkirLuas: true,
        kebunBelakang: true
    }
];

// Memilih rumah-rumah yang memenuhi kriteria
let rumahTerpilih = seleksiRumah(penawaranRumah);
console.log(rumahTerpilih); // Output rumah-rumah yang memenuhi kriteria
