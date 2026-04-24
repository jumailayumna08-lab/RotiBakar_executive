import Image from "next/image";

const lokasiData = [
  {
    nama: "Roti Bakar Executif - Tunggangri",
    alamat: "Tunggangri, Kec. Kalidawir, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Tunggang,+Kalidawir,+Tulungagung&output=embed",
  },
  {
    nama: "Roti Bakar Executif - Bendilwungu",
    alamat: "Bendilwungu, Kec. Sumbergempol, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Bendilwungu,+Sumbergempol,+Tulungagung&output=embed",
  },
  {
    nama: "Roti Bakar Executif - Karangtalun",
    alamat: "Kadangtalun, Kec. Kalidawir, Kab. Tulungagung",
    jam: "16:00 - 22:00",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Karangtalun,+Kalidawir,+Tulungagung&output=embed",
  },
  {
    nama: "Roti Bakar Executif - Karangtalun",
    alamat: "Podorejo, Kec.Sumbergempol, Kab.Tulunagagung",
    jam: "16:00 - 21:30",
    telepon: "0823 - 3460 - 5032",
    mapUrl: "https://www.google.com/maps?q=Podorejo,+Sumbergempol,+Tulungagung&output=embed",
  },
];

export default function Home() {
  return (
    <main className="container">
      {/* NAVBAR */}
      <header className="nav">
        <div className="logo">
          {/* placeholder logo - ganti dengan file gambar Anda */}
          <img src="roti.jpeg" alt="logo" />
          <p>ROTI BAKAR EXECUTIVE</p>
        </div>
        <nav className="menu">
          <p>Beranda</p>
          <p>Layanan</p>
          <p>FAQ</p>
          <p>Tentang Kami</p>
        </nav>
      </header>

      {/* HERO SECTION */}
      <div className="hero-box">
        <div className="hero-content">
          <div className="hero-left">
            <h1>ROTI BAKAR PREMIUM</h1>
            <h2>FAVORIT</h2>
            <p>Kelezatan Premium, Topping Melimpah, Higienis & Fresh Setiap Hari!</p>
             <h2>Pesan Disini</h2>
            <p>Kelezatan Premium, Topping Melimpah, Higienis & Fresh Setiap Hari!</p>

          </div>
          <div className="hero-right">
            <img src="roti bakar.png" alt="Roti Bakar" />
          </div>
        </div>
      </div>

      {/* PRODUK FAVORIT */}
      <section className="section">
        <h2>ROTI BAKAR EXECUTIVE</h2>
        <div className="produk-grid">
          <div className="card">
            <img src="https://placehold.co/200x150?text=Roti+Coklat" alt="Roti Kukus" />
            <p>Roti Kukus</p>
          </div>
          <div className="card">
            <img src="https://placehold.co/200x150?text=Roti+Keju" alt="Roti bakar" />
            <p>Roti Bakar</p>
          </div>
        </div>
      </section>

      {/* LOKASI KAMI */}
      <section className="section">
        <h2>Lokasi Kami</h2>
        <div className="lokasi-grid">
          {lokasiData.map((lokasi, idx) => (
            <div key={idx} className="lokasi-card">
              <div className="lokasi-info">
                <h3>{lokasi.nama}</h3>
                <p>📍 {lokasi.alamat}</p>
                <p>🕒 {lokasi.jam}</p>
                <p>📞 {lokasi.telepon}</p>
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

      {/* MENGAPA HARUS KAMI */}
      <section className="section">
        <h2>Mengapa Harus Roti Bakar Executive?</h2>
        <div className="kenapa-grid">
          <div className="kenapa-card">
            <h4>⭐ Bahan Premium</h4>
            <p>Kami menggunakan roti berkualitas tinggi dan topping melimpah untuk rasa maksimal.</p>
          </div>
          <div className="kenapa-card">
            <h4>🔥 Dibuat Fresh</h4>
            <p>Setiap pesanan dibuat langsung saat dipesan, selalu hangat dan nikmat.</p>
          </div>
          <div className="kenapa-card">
            <h4>🏆 Kualitas Terjaga</h4>
            <p>Proses higienis dan standar kualitas tinggi untuk kepuasan pelanggan.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>ROTI BAKAR EXECUTIVE</h3>
        <p>Roti Bakar Terpercaya</p>
        <p>Email: RotiBakarExecutive@gmail.com</p>
      </footer>
    </main>
  );
}