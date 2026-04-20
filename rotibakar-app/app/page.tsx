"use client";

import React, { useState } from "react";

export default function Home() {
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);

  const handlePesan = (menu: string, harga: string, qty: number) => {
    const nomorWA = "6281515902930";
    const pesan = `Halo Roti Bakar Executive! 🍞\n\nSaya ingin memesan:\n✨ *${menu}*\n📦 Jumlah: ${qty}\n💰 Harga: ${harga}\n\nMohon diproses ya, terima kasih!`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#fdfcfb] text-[#442c2e] font-sans">

      {/* Navigasi */}
      <nav className="bg-[#442c2e] p-4 flex justify-center sticky top-0 z-10 shadow-lg">
        <div className="flex gap-3 text-sm font-medium">
          <a
            href="#"
            className="text-stone-200 px-3 py-1 rounded-full hover:bg-[#7f4015] hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-stone-200 px-3 py-1 rounded-full hover:bg-[#7f4015] hover:text-white transition"
          >
            Menu
          </a>
          <a
            href="#keranjang"
            className="text-stone-200 px-3 py-1 rounded-full hover:bg-[#7f4015] hover:text-white transition"
          >
            Keranjang
          </a>
        </div>
      </nav>

      /* Header */
      <header className="py-16 px-6 text-center b
      g-white border-b border-stone-100 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#b45309] font-bold tracking-[0.2em] text-xs uppercase">
            Premium Quality
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-[#78350f] mt-2 mb-4 tracking-tight">
            Roti Bakar Executive
          </h1>
          <p className="text-stone-500 italic text-lg font-light">
            "Sentuhan Mewah dalam Setiap Gigitan"
          </p>
          <div className="h-1 w-24 bg-[#b45309] mx-auto mt-6 rounded-full"></div>
        </div>
      </header>

      {/* MENU */}
      <section id="menu" className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* MENU 1 */}
        <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-stone-100 hover:scale-[1.03] transition">
          <div className="h-56 bg-stone-100 flex items-center justify-center text-stone-400">
            Foto Produk 1
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">Coklat Lumer Premium</h3>
            <p className="text-sm text-stone-500 mb-6">
              Roti gandum dengan coklat Belgia premium.
            </p>

            {/* QTY */}
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => setQty1(qty1 > 1 ? qty1 - 1 : 1)} className="px-3 py-1 bg-stone-100 rounded-full">-</button>
              <span className="font-bold text-sm">{qty1}</span>
              <button onClick={() => setQty1(qty1 + 1)} className="px-3 py-1 bg-stone-100 rounded-full">+</button>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <span className="font-black text-[#b45309]">Rp 15.000</span>
              <button
                onClick={() => handlePesan("Coklat Lumer Premium", "Rp 15.000", qty1)}
                className="bg-[#442c2e] text-white px-6 py-2 rounded-full"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>

        {/* MENU 2 */}
        <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-stone-100 hover:scale-[1.03] transition">
          <div className="h-56 bg-stone-100 flex items-center justify-center text-stone-400">
            Foto Produk 2
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">Keju Spesial Double</h3>
            <p className="text-sm text-stone-500 mb-6">
              Keju melimpah dengan saus spesial.
            </p>

            {/* QTY */}
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => setQty2(qty2 > 1 ? qty2 - 1 : 1)} className="px-3 py-1 bg-stone-100 rounded-full">-</button>
              <span className="font-bold text-sm">{qty2}</span>
              <button onClick={() => setQty2(qty2 + 1)} className="px-3 py-1 bg-stone-100 rounded-full">+</button>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <span className="font-black text-[#b45309]">Rp 18.000</span>
              <button
                onClick={() => handlePesan("Keju Spesial Double", "Rp 18.000", qty2)}
                className="bg-[#442c2e] text-white px-6 py-2 rounded-full"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ✅ KERANJANG (placeholder dulu) */}
      <section id="keranjang" className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Keranjang Pesanan</h2>
        <p className="text-stone-500 text-sm">
          Keranjang masih kosong. (Nanti bisa dikembangkan jadi multi-order)
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t text-center text-xs text-stone-400 uppercase">
        &copy; 2026 Roti Bakar Executive • UMKM Digital Solution
      </footer>
    </main>
  );
}