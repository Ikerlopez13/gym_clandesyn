'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 backdrop-blur-sm text-accent fixed top-0 z-50 border-b border-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2">
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
                <Link href="/#horarios" className="hover:text-primary transition-colors duration-300 relative group">
                  Horarios
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/instalaciones" className="hover:text-primary transition-colors duration-300 relative group">
                  Instalaciones
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#tarifas" className="hover:text-primary transition-colors duration-300 relative group">
                  Tarifas
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#disciplinas" className="hover:text-primary transition-colors duration-300 relative group">
                  Disciplinas
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/requisitos" className="hover:text-primary transition-colors duration-300 relative group">
                  ¿Qué necesitas?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-primary transition-colors duration-300 relative group">
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <a href="https://homo.cat/guantes-de-boxeo-equipaciones-material-de-entreno-y-protecciones-de-artes-marciales/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 relative group">
                  Tienda
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <div className="relative md:hidden">
              <button
                aria-label="Abrir menú"
                className="btn btn-ghost text-accent hover:bg-accent/10"
                onClick={() => setIsOpen((v) => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <ul
                className={`menu menu-sm absolute right-0 mt-3 z-[60] p-4 shadow-lg bg-secondary/95 backdrop-blur-sm rounded-box w-56 border border-accent/10 transition-opacity ${
                  isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <li><Link href="/#horarios" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Horarios</Link></li>
                <li><Link href="/#tarifas" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Tarifas</Link></li>
                <li><Link href="/#disciplinas" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Disciplinas</Link></li>
                <li><Link href="/instalaciones" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Instalaciones</Link></li>
                <li><Link href="/requisitos" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">¿Qué necesitas?</Link></li>
                <li><Link href="/#contacto" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Contacto</Link></li>
                <li><a href="https://homo.cat" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-accent hover:text-primary hover:bg-accent/5 py-3 transition-colors duration-300">Tienda</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
} 