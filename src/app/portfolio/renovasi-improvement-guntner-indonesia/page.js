import Link from "next/link";
import ProjectGallery from "./ProjectGallery";

export const metadata = {
  title: "Renovasi & Improvement PT. Güntner Indonesia | Bintang Perkasa Steel",
};

export default function GuntnerProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:text-yellow-500"
        >
          ← Kembali ke Portofolio
        </Link>

        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            Dokumentasi Proyek
          </p>
          <h1 className="max-w-5xl text-3xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            Renovasi &amp; Improvement PT. Güntner Indonesia
          </h1>
        </header>

        <ProjectGallery />
      </div>
    </main>
  );
}
