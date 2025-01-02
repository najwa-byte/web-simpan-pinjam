// Variabel untuk menyimpan daftar transaksi
let daftarTransaksi = [];

// Fungsi untuk menambahkan transaksi dengan validasi
function tambahTransaksi() {
    const nama = document.getElementById('nama-transaksi').value.trim();
    const kategori = document.getElementById('kategori-transaksi').value;
    const jumlah = document.getElementById('jumlah-transaksi').value.trim();

    // Validasi input
    const errorMessages = [];
    if (!nama) {
        errorMessages.push('Nama transaksi harus diisi.');
    }
    if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
        errorMessages.push('Jumlah transaksi harus berupa angka positif.');
    }

    // Tampilkan pesan kesalahan jika ada
    const errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = ''; // Hapus pesan sebelumnya
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const errorItem = document.createElement('p');
            errorItem.textContent = message;
            errorItem.style.color = 'red';
            errorContainer.appendChild(errorItem);
        });
        return; // Hentikan proses jika ada kesalahan
    }

    // Jika validasi berhasil, tambahkan transaksi ke daftar
    daftarTransaksi.push({
        nama,
        kategori,
        jumlah: parseInt(jumlah),
    });

    // Perbarui tabel transaksi
    updateTabelTransaksi();

    // Reset formulir setelah berhasil ditambahkan
    document.getElementById('transaksi-form').reset();
}

// Fungsi untuk memperbarui tabel transaksi
function updateTabelTransaksi() {
    const tbody = document.getElementById('transaksi-table').querySelector('tbody');
    tbody.innerHTML = ''; // Bersihkan tabel sebelum menambahkan baris baru

    daftarTransaksi.forEach((transaksi) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaksi.nama}</td>
            <td>Rp ${parseInt(transaksi.jumlah).toLocaleString('id-ID')}</td>
            <td>${transaksi.kategori}</td>
        `;
        tbody.appendChild(row);
    });
}

// Tambahkan event listener ke tombol simpan
document.getElementById('tombol-simpan').addEventListener('click', tambahTransaksi);
