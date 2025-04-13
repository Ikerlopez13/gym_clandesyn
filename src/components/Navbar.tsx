'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-secondary text-accent fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[240px] h-[140px]">
              <Image
                src="/images/logo.png"
                alt="Clandestyn Gym Logo"
                fill
                className="object-contain brightness-200"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden md:flex gap-8 text-lg font-medium">
            <li><a href="#horarios" className="hover:text-primary transition-colors">Horarios</a></li>
            <li><a href="#tarifas" className="hover:text-primary transition-colors">Tarifas</a></li>
            <li><a href="#disciplinas" className="hover:text-primary transition-colors">Disciplinas</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-secondary rounded-box w-52">
              <li><a href="#horarios" className="text-accent hover:text-primary py-3">Horarios</a></li>
              <li><a href="#tarifas" className="text-accent hover:text-primary py-3">Tarifas</a></li>
              <li><a href="#disciplinas" className="text-accent hover:text-primary py-3">Disciplinas</a></li>
              <li><a href="#contacto" className="text-accent hover:text-primary py-3">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 