"use client";

import { useState } from "react";
import MenuModal from "./components/MenuModal";

// Data lokasi DENGAN MAP
const lokasiData = [
  {
    nama: "Roti Bakar Executive - Tunggangri",
    alamat: "Tunggangri, Kec. Kalidawir, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Tunggang,+Kalidawir,+Tulungagung&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Tunggang,+Kalidawir,+Tulungagung",
  },
  {
    nama: "Roti Bakar Executive - Bendilwungu",
    alamat: "Bendilwungu, Kec. Sumbergempol, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Bendilwungu,+Sumbergempol,+Tulungagung&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Bendilwungu,+Sumbergempol,+Tulungagung",
  },
  {
    nama: "Roti Bakar Executive - Karangtalun",
    alamat: "Karangtalun, Kec. Kalidawir, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Karangtalun,+Kalidawir,+Tulungagung&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Karangtalun,+Kalidawir,+Tulungagung",
  },
  {
    nama: "Roti Bakar Executive - Podorejo",
    alamat: "Podorejo, Kec. Sumbergempol, Kab. Tulungagung",
    jam: "16:00 - 21:30",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Podorejo,+Sumbergempol,+Tulungagung&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Podorejo,+Sumbergempol,+Tulungagung",
  },
];

// Data menu MEDIUM (5 Potong) - Single Flavor
const menuMedium = [
  { nama: "Cokelat", harga: 9000 },
  { nama: "Kacang", harga: 9000 },
  { nama: "Mangga", harga: 8000 },
  { nama: "Strawberry", harga: 8000 },
  { nama: "Blueberry", harga: 8000 },
  { nama: "Melon", harga: 8000 },
  { nama: "Nanas", harga: 8000 },
  { nama: "Greentea", harga: 9000 },
  { nama: "Keju", harga: 9000 },
  { nama: "Taro", harga: 9000 },
  { nama: "Milo", harga: 9000 },
  { nama: "Tiramisu", harga: 9000 },
  { nama: "Oreo", harga: 9000 },
];

// Data menu LARGE (10 Potong) - Mix Flavor
const menuLarge = [
  { nama: "Strawberry - Blueberry", harga: 13000 },
  { nama: "Mangga - Melon", harga: 13000 },
  { nama: "Nanas - Strawberry", harga: 13000 },
  { nama: "Kacang - Keju", harga: 15000 },
  { nama: "Oreo - Milo", harga: 15000 },
  { nama: "Tiramisu - Greentea", harga: 15000 },
  { nama: "Taro - Tiramisu", harga: 15000 },
  { nama: "Milo - Keju", harga: 15000 },
  { nama: "Oreo - Taro", harga: 15000 },
  { nama: "Cokelat Marshmallow", harga: 17000 },
  { nama: "Choco Crunchy", harga: 17000 },
  { nama: "Cokelat - Cokelat", harga: 14000 },
  { nama: "Cokelat - Kacang", harga: 14000 },
  { nama: "Cokelat Kacang Mix", harga: 17000 },
  { nama: "Cokelat - Keju", harga: 15000 },
  { nama: "Cokelat Keju Mix", harga: 18000 },
  { nama: "Cokelat - Nanas", harga: 14000 },
  { nama: "Cokelat - Mangga", harga: 14000 },
  { nama: "Cokelat - Strawberry", harga: 14000 },
  { nama: "Cokelat - Blueberry", harga: 14000 },
  { nama: "Cokelat - Melon", harga: 14000 },
  { nama: "Cokelat - Greentea", harga: 15000 },
  { nama: "Cokelat - Milo", harga: 15000 },
  { nama: "Cokelat - Tiramisu", harga: 15000 },
  { nama: "Cokelat - Taro", harga: 15000 },
  { nama: "Cokelat - Oreo", harga: 15000 },
  { nama: "Cokelat - Choco Crunchy", harga: 16000 },
  { nama: "Choco Crunchy - Keju", harga: 16000 },
  { nama: "Choco Crunchy - Tiramisu", harga: 16000 },
  { nama: "Choco Crunchy - Kacang", harga: 16000 },
  { nama: "Strawberry Blueberry - Nanas Melon", harga: 13000 },
  { nama: "Cokelat Kacang Keju Mix", harga: 21000 },
  { nama: "Cokelat Kacang Oreo Mix", harga: 21000 },
  { nama: "Cokelat Kacang - Cokelat Keju", harga: 18000 },
];

