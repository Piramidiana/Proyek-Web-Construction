import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // 1. LAYANAN (Hanya 6 poin utama sesuai revisi Ayah)
  const services = [
    "Konstruksi Rangka Baja Berat Gudang atau Pabrik",
    "Maintenance Industrial Building & Factory",
    "Rangka Atap Baja Ringan Galvalum",
    "Plafond, Partisi, Alumunium Composite Panel",
    "Renovasi Bongkar Pasang Atap Gudang",
    "Coating Epoxy Lantai Pabrik dan Gudang"
  ];

  // 2. DAFTAR KLIEN BESAR (Dengan Nama Kota)
  const mainClients = [
    { name: "PT. HM SAMPOERNA", city: "Sukorejo / Karawang" },
    { name: "PT. PHILIPS MORRIS INDONESIA", city: "Karawang" },
    { name: "PT. INKA", city: "Banyuwangi" },
    { name: "PT. HANIL JAYA STEEL", city: "Surabaya" },
    { name: "PT. P.A.L", city: "Surabaya" },
    { name: "PT. SAUERESSIG INDONESIA", city: "Pasuruan" },
    { name: "BANK MANDIRI", city: "Kediri" },
    { name: "PT. SEMEN TONASA", city: "Sulawesi" },
    { name: "ARDILES", city: "Surabaya" },
    { name: "C.N.E BUILDING", city: "Timor Leste" }
  ];

  return (
    <main className="bg-slate-950 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/70 z-10"></div>
          
          {/* REVISI: Zoom 1.7x di HP agar teks Hillcrest benar-benar hilang */}
          <Image 
            src="/images/hero-bps.jpg" 
            alt="Proyek PT BPS"
            fill
            className="object-cover scale-[1.7] md:scale-110 origin-top"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 w-full max-w-5xl">
          <h2 className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-4 text-[10px] md:text-sm">
            Steel Construction & General Contractor
          </h2>
          
          {/* REVISI: Perbaikan Centering & Line Break di HP agar lebih simetris */}
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[1.1] mx-auto max-w-4xl">
            PT. BINTANG <br className="md:hidden" />
            <span className="text-yellow-500">PERKASA</span> STEEL
          </h1>
          
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-gray-50 italic text-[11px] md:text-base leading-relaxed px-2">
              "Kualitas dan Kepuasan Konsumen Menjadi Scala Priority Kami Dalam Melayani Konsumen Dan Komitmen Kami Dalam Menjalankan Pekerjaan Menjadikan Kami Yang Terbaik dari yang terbaik Serta Kualitas, Ketelitian, dan Perencanaan yang Akurat menjadi Kunci Utama Kepercayaan Konsumen Selama Ini"
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/proyek" className="w-[85%] md:w-auto">
              <button className="bg-yellow-500 text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-yellow-400 transition-all w-full shadow-2xl active:scale-95">
                Lihat Proyek Kami
              </button>
            </Link>
            <Link href="/kontak" className="w-[85%] md:w-auto">
              <button className="border-2 border-white text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full active:scale-95">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LINGKUP BIDANG LAYANAN */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold uppercase tracking-widest mb-2 text-xs">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Lingkup Bidang Yang Ditangani</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-md border-l-4 border-blue-900 flex items-start space-x-4 hover:shadow-xl transition-shadow">
                <span className="text-yellow-500 font-black text-xl">{(index + 1).toString().padStart(2, '0')}</span>
                <p className="font-bold text-slate-800 uppercase text-sm leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PENGALAMAN KERJA */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-yellow-500 font-bold uppercase tracking-widest mb-4 text-xs">Pengalaman Kerja</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight uppercase text-white">
                Dijalankan Oleh <span className="text-yellow-500">Tenaga Ahli</span> Profesional
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                Jaringan dan pemasaran kami meluas secara profesional dengan mutu produk berkualitas tinggi di seluruh pelosok <strong>Indonesia hingga Luar Negeri</strong>.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 md:p-10 rounded-3xl border border-blue-900/30 shadow-2xl">
              <h4 className="text-blue-400 font-bold mb-6 uppercase tracking-widest text-center text-xs">Instansi & Perusahaan</h4>
              <ul className="space-y-4 mb-8">
                {mainClients.map((client, index) => (
                  <li key={index} className="flex justify-between border-b border-white/5 pb-2 uppercase font-bold text-[10px] md:text-sm">
                    <span className="truncate mr-2">{client.name}</span>
                    <span className="text-gray-500 italic text-[9px] whitespace-nowrap">{client.city}</span>
                  </li>
                ))}
              </ul>
              
              {/* REVISI: Memastikan teks link 1 baris lurus dan berada di tengah */}
              <Link href="/proyek" className="flex flex-col items-center group">
                <span className="text-gray-400 group-hover:text-yellow-500 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border-b border-yellow-500/30 pb-1 whitespace-nowrap">
                  Lihat Daftar Lengkap Pengalaman Kerja
                </span>
                <span className="text-yellow-500 mt-2 text-sm">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-black text-white py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="font-black text-2xl uppercase tracking-tighter">
              BINTANG<span className="text-yellow-500"> PERKASA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Steel Construction & General Contractor terpercaya sejak 2003. Berkomitmen menjadi yang terbaik dari yang terbaik.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-yellow-500">Area Layanan</h4>
            <p className="text-gray-400 text-sm">Melayani seluruh pelosok <strong>Indonesia</strong> hingga <strong>Luar Negeri</strong>.</p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-yellow-500">Hubungi Kami</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Email: rian.metrosinar@gmail.com</p>
              <a 
                href="https://wa.me/6281231189475" 
                className="bg-green-600 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all inline-block shadow-lg text-[10px] hover:bg-green-500"
              >
                WhatsApp: Rian 
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-gray-700 text-[10px] uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} PT. BINTANG PERKASA STEEL. Website by PIRAMIDIANA.
        </div>
      </footer>
    </main>
  );
}