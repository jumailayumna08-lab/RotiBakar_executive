import "./Landingpage.css";

export default function Home() {
  return (
    <main className="container">

      {/* NAVBAR */}
      <header className="nav">
        <div className="logo">
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

      {/* HERO BARU */}
      <section className="hero-box">
        <div className="hero-content">

          <div className="hero-left">
            <h1>ROTI BAKAR PREMIUM<br />FAVORIT</h1>

            <p className="hero-desc">
              "Kelezatan Premium, Topping Melimpah,
              Higienis & Fresh Setiap Hari!"
            </p>

            <div className="hero-order">
              <p>Pesan Disini:</p>
              <div className="wa">
                <span>📱</span>
                <span>0823-3460-5032</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img src="/roti bakar.png" alt="roti" />
          </div>

        </div>
      </section>

      {/* FITUR */}
      <section className="fitur">
        <div className="fitur-grid">

          <div className="fitur-card">
            <div className="icon">🏪</div>
            <div>
              <h4>Outlet</h4>
              <p>Temukan lokasi outlet terdekat di Tulungagung lengkap dengan alamat dan jam operasional.</p>
            </div>
          </div>

          <div className="fitur-card">
            <div className="icon">💬</div>
            <div>
              <h4>Testimoni</h4>
              <p>Lihat ulasan pelanggan tentang kelezatan Roti Bakar Executive.</p>
            </div>
          </div>

          <div className="fitur-card">
            <div className="icon">📖</div>
            <div>
              <h4>Daftar Harga</h4>
              <p>Cek harga terbaru untuk semua varian menu.</p>
            </div>
          </div>

          <div className="fitur-card">
            <div className="icon">🍞</div>
            <div>
              <h4>Layanan (Menu)</h4>
              <p>Pilihan topping lengkap dari klasik hingga premium.</p>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUK */}
      <section className="section">
        <h2>Menu Favorit</h2>

        <div className="produk-grid">
          <div className="card">
            <img src="/assets/roti-coklat.png" alt="roti coklat" />
            <p>Roti Coklat</p>
          </div>

          <div className="card">
            <img src="/assets/roti-keju.png" alt="roti keju" />
            <p>Roti Keju</p>
          </div>

          <div className="card">
            <img src="/assets/roti-strawberry.png" alt="roti strawberry" />
            <p>Roti Strawberry</p>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="section" id="lokasi">
        <h2>Lokasi Kami</h2>

        <div className="lokasi-grid">

          <div className="lokasi-card">
            <div className="lokasi-info">
              <h3>Roti Bakar Executive</h3>
              <p>Tunggangri, Kalidawir</p>
              <p>16:00 - 21:30</p>
              <p>0823-3460-5032</p>
            </div>
            <div className="lokasi-map">
              <iframe src="https://www.google.com/maps?q=Roti+Bakar+Executive+Tunggangri+Tulungagung&output=embed"></iframe>
            </div>
          </div>

          <div className="lokasi-card">
            <div className="lokasi-info">
              <h3>Roti Bakar Executive</h3>
              <p>Bendilwungu, Sumbergempol</p>
              <p>16:00 - 21:30</p>
              <p>0823-3460-5032</p>
            </div>
            <div className="lokasi-map">
              <iframe src="https://www.google.com/maps?q=Roti+Bakar+Executive+Bendilwungu+Tulungagung&output=embed"></iframe>
            </div>
          </div>

          <div className="lokasi-card">
            <div className="lokasi-info">
              <h3>Roti Bakar Executive</h3>
              <p>Podorejo, Ngantru</p>
              <p>16:00 - 21:30</p>
              <p>0823-3460-5032</p>
            </div>
            <div className="lokasi-map">
              <iframe src="https://www.google.com/maps?q=Roti+Bakar+Executive+Podorejo+Tulungagung&output=embed"></iframe>
            </div>
          </div>

          <div className="lokasi-card">
            <div className="lokasi-info">
              <h3>Roti Bakar Executive</h3>
              <p>Karangtalun, Kalidawir</p>
              <p>16:00 - 21:30</p>
              <p>0823-3460-5032</p>
            </div>
            <div className="lokasi-map">
              <iframe src="https://www.google.com/maps?q=Roti+Bakar+Executive+Karangtalun+Tulungagung&output=embed"></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* KENAPA */}
      <section className="section kenapa">
        <h2>Mengapa Harus Roti Bakar Executive?</h2>

        <div className="kenapa-grid">
          <div className="kenapa-card">
            <h4>⭐ Bahan Premium</h4>
            <p>Bahan berkualitas dengan topping melimpah.</p>
          </div>

          <div className="kenapa-card">
            <h4>🔥 Fresh</h4>
            <p>Dibuat langsung saat dipesan.</p>
          </div>

          <div className="kenapa-card">
            <h4>🏆 Kualitas</h4>
            <p>Proses higienis dan terjaga.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="section testimoni">
        <h2>Apa Kata Pelanggan</h2>

        <div className="testi-grid">
          <div className="testi-card">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Enak banget!"</p>
          </div>

          <div className="testi-card">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Langganan terus"</p>
          </div>

          <div className="testi-card">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Worth it"</p>
          </div>
        </div>

        <button className="btn">Pesan Sekarang</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">

          <div>
            <h3>ROTI BAKAR EXECUTIVE</h3>
            <p>Roti Bakar Terpercaya</p>
          </div>

          <div>
            <h4>Produk</h4>
            <p>Roti Coklat</p>
            <p>Roti Keju</p>
            <p>Roti Strawberry</p>
          </div>

          <div>
            <h4>Kontak</h4>
            <p>Email: RotiBakarExecutive@gmail.com</p>
            <p>WhatsApp: 0823-3460-5032</p>
          </div>

        </div>
      </footer>

    </main>
  );
}