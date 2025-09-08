import Navbar from "@/components/Navbar";

export default function RequirementsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-100 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-accent mb-8">¿Qué necesitas?</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Material Necesario */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">Material Necesario</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Guantes de boxeo (12-16oz)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Espinilleras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Toalla (obligatorio)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Vendaje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Bucal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Ropa deportiva cómoda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Calzado deportivo adecuado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Para Kick Boxing y Muay Thai: descalzo o con calcetines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Botella de agua</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Requisitos Generales */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">Requisitos Generales</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Estar dado de alta en el seguro de la federación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>No tener contraindicaciones médicas para la práctica deportiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Compromiso con el respeto y las normas del gimnasio</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="card bg-base-200 shadow-xl md:col-span-2">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">Información Adicional</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p className="mb-2">Para tu primera clase:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-accent/80">
                        <li>Llega 10-15 minutos antes para familiarizarte con las instalaciones</li>
                        <li>Trae ropa cómoda y, como mínimo, guantes de boxeo; el resto del material lo puedes adquirir después</li>
                        <li>Comunica al instructor si tienes alguna lesión o condición especial</li>
                        <li>¡Mantén una actitud positiva y disfruta de la experiencia!</li>
                      </ul>
                      <div className="mt-4 p-4 bg-warning/20 rounded-lg border-l-4 border-warning">
                        <p className="font-semibold text-warning">⚠️ Importante:</p>
                        <p className="text-sm">No se presta material. Hay que venir con todo preparado.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-actions justify-between mt-6">
                  <a href="https://homo.cat/guantes-de-boxeo-equipaciones-material-de-entreno-y-protecciones-de-artes-marciales/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    🛒 Comprar Material
                  </a>
                  <a href="mailto:clandestingym@gmail.com" className="btn btn-primary">
                    Consultar Dudas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 