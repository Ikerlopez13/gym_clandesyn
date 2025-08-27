'use client';

import React from 'react';

const pricingPlans = [
  {
    name: 'Ilimitado',
    price: '45€',
    period: '/mes',
    description: 'Acceso ilimitado a todas las clases',
    features: [
      'Acceso a todas las clases',
      'Sin límite de días',
      'Horario flexible',
      'Acceso a todas las disciplinas'
    ]
  },
  {
    name: '3 Días',
    price: '35€',
    period: '/mes',
    description: 'Tres días por semana',
    features: [
      'Acceso a todas las clases',
      '3 días por semana',
      'Horario flexible',
      'Acceso a todas las disciplinas'
    ]
  },
  {
    name: 'Infantil',
    price: '30€',
    period: '/mes',
    description: 'Clases especiales para niños',
    features: [
      'Clases adaptadas por edad',
      'Instructores especializados',
      'Desarrollo físico y mental',
      'Ambiente seguro y divertido'
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestras Tarifas</h2>
          <p className="text-lg text-base-content/80">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-base-content/70 ml-1">{plan.period}</span>
                </div>
                <p className="text-base-content/80 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-primary mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="card-actions justify-end mt-auto">
                  <button className="btn btn-primary btn-block">
                    Seleccionar Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 