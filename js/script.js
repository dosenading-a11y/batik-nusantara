// Ubah nomor di bawah dengan nomor WhatsApp UMKM (format internasional tanpa +).
const nomorWhatsApp = "6281234567890";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Perbarui tautan WhatsApp berdasarkan nomor toko.
const pesan = "Halo Batikara, saya ingin bertanya tentang produk.";
document.getElementById("waLink").href =
  `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

// Tahun footer otomatis.
document.getElementById("year").textContent = new Date().getFullYear();

// Tutup menu setelah pengunjung memilih tautan navigasi.
document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

