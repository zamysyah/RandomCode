function buatSegitigaBintang(jumlahBaris) {
    for (let i = 1; i <= jumlahBaris; i++) {
        let baris = '';
        for (let j = 1; j <= i; j++) {
            baris += '*';
        }
        if (i === 1) {
            console.log(baris);
        } else {
            console.log(baris.padStart(jumlahBaris, ' '));
        }
    }
}

buatSegitigaBintang(5);
