import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function MethodologyPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-base-100 pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">Metodología de Entrenamiento</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </header>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-lg text-accent/90 leading-relaxed">
                            <p>
                                En <span className="text-primary font-bold">Clandestin Gym</span> hemos diseñado una metodología que pone a la persona en el centro del entrenamiento. Creemos que el mejor progreso se consigue cuando existe atención real, seguimiento continuo y correcciones constantes, por eso trabajamos con grupos reducidos. Así podemos adaptar cada sesión a tu nivel, tu ritmo y tus objetivos.
                            </p>
                            <p>
                                Entrenamos <span className="font-semibold">Kick Boxing, Muay Thai y Boxeo</span> con un enfoque técnico, funcional y seguro. Cada clase combina aprendizaje de técnica, acondicionamiento físico y desarrollo de la confianza, siempre bajo la supervisión de instructores con experiencia en competición.
                            </p>
                            <p>
                                Nuestra metodología está pensada tanto para quienes empiezan desde cero como para competidores que buscan perfeccionar su rendimiento. Ajustamos las cargas de trabajo, la intensidad y los objetivos para que cada alumno avance de forma progresiva y evite lesiones.
                            </p>
                            <p>
                                Además, entrenar aquí significa formar parte de una comunidad cercana y motivadora, donde el respeto, la disciplina y el compañerismo son tan importantes como el resultado físico.
                            </p>
                        </div>
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/DSC_0357[2].JPG"
                                alt="Clase de entrenamiento en Clandestin Gym"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-base-200 rounded-3xl p-8 md:p-12 shadow-xl">
                        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Nuestra filosofía</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { text: "Grupos reducidos para una corrección real y constante" },
                                { text: "Entrenamientos adaptados a todos los niveles" },
                                { text: "Enfoque técnico y seguro en cada disciplina" },
                                { text: "Seguimiento personalizado del progreso" },
                                { text: "Ambiente familiar y motivador" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium pt-1">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-2xl md:text-3xl font-bold text-accent italic">
                            "En Clandestin Gym no vienes solo a entrenar: vienes a superarte."
                        </p>
                        <div className="mt-8">
                            <a href="/#contacto" className="btn btn-primary btn-lg">Únete al equipo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
