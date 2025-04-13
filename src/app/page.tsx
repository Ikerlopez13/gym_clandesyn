import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-secondary text-accent pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-primary">Clandestyn</span> Gym
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-accent/90 leading-relaxed">
            Tu centro de entrenamiento especializado en artes marciales y deportes de contacto. 
            Descubre nuestras clases y mejora tu fuerza, técnica y confianza.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="#horarios" 
              className="btn btn-primary btn-lg text-secondary hover:bg-primary/90 transition-colors"
            >
              Ver Horarios
            </a>
            <a 
              href="#contacto" 
              className="btn btn-outline btn-lg border-primary text-primary hover:bg-primary hover:text-secondary transition-colors"
            >
              Contactar
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              className="w-6 h-6 text-primary" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/gym-interior.jpg"
                alt="Interior del gimnasio"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="mb-4">
                En Clandestyn Gym, nos especializamos en artes marciales y deportes de contacto. Contamos con más de 350 metros cuadrados de instalaciones de última generación.
              </p>
              <p className="mb-6">
                Nuestro equipo de instructores profesionales está comprometido con tu desarrollo y progreso en las artes marciales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Instructores certificados
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Instalaciones modernas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Ambiente inclusivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horarios" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Horarios</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full bg-base-100">
              <thead>
                <tr className="text-accent">
                  <th className="text-primary">Hora</th>
                  <th className="text-primary">Lunes</th>
                  <th className="text-primary">Martes</th>
                  <th className="text-primary">Miércoles</th>
                  <th className="text-primary">Jueves</th>
                  <th className="text-primary">Viernes</th>
                  <th className="text-primary">Sábado</th>
                  <th className="text-primary">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00 - 10:00</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>CERRADO</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td>BOXEO</td>
                  <td>KICK</td>
                  <td>BOXEO</td>
                  <td>BOXEO</td>
                  <td>KICK</td>
                  <td>BOXEO</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>11:00 - 12:00</td>
                  <td>KICK</td>
                  <td>BOXEO</td>
                  <td>BOXEO</td>
                  <td>KICK</td>
                  <td>BOXEO</td>
                  <td>KICK</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>12:00 - 13:00</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>13:00 - 16:30</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>16:30 - 17:00</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>17:00 - 18:00</td>
                  <td>LIBRE</td>
                  <td>KICK</td>
                  <td>LIBRE</td>
                  <td>KICK</td>
                  <td>K.S</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>18:00 - 19:00</td>
                  <td>LIBRE</td>
                  <td>B.I</td>
                  <td>LIBRE</td>
                  <td>B.I</td>
                  <td>B.I</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>19:00 - 20:00</td>
                  <td>LIBRE</td>
                  <td>BOXEO</td>
                  <td>LIBRE</td>
                  <td>BOXEO</td>
                  <td>B.S</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>20:00 - 21:30</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>LIBRE</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 bg-base-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-primary">Leyenda:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent">L = LIBRE</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">B = BOXEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">K = KICK BOXING</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">B.I = BOXEO INFANTIL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">B.S = SPARRING BOXEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">K.S = SPARRING KICK BOXING</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">X = CERRADO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifas" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Tarifas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body">
                <h3 className="card-title text-2xl">Plan Ilimitado</h3>
                <p className="text-3xl font-bold">45€/mes</p>
                <ul className="space-y-2 my-4">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Acceso ilimitado a todas las clases
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Sin límite de días
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <a href="#contacto" className="btn btn-primary w-full">Apúntate</a>
                </div>
              </div>
            </div>
            <div className="card bg-primary text-primary-content shadow-xl hover:scale-105 transition-transform">
              <div className="card-body">
                <h3 className="card-title text-2xl">Plan 3 Días</h3>
                <p className="text-3xl font-bold">35€/mes</p>
                <ul className="space-y-2 my-4">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    3 días por semana
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Acceso a todas las clases
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <a href="#contacto" className="btn btn-secondary w-full">Apúntate</a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body">
                <h3 className="card-title text-2xl">Plan Infantil</h3>
                <p className="text-3xl font-bold">25€/mes</p>
                <ul className="space-y-2 my-4">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Clases especiales para niños
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Instructores especializados
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <a href="#contacto" className="btn btn-primary w-full">Apúntate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="disciplinas" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Disciplinas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boxeo",
                description: "Aprende el noble arte del boxeo con entrenadores profesionales. Técnica, acondicionamiento físico y sparring supervisado.",
                image: "/images/boxing.jpg"
              },
              {
                title: "Kick Boxing",
                description: "Combina técnicas de boxeo con patadas potentes. Mejora tu coordinación y aprende un sistema completo de combate de pie.",
                image: "/images/kickboxing.jpg"
              },
              {
                title: "Boxeo Infantil",
                description: "Clases especialmente diseñadas para niños, enfocadas en disciplina, coordinación y desarrollo físico a través del boxeo.",
                image: "/images/boxing-kids.jpg"
              },
              {
                title: "Sparring Boxeo",
                description: "Sesiones de práctica real supervisada para poner a prueba tus habilidades en un ambiente seguro y controlado.",
                image: "/images/sparring.jpg"
              },
              {
                title: "Sparring Kick Boxing",
                description: "Practica tus técnicas de kick boxing en combates reales supervisados. Para alumnos con experiencia.",
                image: "/images/kickboxing-sparring.jpg"
              },
              {
                title: "Entrenamiento Libre",
                description: "Acceso a las instalaciones para entrenar por tu cuenta. Incluye sacos, peras, material de entrenamiento y zona de peso libre.",
                image: "/images/open-gym.jpg"
              }
            ].map((discipline, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <figure className="relative h-48">
                  <Image
                    src={discipline.image}
                    alt={discipline.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary">{discipline.title}</h3>
                  <p className="text-accent/90">{discipline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">¡Ponte en contacto!</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>Barcelona</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <p>+34 XXX XXX XXX</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <p>info@clandestyngym.com</p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-6">
                  <a href="mailto:info@clandestyngym.com" className="btn btn-primary">Enviar Email</a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <p><strong>Lunes a Viernes:</strong> 9:00 - 21:30</p>
                  <p><strong>Sábados:</strong> 10:00 - 14:00</p>
                  <p><strong>Domingos:</strong> Cerrado</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold">Síguenos en redes sociales:</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="btn btn-circle btn-outline">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="btn btn-circle btn-outline">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="btn btn-circle btn-outline">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
