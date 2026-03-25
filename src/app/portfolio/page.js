"use client"; // Wajib ditambahkan agar tombol bisa diklik

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  // State untuk menyimpan proyek yang sedang dipilih/diklik
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Double Six Hotel & Club", location: "Bali", year: "2014", fullDesc: "Project lantai kayu & modifikasi hotel dan club DOUBLE SIX Legian Denpasar Bali Tahun 2014" },
    { id: 2, title: "Gudang Ardiles", location: "Surabaya", year: "2011-2012", fullDesc: "Gudang Ardiles, JL. Tanjungsari Surabaya, Pengadaan & Pekerjaan Pengecoran Lantai Vol=5.500 M2 (2011-2012)" },
    { id: 3, title: "C.N.E Building (3rd Floor)", location: "Timor Leste", year: "2013", fullDesc: "The Commisionr National Election (C.N.E) Building 3 RD Floor Rua Colmera Dili Timor Leste, Steel Structure Roof & Stair Januari - Oktober 2013" },
    { id: 4, title: "Apartemen & Foodcourt", location: "Papua Barat", year: "2015", fullDesc: "Project Pembangunan Apartemen & Foodcourt di Kabupaten Kapartutin Kota Fak Fak Papua barat Tahun 2015" },
    { id: 5, title: "Server Room TELCOMCELL", location: "Timor Leste", year: "2013", fullDesc: "Pembangunan bangunan ruang server provider TELCOMCELL Santos living Hudiliran Dili Timor Lester tahun 2013" },
    { id: 6, title: "Pabrik Air Minum GOTA", location: "Timor Leste", year: "2012", fullDesc: "Project pemabngunan Pabrik air minum Gota Santos warehouse Hudilaran Dili Timoor Lester tahun 2012" },
    { id: 7, title: "PT. Sauerensig Indonesia", location: "Pasuruan", year: "2025", fullDesc: "Project Coating Lantai Epoxy PT. Sauerensig Indonesia di PIER Pasuruan tahun 2025" },
    { id: 8, title: "PT. Philips Morris Indonesia", location: "Karawang", year: "2025", fullDesc: "Project Pekerjaan Coating Lantai Epoxy di PT. Philips Morris Indonesia kawasan KIIC Karawang Jawa Barat tahun 2025" },
    { id: 9, title: "PT.Hm Sampoerna Sukoredjo", location: "Pasuruan", year: "2024", fullDesc: "Pabrikasi pembuatan realing barier PT.Hm Sampoerna Sukoredjo Pandaan Pasuruan tahun 2024" },
    { id: 10, title: "PT. INKA Persero", location: "Banyuwangi", year: "2025", fullDesc: "Pembangunan Walkway gedung M PT. INKA Persero Bulusan Kalipuro Banyuwangi tahun 2025" },
    { id: 11, title: "Gedung Serbaguna 3 Lantai", location: "Sidoarjo", year: "2022", fullDesc: "Project pembangunan gedung Serbaguna 3 lantai di Sidoarjo tahun 2022" },
    { id: 12, title: "Tol Waru Juanda A & B", location: "Sidoarjo", year: "2019", fullDesc: "Pekerjaan Painting Inner Barrier Ruas Jalan tol waru jaunda A & B PT. CMS Waru Sidoarjo tahun 2019" },
    { id: 13, title: "Gudang Tembakau", location: "Lumajang", year: "2010", fullDesc: "Pembangunan gudang tembakau lumajang Jawa Timur tahun 2010" },
    { id: 14, title: "Restorasi Kapal Tongkang", location: "Surabaya", year: "2018", fullDesc: "Project Pabrikasi dan Intall restorasi Kapal tongkang PT. PAL Surabaya tahun 2018" },
    { id: 15, title: "Container Office Tol Juanda", location: "Surabaya", year: "2019", fullDesc: "Project Container Office Ruas Jalan tol wWaru Juanda PT. Cipta Marga Tama Surabaya di Sukomanunggal Surabaya tahun 2019" },
    { id: 16, title: "PT. HM Sampoerna Karawang", location: "Karawang", year: "2023", fullDesc: "Pekerjaan Coating epoxy Lantai PT. HM Sampoerna Karawang Plant Tahun 2023" },
    { id: 17, title: "Gedung Serbaguna STIKES", location: "Sulawesi", year: "-", fullDesc: "Gedung Serbaguna STIKES Bone Sulawesi Selatan" },
    { id: 18, title: "BRI KanCab Pangkep", location: "Sulawesi", year: "-", fullDesc: "Rangka Aatp Galvalum & Insulation Gedung BRI KanCab Pangkep Sulawesi Selatan" },
    { id: 19, title: "Tol Simpang Susun Waru", location: "Surabaya", year: "2018", fullDesc: "Pengecatan Inner Barrier Lokasi ruang jalan tol simpang susun waru-bandara jaunda surabaya, Owner PT. Citra Margatama Surabaya desember 2018" },
    { id: 20, title: "Kandang Ayam Maulafa", location: "Kupang", year: "-", fullDesc: "Pembuatan Kandang Ayam di Desa Maulafa Kupang NTT" },
    { id: 21, title: "Rumah Kos 20 Kamar", location: "Gresik", year: "-", fullDesc: "Pembangunan rumah kos 2 lantai, 20 kamar di Krikilan, Gresik, Jawa Timur" },
    { id: 22, title: "Pabrik GOTA Tahap 2", location: "Timor Leste", year: "2013", fullDesc: "Pembangunan Pabrik Minum air GOTA tahap 2 Kawasan Santos Living bairopette Dili Timor Leste tahun 2013" },
    { id: 23, title: "Gedung CNE Top Roofing", location: "Timor Leste", year: "2014", fullDesc: "Pabriaksi Top Roofing pembangunan gedung CNE building Rua Colmera Dili Timor Lester tahun 2014" },
    { id: 24, title: "Gedung Pelatihan BRI", location: "Surabaya", year: "2008", fullDesc: "PAbrikasi & Erection Ligh Steel Frame Zincalume gedung Pelatihan BRI Jl. Siwalankerto Surabaya tahun 2008" },
    { id: 25, title: "Kantor Desa Bogo", location: "Kediri", year: "2017", fullDesc: "Pembangunan Gedung serbaguna Kantos desa Bogo Kediri jawa Timur tahun 2017" },
    { id: 26, title: "Hillcrest International School", location: "Papua", year: "2010", fullDesc: "Pembangunan Gedung olahraga Hillcrest Internasional School di Sentanu Jayapura Papua Bara tahun 2010" },
    { id: 27, title: "PT.HM.Sampoerna Blitar", location: "Blitar", year: "2024", fullDesc: "Pembangunan Gedung Office PT.HM.Sampoerna,Tbk di Blitar Jawa Timur tahun 2024" }
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Project <span className="text-yellow-500">Portfolio</span>
          </h1>
          <p className="text-gray-400 italic">Klik pada gambar untuk melihat detail lengkap proyek.</p>
        </header>

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div 
              key={p.id} 
              onClick={() => setSelectedProject(p)} // Memilih proyek saat diklik
              className="cursor-pointer group bg-slate-900 border border-white/5 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <Image 
                  src={`/images/${p.id}.jpg`} // Pastikan file 1.jpg sampai 27.jpg sudah ada
                  alt={p.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 font-bold text-[10px] rounded">
                  {p.year}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm md:text-base group-hover:text-yellow-500 transition-colors uppercase">
                  {p.title}
                </h3>
                <p className="text-blue-400 text-[10px] font-bold uppercase mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL / JENDELA POP-UP */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Background Gelap */}
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)} // Klik di mana saja untuk tutup
            ></div>

            {/* Konten Modal */}
            <div className="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-blue-900/30 shadow-2xl flex flex-col md:flex-row">
              {/* Sisi Gambar */}
              <div className="relative w-full md:w-3/5 h-[300px] md:h-auto min-h-[400px]">
                <Image 
                  src={`/images/${selectedProject.id}.jpg`}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Sisi Informasi */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ✕
                </button>
                <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Detail Proyek</h2>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">
                  {selectedProject.title}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      {selectedProject.fullDesc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                      Lokasi: <span className="text-white">{selectedProject.location}</span>
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">
                      Tahun: <span className="text-white">{selectedProject.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <Link href="/">
            <button className="border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">
              ← Kembali ke Beranda
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}