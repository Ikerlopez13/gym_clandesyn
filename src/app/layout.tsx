import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clandestin Gym",
  description: "Tu centro de entrenamiento especializado en artes marciales y deportes de contacto.",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="mytheme">
      <body className={inter.className}>
        <nav className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#horarios">Horarios</a></li>
                <li><a href="#tarifas">Tarifas</a></li>
                <li><a href="#disciplinas">Disciplinas</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Clandestin Gym</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#horarios">Horarios</a></li>
              <li><a href="#tarifas">Tarifas</a></li>
              <li><a href="#disciplinas">Disciplinas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
          <div>
            <p className="font-bold">
                              Clandestin Gym <br/>Tu centro de entrenamiento especializado
            </p>
            <p>© 2024 - Todos los derechos reservados</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.instagram.com/clandestinboxinggym/" target="_blank" rel="noopener noreferrer" className="link link-hover">@clandestinboxinggym</a>
              <a href="https://wa.me/34644604715" target="_blank" rel="noopener noreferrer" className="link link-hover">WhatsApp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
