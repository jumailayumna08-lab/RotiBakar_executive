import "./Landingpage.css";

export default function Home() {
  return (
    <main className="container">

      {/* NAVBAR */}
      <header className="nav">
        <div className="logo">
          <img src="/assets/3894.png" alt="logo" />
          <p>ROTI BAKAR EXECUTIVE</p>
        </div>

        <nav className="menu">
          <p>Beranda</p>
          <p>Layanan</p>
          <p>FAQ</p>
          <p>Tentang Kami</p>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>ROTI BAKAR PREMIUM</h1>
          <h2>FAVORIT</h2>
          <p>
            Kelezatan Premium, Topping Melimpah,
            Higienis & Fresh Setiap Hari!
          </p>
        </div>

        <img
          src="/assets/38123.png"
          alt="roti bakar"
          className="hero-img"
        />
      </section>

      {/* PRODUK */}
      <section className="produk">
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

      {/* LOKASI KAMI (FIX GRID) */}
      <section className="lokasi-section">
        <h2>Lokasi Kami</h2>
        
        <div className="lokasi-grid">
    
      {/* KIRI - LIST CABANG */}
      <div className="lokasi-list">
        
        <div className="lokasi-card">
          <h4>Kediri Bakar Executive</h4>
          <p>📍 Jl. Contoh Alamat No.1</p>
          <p>🕒 16.00–21.30</p>
          <p>📞 0823-3460-5032</p>
        </div>

        <div className="lokasi-card">
          <h4>Paris Bakar Executive</h4>
          <p>📍 Jl. Contoh Alamat No.2</p>
          <p>🕒 16.00–21.30</p>
          <p>📞 0823-3460-5032</p>
        </div>

        <div className="lokasi-card">
          <h4>Roti Bakar Executive</h4>
          <p>📍 Jl. Contoh Alamat No.3</p>
          <p>🕒 16.00–21.30</p>
          <p>📞 0823-3460-5032</p>
        </div>

        <div className="lokasi-card">
          <h4>Roti Bakar Executive 4</h4>
          <p>📍 Jl. Contoh Alamat No.4</p>
          <p>🕒 16.00–21.30</p>
          <p>📞 0823-3460-5032</p>
        </div>

      </div>

      {/* KANAN - MAPS */}
      <div className="maps-list">
        <iframe src="https://www.google.com/maps?q=-8.212,111.938&output=embed"></iframe>
        <iframe src="https://www.google.com/maps?q=-8.210,111.940&output=embed"></iframe>
        <iframe src="https://www.google.com/maps?q=-8.208,111.942&output=embed"></iframe>
        <iframe src="https://www.google.com/maps?q=-8.206,111.944&output=embed"></iframe>
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