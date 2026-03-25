import Image from 'next/image';
import Link from 'next/link';

export default function TentangKami() {
  // REVISI: Lingkup bidang yang sudah difilter (Hanya menyisakan 6 poin utama)
  const services = [
    "Konstruksi Rangka Baja Berat Gudang atau Pabrik",
    "Maintenance Industrial Building & Factory",
    "Rangka Atap Baja Ringan Galvalum",
    "Plafond, Partisi, Alumunium Composite Panel",
    "Renovasi Bongkar Pasang Atap Gudang",
    "Coating Epoxy Lantai Pabrik dan Gudang"
  ];

  // REVISI: Daftar Instansi & Perusahaan Lengkap (Gabungan dari Arsip Proyek)
  const clients = [
    "PT. HANIL JAYA STEEL",
    "PT. P.A.L",
    "PT. PHILLIP MORRIS INDONESIA",
    "PT. HM SAMPOERNA",
    "PT. SAUERESSIG INDONESIA",
    "PT. INKA",
    "BANK MANDIRI",
    "PT. SEMEN TONASA",
    "PT. PUPUK KUJANG CIKAMPEK",
    "PT. CITRA MARGATAMA SURABAYA",
    "HILLCREST INTERNATIONAL SCHOOL",
    "ARDILES",
    "TELCOMCELL",
    "GOTA",
    "STIKES",
    "DOUBLE SIX",
    "RS BHAKTI RAHAYU",
    "RSUD WAIKABUBAK",
    "C.N.E BUILDING (TIMOR LESTE)"
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
<section className="relative h-[55vh] flex items-center justify-center border-b border-blue-900/30">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-slate-950/80 z-10"></div>
    <Image src="/images/hero-bps.jpg" alt="Background BPS" fill className="object-cover opacity-40" priority />
  </div>
  <div className="relative z-20 text-center px-6">
    {/* TULISAN PROFIL PERUSAHAAN DIKEMBALIKAN */}
    <h2 className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
      Profil Perusahaan
    </h2>
    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-white">
      PT. BINTANG <span className="text-yellow-500">PERKASA</span> STEEL
    </h1>
  </div>
</section>

      {/* 2. SEJARAH & KOMITMEN */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase border-l-8 border-yellow-500 pl-6 text-yellow-500">Dedikasi Sejak 2003</h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                PT. BINTANG PERKASA STEEL berdiri sejak tanggal 15 Januari 2003 sebagai perusahaan 
                Suplier material besi & baja. Seiring pengalaman, kami berkembang menjadi 
                perusahaan <strong>Steel Construction & General Contractor</strong> yang terpercaya 
                untuk berbagai proyek skala besar di seluruh Indonesia hingga mancanegara.
              </p>
              <p className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                Jaringan dan pemasaran kami meluas karena didukung oleh peningkatan mutu produk 
                dan pelayanan yang berkualitas. Kami senantiasa menjalin hubungan baik dengan 
                konsultan, kontraktor, dan pemilik bangunan untuk menjaga kepercayaan konsumen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-widest text-sm">Motto Kami</h3>
              <p className="text-gray-300 italic">
                "Kualitas dan Kepuasan Konsumen Menjadi Scala Priority Kami dalam melayani konsumen."
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-2xl border border-blue-600/30 italic text-blue-100">
              "Kualitas, Ketelitian, dan Perencanaan yang Akurat menjadi Kunci Utama Kepercayaan Konsumen Selama Ini."
            </div>
          </div>
        </div>
      </section>

      {/* 3. LINGKUP BIDANG (GRID) */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter text-white">
            Lingkup Bidang <span className="text-yellow-500">Layanan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-slate-950 rounded-lg border border-white/5 hover:border-yellow-500/50 transition-all">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-300 uppercase">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLIENTS & EXPERIENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter text-white">
          Dipercaya Oleh <span className="text-yellow-500">Instansi & Perusahaan</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="text-center p-6 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center hover:bg-yellow-500 transition-all group">
              <p className="text-[10px] md:text-xs font-bold text-gray-300 group-hover:text-black uppercase tracking-widest">{client}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KONTAK & ALAMAT */}
      <footer className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-yellow-500">Informasi Kontak</h2>
            <div className="space-y-4 text-gray-300 text-sm">
              <p><strong>Area Operasional:</strong> Sidoarjo & Pasuruan, Jawa Timur</p>
              <p><strong>Email:</strong> rian.metrosinar@gmail.com</p>
              <p><strong>WhatsApp:</strong> Rian (081231189475)</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/kontak" className="w-full">
              <button className="bg-green-600 text-white px-12 py-5 font-black uppercase tracking-widest rounded-full hover:bg-green-500 transition-all shadow-2xl w-full">
                Hubungi Kami Sekarang
              </button>
            </Link>
            <Link href="/">
              <button className="text-gray-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-all">
                ← Kembali ke Beranda
              </button>
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}