// Data testimoni/ulasan (HORIZONTAL SCROLL)
const testimoniData = [
  {
    id: 1,
    nama: "Ahmad R.",
    rating: "⭐⭐⭐⭐⭐",
    komentar: "Roti bakarnya enak banget, toppingnya melimpah!",
    lokasi: "Tunggangri",
    tanggal: "15 April 2026",
  },
  {
    id: 2,
    nama: "Siti N.",
    rating: "⭐⭐⭐⭐⭐",
    komentar: "Roti kukusnya lembut dan rasanya authentic. Recomended!",
    lokasi: "Bendilwungu",
    tanggal: "12 April 2026",
  },
  {
    id: 3,
    nama: "Budi W.",
    rating: "⭐⭐⭐⭐",
    komentar: "Harganya terjangkau, cocok untuk ngemil sore.",
    lokasi: "Karangtalun",
    tanggal: "10 April 2026",
  },
  {
    id: 4,
    nama: "Dewi K.",
    rating: "⭐⭐⭐⭐⭐",
    komentar: "Pelayanan ramah, rotinya fresh dan hangat!",
    lokasi: "Podorejo",
    tanggal: "8 April 2026",
  },
  {
    id: 5,
    nama: "Rizky F.",
    rating: "⭐⭐⭐⭐⭐",
    komentar: "Cokelat keju mixnya juara! Bakal order lagi.",
    lokasi: "Tunggangri",
    tanggal: "5 April 2026",
  },
  {
    id: 6,
    nama: "Maya S.",
    rating: "⭐⭐⭐⭐",
    komentar: "Enak, cepat, dan bersih. Mantap!",
    lokasi: "Bendilwungu",
    tanggal: "3 April 2026",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"medium" | "large">("medium");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalItems, setModalItems] = useState<Array<{nama: string; harga: number}>>([]);

  const openModal = (title: string, items: typeof menuMedium) => {
    setModalTitle(title);
    setModalItems(items);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const previewMedium = menuMedium.slice(0, 8);
  const previewLarge = menuLarge.slice(0, 8);

  // Fungsi untuk membuka Google Maps review
  const openGoogleReview = (cabang: string) => {
    const searchQuery = encodeURIComponent(`Roti Bakar Executive ${cabang} Tulungagung review`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  };

  return (
    <main>
      {/* NAVBAR */}
      <header className="nav">
        <div className="logo">
          <img src="roti.jpeg" alt="logo" />
          <p>ROTI BAKAR EXECUTIVE</p>
        </div>
        <nav className="menu">
          <p>Beranda</p>
          <p>Layanan</p>
          <p>Outlet</p>
          <p>Tentang Kami</p>
        </nav>
      </header>

      <div className="container">
        {/* HERO SECTION */}
        <div className="hero-box">
          <div className="hero-content">
            <div className="hero-left">
              <h1>ROTI BAKAR PREMIUM</h1>
              <h2>FAVORIT</h2>
              <p>Kelezatan Premium, Topping Melimpah, Higienis & Fresh Setiap Hari!</p>
              <div className="hero-contact">
                <p>📞 Pesan Disini: <strong>0823-3460-5032</strong></p>
              </div>
            </div>
            <div className="hero-right">
              <img src="roti bakar.png" alt="Roti Bakar" />
            </div>
          </div>
        </div>

        {/* OUTLET SECTION */}
        <section className="section">
          <h2>Outlet</h2>
          <p className="subtitle">Temukan lokasi outlet terdekat di Tulungagung lengkap dengan alamat detail dan jam operasional kami.</p>
          <div className="lokasi-grid">
            {lokasiData.map((lokasi, idx) => (
              <div key={idx} className="lokasi-card">
                <div className="lokasi-info">
                  <h3>{lokasi.nama}</h3>
                  <p>📍 {lokasi.alamat}</p>
                  <p>🕒 {lokasi.jam}</p>
                  <p>📞 {lokasi.telepon}</p>
                  <button 
                    className="review-btn"
                    onClick={() => openGoogleReview(lokasi.nama.split(" - ")[1])}
                  >
                    ⭐ Lihat Ulasan di Google
                  </button>
                </div>
                <div className="lokasi-map">
                  <iframe
                    src={lokasi.mapUrl}
                    title={`Peta ${lokasi.nama}`}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI - HORIZONTAL SCROLL */}
        <section className="section">
          <h2>Testimoni</h2>
          <p className="subtitle">Lihat ulasan jujur dari pelanggan setia kami tentang kelezatan Roti Bakar Executive.</p>
          <div className="testimoni-wrapper">
            <div className="testimoni-scroll">
              {testimoniData.map((testi) => (
                <div key={testi.id} className="testimoni-card">
                  <div className="testimoni-rating">{testi.rating}</div>
                  <p className="testimoni-komentar">"{testi.komentar}"</p>
                  <div className="testimoni-footer">
                    <h4>- {testi.nama}</h4>
                    <span className="testimoni-lokasi">📍 {testi.lokasi}</span>
                    <span className="testimoni-tanggal">{testi.tanggal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAFTAR HARGA */}
        <section className="harga-section">
          <h2>Daftar Harga</h2>
          <p className="subtitle">Cek daftar harga terbaru untuk setiap varian rasa dan paket spesial dari Roti Bakar Executive.</p>
          
          <div className="tab-toggle">
            <button 
              className={`tab-btn ${activeTab === "medium" ? "active" : ""}`}
              onClick={() => setActiveTab("medium")}
            >
              🥮 Medium (5 Potong)
            </button>
            <button 
              className={`tab-btn ${activeTab === "large" ? "active" : ""}`}
              onClick={() => setActiveTab("large")}
            >
              🔥 Large (10 Potong)
            </button>
          </div>

          {activeTab === "medium" && (
            <div className="harga-table-wrapper">
              <table className="harga-table">
                <thead>
                  <tr><th>Menu</th><th>Harga</th></tr>
                </thead>
                <tbody>
                  {previewMedium.map((item, idx) => (
                    <tr key={idx}><td>{item.nama}</td><td className="harga-column">Rp {item.harga.toLocaleString('id-ID')}</td></tr>
                  ))}
                </tbody>
              </table>
              <button className="lihat-semua-table" onClick={() => openModal("🥮 Menu Medium (5 Potong)", menuMedium)}>
                Lihat Semua Menu ({menuMedium.length} Varian) →
              </button>
            </div>
          )}

          {activeTab === "large" && (
            <div className="harga-table-wrapper">
              <table className="harga-table">
                <thead>
                  <tr><th>Menu</th><th>Harga</th></tr>
                </thead>
                <tbody>
                  {previewLarge.map((item, idx) => (
                    <tr key={idx}><td>{item.nama}</td><td className="harga-column">Rp {item.harga.toLocaleString('id-ID')}</td></tr>
                  ))}
                </tbody>
              </table>
              <button className="lihat-semua-table" onClick={() => openModal("🔥 Menu Large (10 Potong)", menuLarge)}>
                Lihat Semua Menu ({menuLarge.length} Varian) →
              </button>
            </div>
          )}
        </section>

        {/* LAYANAN / MENU */}
        <section className="section">
          <h2>Layanan (Menu)</h2>
          <p className="subtitle">Jelajahi berbagai pilihan topping melimpah, mulai dari varian klasik hingga premium Executive.</p>
          <div className="layanan-grid">
            <div className="layanan-card">
              <div className="layanan-icon">🥮</div>
              <h3>Roti Kukus</h3>
              <p>Medium 5 Potong</p>
              <span>8+ Varian Rasa</span>
            </div>
            <div className="layanan-card">
              <div className="layanan-icon">🔥</div>
              <h3>Roti Bakar</h3>
              <p>Large 10 Potong</p>
              <span>30+ Varian Rasa</span>
            </div>
            <div className="layanan-card">
              <div className="layanan-icon">🎁</div>
              <h3>Paket Hemat</h3>
              <p>Mix & Match</p>
              <span>Harga Spesial</span>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - SEPERTI GAMBAR */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>ROTI BAKAR EXECUTIVE</h3>
            <p>Roti Bakar Terpercaya</p>
          </div>
          
          <div className="footer-section">
            <h4>Outlet</h4>
            <ul>
              <li>Cabang Tunggangri</li>
              <li>Cabang Bendilwungu</li>
              <li>Cabang Podorejo</li>
              <li>Cabang Karangtalun</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Outlet Kami</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontak</h4>
            <ul className="kontak-list">
              <li>📞 0823-3460-5032</li>
              <li>📞 0823-3460-5032</li>
              <li>✉️ RotiBakarExecutive@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Roti Bakar Executive. All rights reserved.</p>
        </div>
      </footer>

      {/* MODAL */}
      <MenuModal 
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalTitle}
        items={modalItems}
      />
    </main>
  );
}