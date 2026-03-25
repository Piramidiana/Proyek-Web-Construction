import Link from 'next/link';

export default function ProyekLengkapPage() {
  // DAFTAR 1: Instansi & Perusahaan (Hanya Nama)
  const pengalamanInstansi = [
    "PT. HANIL JAYA STEEL",
    "PT. A.J.B.S",
    "PT. P.A.L",
    "PT. PHILLIP MORRIS INDONESIA",
    "PT. HM SAMPOERNA",
    "PT. SAUERESSIG INDONESIA",
    "PT. INKA",
    "PT. PUPUK KUJANG",
    "PT. SEMEN TONASA",
    "PT. KYUN SHIN CIPTA",
    "PT. SC JHONSON Mfg",
    "PT. LAMIPAK PRIMULA",
    "PT. CITRA MARGATAMA SURABAYA",
    "BANK MANDIRI",
    "BANK BRI",
    "RUMAH SAKIT BHAKTI RAHAYU",
    "RSUD WAIKABUBAK",
    "HILLCREST INTERNATIONAL SCHOOL",
    "SANTOS LIVING",
    "GOTA (PABRIK AIR MINUM)",
    "TELCOMCELL",
    "STIKES",
    "DOUBLE SIX (HOTEL & CLUB)",
    "ARDILES",
    "COMMISSION NATIONAL ELECTION BUILD.",
    "DINAS PEKERJAAN UMUM",
    "GEDUNG D.P.R.D BONE",
    "SAODENRAE CONVENTION CENTRE",
    "PERUMAHAN PURI MUTIARA",
    "PERUMAHAN TALANG SARI REGENCY",
    "VILLA TAMAN DAYU"
  ];

  // DAFTAR 2: Arsip Proyek (Format: Perusahaan - Proyek - Tahun/Detail)
  // REVISI: Nama kota sudah dihapus total
  const daftarProyekArchive = [
    "PT. HM SAMPOERNA - Gedung Office (2024)",
    "PT. HM SAMPOERNA - Pabrikasi Railing Barrier (2024)",
    "PT. HM SAMPOERNA - Coating Epoxy (2023)",
    "PT. PHILIPS MORRIS INDONESIA - Coating Lantai Epoxy (2025)",
    "PT. SAUERESSIG INDONESIA - Coating Lantai Epoxy (2025)",
    "PT. INKA - Walkway Gedung M (2025)",
    "PT. P.A.L - Restorasi Kapal Tongkang & Divisi Kapal Perang",
    "PT. HANIL JAYA STEEL - Renovasi Pengadaan & Pemasangan Atap",
    "PT. A.J.B.S - Pemasangan Atap KlipKlok",
    "PT. CITRA MARGATAMA SURABAYA - Peningkatan & Maintenance Jalan Tol",
    "PT. HM SAMPOERNA - Painting Inner Barrier Tol (2019)",
    "BANK BRI - Gedung Pelatihan & Diklat (2008)",
    "BANK MANDIRI - Renovasi Curtain Wall & Canopy",
    "HILLCREST INTERNATIONAL SCHOOL - Gedung Olahraga & Hall Futsal (2010)",
    "PT. KYUN SHIN CIPTA - Pemasangan Atap & Supply Material",
    "PT. PUPUK KUJANG - Pekerjaan Plafon & Partisi Gedung Pertemuan",
    "PT. SEMEN TONASA - Workshop Plant",
    "TELCOMCELL - Ruang Server (2013)",
    "GOTA - Pabrik Air Minum Tahap 1 & 2",
    "ARDILES - Gudang & Pengecoran Lantai (2011)",
    "DOUBLE SIX - Proyek Lantai Kayu & Modifikasi Hotel/Club (2014)",
    "STIKES - Gedung Serbaguna",
    "RS BHAKTI RAHAYU - Pemasangan Bondek & Wiremesh",
    "SANTOS LIVING - Gudang & Pabrik Air Minum",
    "RSUD WAIKABUBAK - Pekerjaan Rangka Atap Galvalum",
    "PERUMAHAN PURI MUTIARA - Installing Rangka Atap (250 Unit)",
    "PERUMAHAN TALANG SARI REGENCY - Pemasangan Rangka Atap Galvalum (200 Unit)"
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="mb-20 border-l-8 border-yellow-500 pl-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Daftar <span className="text-yellow-500">Pengalaman</span>
          </h1>
          <p className="text-gray-400 text-lg italic">
            "Rekam jejak profesional PT. Bintang Perkasa Steel dalam menangani berbagai proyek strategis nasional maupun internasional."
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* KOLOM 1: INSTANSI & PERUSAHAAN */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-8 uppercase tracking-widest flex items-center">
              <span className="w-10 h-1 bg-blue-400 mr-4"></span>
              Instansi & Perusahaan
            </h2>
            <div className="space-y-4">
              {pengalamanInstansi.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:bg-slate-900 transition-colors">
                  <span className="text-yellow-500 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                  <p className="text-gray-300 text-sm md:text-base font-bold tracking-wide uppercase">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* KOLOM 2: ARSIP PROYEK KONSTRUKSI */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-500 mb-8 uppercase tracking-widest flex items-center">
              <span className="w-10 h-1 bg-yellow-500 mr-4"></span>
              Arsip Proyek Konstruksi
            </h2>
            <div className="space-y-3">
              {daftarProyekArchive.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 py-4 border-b border-white/5 group cursor-default">
                  <div className="w-2 h-2 mt-1.5 bg-blue-600 rounded-full group-hover:bg-yellow-500 transition-colors shrink-0"></div>
                  <p className="text-gray-400 text-sm uppercase font-medium group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
              <div className="mt-8 p-6 bg-blue-900/20 rounded-xl border border-blue-700/30">
                <p className="text-blue-100 text-sm italic">
                  * Catatan: Data di atas merupakan ringkasan proyek yang telah berhasil diselesaikan dengan komitmen kualitas tinggi.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* NAVIGASI */}
        <div className="mt-20 flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/portfolio">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg">
              Lihat Galeri Foto (Portfolio) →
            </button>
          </Link>
          <Link href="/">
            <button className="border border-white/20 hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
              ← Kembali ke Beranda
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}