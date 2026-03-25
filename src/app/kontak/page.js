import Link from 'next/link';

export default function KontakPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            Hubungi Kami
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            KONTAK <span className="text-yellow-500">RESMI</span>
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto italic text-sm md:text-base leading-relaxed">
            "Kualitas Pekerjaan dan Kepuasan Konsumen adalah yang kami utamakan dan Koordinasi serta Pengawasan yang ketat dan termonitoring juga menjadi kunci utama kami untuk menjaga kepercayaan konsumen."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* KARTU 1: AREA LAYANAN (MENGGANTIKAN ALAMAT PRIVASI) */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-blue-400">Area Layanan</h3>
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
                PT. Bintang Perkasa Steel melayani pengerjaan konstruksi baja dan kontraktor umum untuk seluruh pelosok <strong>Indonesia</strong> dan <strong>Luar negeri</strong>.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs italic text-gray-500">
                  Untuk koordinasi proyek dan informasi lokasi operasional lebih lanjut, silakan hubungi tim kami melalui WhatsApp atau Email.
                </p>
              </div>
            </div>
          </div>

          {/* KARTU 2: KONTAK PERSON & WHATSAPP */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl hover:border-green-500/50 transition-all group">
            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-green-400">Saluran Komunikasi</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Jaringan dan pemasaran kami semakin meluas didukung oleh mutu produk dan pelayanan yang berkualitas.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/6281231189475" 
                className="block w-full bg-green-600 hover:bg-green-500 text-white text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-lg"
              >
                Chat WhatsApp: Admin
              </a>
              <p className="text-center text-gray-500 font-mono text-xs">081.2311.89.475</p>
            </div>
          </div>

          {/* KARTU 3: EMAIL & KOMITMEN */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl hover:border-yellow-500/50 transition-all group">
            <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-black">✉️</span>
            </div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-yellow-500">Email & Komitmen</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-blue-400 font-bold underline text-sm break-all">rian.metrosinar@gmail.com</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-gray-400 text-xs italic leading-relaxed">
                  "Kualitas dan Kepuasan Konsumen Menjadi Scala Priority Kami Dalam Melayani Konsumen."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* TOMBOL KEMBALI */}
        <div className="mt-20 text-center">
          <Link href="/">
            <button className="text-gray-500 hover:text-white font-bold uppercase tracking-[0.3em] text-[10px] transition-all py-4 px-10 border border-white/10 rounded-full hover:bg-white/5">
              ← Kembali ke Beranda
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}