import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PT. Bintang Perkasa Steel | Steel Construction",
  description: "Kualitas dan Kepuasan Konsumen Menjadi Scala Priority Kami",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-950">
        {/* Navigasi akan muncul di atas semua halaman */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}