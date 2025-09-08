"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/DSC_0345[1].JPG",
  "/images/DSC_0347[1].JPG",
  "/images/DSC_0350[1].JPG",
  "/images/DSC_0351[1].JPG",
  "/images/DSC_0353[1].JPG",
  "/images/DSC_0354[1].JPG",
  "/images/DSC_0355[1].JPG",
  "/images/DSC_0356[1].JPG",
  "/images/DSC_0357[2].JPG",
  "/images/DSC_0359[1].JPG",
  "/images/DSC_0360[1].JPG",
];

export default function InstalacionesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-base-100 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-accent mb-8">Instalaciones</h1>
          <p className="text-accent/80 mb-8 max-w-3xl">
            Descubre nuestras instalaciones: zona de ring, sacos, área de fuerza y cardio, y mucho más.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(src)}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Image src={src} alt={`Instalación ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image src={active} alt="Vista ampliada" fill className="object-contain" />
            <button
              aria-label="Cerrar"
              onClick={() => setActive(null)}
              className="btn btn-circle absolute -top-3 -right-3"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}


