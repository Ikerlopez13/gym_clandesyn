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
        <main className="min-h-screen">
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
