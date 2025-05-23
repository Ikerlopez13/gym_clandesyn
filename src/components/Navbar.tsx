'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 backdrop-blur-sm text-accent fixed top-0 z-50 border-b border-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/boxeo" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Clandestin Boxing Gym Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden md:flex gap-8 text-lg font-medium">
            <li>
              <a href="#horarios" className="hover:text-primary transition-colors duration-300 relative group">
                Horarios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#tarifas" className="hover:text-primary transition-colors duration-300 relative group">
                Tarifas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#disciplinas" className="hover:text-primary transition-colors duration-300 relative group">
                Disciplinas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-primary transition-colors duration-300 relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://homo.cat" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 relative group">
                Tienda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost text-accent hover:bg-accent/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-secondary/95 backdrop-blur-sm rounded-box w-52 border border-accent/10">
              <li><a href="#horarios" className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Horarios</a></li>
              <li><a href="#tarifas" className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Tarifas</a></li>
              <li><a href="#disciplinas" className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Disciplinas</a></li>
              <li><a href="#contacto" className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Contacto</a></li>
              <li><a href="https://homo.cat" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Tienda</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 