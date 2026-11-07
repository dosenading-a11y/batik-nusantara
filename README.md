# Project Landing Page UMKM Fashion Batik — BATIKARA

Landing page statis untuk simulasi UMKM fashion batik. Project ini **tidak menggunakan database** dan tidak membutuhkan backend.

## Struktur folder

```text
umkm-fashion-batik/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-batik.svg
    ├── kemeja-pria.svg
    ├── dress-wanita.svg
    ├── outer-batik.svg
    └── motif-batik.svg
```

## Cara menjalankan

1. Ekstrak file ZIP.
2. Buka folder `umkm-fashion-batik`.
3. Klik dua kali `index.html`, atau jalankan dengan ekstensi Live Server di VS Code.
4. Untuk XAMPP, salin folder project ke `C:\\xampp\\htdocs\\`, lalu buka `http://localhost/umkm-fashion-batik/`.

## Kustomisasi

- Ganti nama, deskripsi, harga, dan konten produk di `index.html`.
- Ganti gambar di folder `images/` dengan foto produk asli. Pertahankan nama file atau sesuaikan atribut `src` pada HTML.
- Ubah nomor WhatsApp contoh `6281234567890` pada `js/script.js`.
- Ubah warna dan layout di `css/style.css`.

## Publikasi ke hosting

1. Pastikan `index.html` berada di folder utama website (`public_html` atau document root hosting).
2. Upload seluruh folder `css`, `js`, dan `images` beserta `index.html`.
3. Hubungkan domain ke hosting melalui DNS sesuai petunjuk penyedia hosting.
4. Aktifkan SSL/HTTPS dari panel hosting.

## Catatan pembelajaran

Website ini adalah landing page katalog/promosi. Tombol WhatsApp mengarahkan pengunjung ke WhatsApp. Keranjang, checkout, login, dan pengelolaan produk belum dibuat karena project sengaja dibuat tanpa database.
