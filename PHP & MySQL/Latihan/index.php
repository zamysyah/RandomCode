<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Anggota Kelompok</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <h2 class="mb-4">Daftar Anggota Kelompok</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>ID Anggota</th>
                <th>Nama Lengkap</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Asal Universitas</th>
                <th>Jurusan</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Koneksi ke database
            $koneksi = mysqli_connect("localhost", "username", "password", "latihan");

            // Periksa koneksi
            if (mysqli_connect_errno()) {
                echo "Koneksi database gagal: " . mysqli_connect_error();
                exit();
            }

            // Query untuk mengambil data anggota kelompok
            $query = "SELECT * FROM anggota_kelompok";
            $result = mysqli_query($koneksi, $query);

            // Periksa apakah ada data
            if (mysqli_num_rows($result) > 0) {
                $no = 1;
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<td>{$no}</td>";
                    echo "<td>{$row['id_anggota']}</td>";
                    echo "<td>{$row['nama_lengkap']}</td>";
                    echo "<td>{$row['jenis_kelamin']}</td>";
                    echo "<td>{$row['agama']}</td>";
                    echo "<td>{$row['asal_universitas']}</td>";
                    echo "<td>{$row['jurusan_apa']}</td>";
                    echo "</tr>";
                    $no++;
                }
            } else {
                echo "<tr><td colspan='7'>Tidak ada data</td></tr>";
            }

            // Tutup koneksi
            mysqli_close($koneksi);
            ?>
        </tbody>
    </table>
</div>

<!-- Bootstrap JS (tidak diperlukan jika Anda tidak menggunakan komponen JS Bootstrap lainnya) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
