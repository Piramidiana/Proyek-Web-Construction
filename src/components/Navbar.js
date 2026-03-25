"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Daftar Proyek', path: '/proyek' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="group z-50">
          <div className="font-black text-xl uppercase tracking-tighter leading-none text-white">
            BINTANG<span className="text-yellow-500"> PERKASA</span>
          </div>
          <div className="text-[8px] tracking-[0.4em] text-gray-500 uppercase font-bold">Construction & Steel</div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`text-xs uppercase font-bold tracking-widest transition-colors hover:text-yellow-500 ${
                pathname === item.path ? 'text-yellow-500' : 'text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="bg-yellow-500 px-6 py-2.5 rounded-lg font-black uppercase text-[10px] tracking-widest flex items-center gap-2 text-black hover:bg-yellow-400 transition-all shadow-lg"
            >
              Hubungi Kami
              <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl overflow-hidden py-2 shadow-2xl animate-in fade-in zoom-in duration-200">
                <a href="https://wa.me/6281231189475" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-[10px] font-bold text-gray-300 hover:bg-yellow-500 hover:text-black uppercase transition-colors">🟢 WhatsApp</a>
                <a href="mailto:rian.metrosinar@gmail.com" className="block px-4 py-3 text-[10px] font-bold text-gray-300 hover:bg-yellow-500 hover:text-black uppercase transition-colors border-t border-white/5">📧 Email Kami</a>
              </div>
            )}
          </div>
        </div>

        {/* --- MOBILE MENU TOGGLE --- */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-yellow-500 font-black text-xs uppercase tracking-widest z-50 border border-yellow-500/30 px-3 py-1 rounded"
        >
          {isMenuOpen ? 'Tutup' : 'Menu'}
        </button>

        {/* --- MOBILE MENU OVERLAY (REVISI: Ditambah tombol Email) --- */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center space-y-8 z-40 animate-in fade-in duration-300">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-tighter ${
                  pathname === item.path ? 'text-yellow-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex flex-col w-full px-10 gap-4 pt-4">
              <a 
                href="https://wa.me/6281231189475" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-yellow-500 text-black py-4 rounded-full font-black uppercase tracking-widest text-center text-xs shadow-xl active:scale-95 transition-all"
              >
                WhatsApp Kami
              </a>
              <a 
                href="mailto:rian.metrosinar@gmail.com" 
                className="border border-white/20 text-white py-4 rounded-full font-black uppercase tracking-widest text-center text-xs active:scale-95 transition-all"
              >
                Email Perusahaan
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}