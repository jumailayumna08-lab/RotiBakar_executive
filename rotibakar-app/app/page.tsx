"use client";

import React from "react";

export default function Home() {
  // Fungsi Sakti buat kirim pesanan ke WhatsApp
  const handlePesan = (menu: string, harga: string) => {
    const nomorWA = "6281234567890"; // GANTI dengan nomor WhatsApp kamu/UMKM
    const pesan = `Halo Roti Bakar Executive! 🍞\n\nSaya ingin memesan:\n✨ *${menu}*\n💰 Harga: ${harga}\n\nMohon diproses ya, terima kasih!`;
    
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#fdfcfb] text-[#442c2e] font-sans">
      {/* Header Ala Executive */}
      <header className="py-16 px-6 text-center bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#b45309] font-bold tracking-[0.2em] text-xs uppercase">Premium Quality</span>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-[#78350f] mt-2 mb-4 tracking-tight">
            Roti Bakar Executive
          </h1>
          <p className="text-stone-500 italic text-lg font-light">"Sentuhan Mewah dalam Setiap Gigitan"</p>
          <div className="h-1 w-24 bg-[#b45309] mx-auto mt-6 rounded-full"></div>
        </div>
      </header>

      {/* Grid Katalog Menu */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Card Menu 1 */}
        <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/40 border border-stone-100 hover:scale-[1.03] transition-all duration-300">
          <div className="h-56 bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-200 transition-colors">
            {/* Nanti taruh foto Roti Coklat kamu di folder public */}
            <span className="text-sm font-medium uppercase tracking-widest">Foto Produk 1</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#442c2e] mb-2">Coklat Lumer Premium</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Roti gandum pilihan dipanggang sempurna dengan lelehan coklat Belgia melimpah di dalamnya.
            </p>
            <div className="flex justify-between items-center border-t border-stone-50 pt-6">
              <span className="text-xl font-black text-[#b45309]">Rp 15.000</span>
              <button 
                onClick={() => handlePesan("Coklat Lumer Premium", "Rp 15.000")}
                className="bg-[#442c2e] text-white px-8 py-3 rounded-full font-bold hover:bg-[#78350f] transition-all shadow-lg shadow-[#442c2e]/30 active:scale-95"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Card Menu 2 */}
        <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/40 border border-stone-100 hover:scale-[1.03] transition-all duration-300">
          <div className="h-56 bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-200 transition-colors">
             <span className="text-sm font-medium uppercase tracking-widest">Foto Produk 2</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#442c2e] mb-2">Keju Spesial Double</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Perpaduan keju cheddar parut dan saus keju rahasia yang memberikan sensasi gurih tiada tara.
            </p>
            <div className="flex justify-between items-center border-t border-stone-50 pt-6">
              <span className="text-xl font-black text-[#b45309]">Rp 18.000</span>
              <button 
                onClick={() => handlePesan("Keju Spesial Double", "Rp 18.000")}
                className="bg-[#442c2e] text-white px-8 py-3 rounded-full font-bold hover:bg-[#78350f] transition-all shadow-lg shadow-[#442c2e]/30 active:scale-95"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Sederhana */}
      <footer className="py-12 border-t border-stone-100 text-center text-stone-400 text-xs tracking-widest uppercase">
        &copy; 2026 Roti Bakar Executive &bull; UMKM Digital Solution
      </footer>
    </main>
  );
}