import React from 'react';
import { Users, ShoppingBag, Package, Building2 } from 'lucide-react';
import { ScallopShellIcon, GalicianCoastLighthouseIllustration } from './GaliciaIcons';

interface HowItWorksSectionProps {
  onOpenInfo: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenInfo }) => {
  const steps = [
    {
      number: 1,
      numberColor: 'bg-[#4FB8B8] text-white',
      lineColor: 'border-[#4FB8B8]',
      title: 'El centro organiza la campaña.',
      description:
        'Os acompañamos desde el inicio: definimos fechas, productos y objetivos. Nosotros nos encargamos de todo lo demás.',
      icon: Users,
      iconColor: 'text-[#4FB8B8]',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Coordinadora de Luicar asesorando al centro educativo por teléfono y ordenador',
      tagBadge: null,
    },
    {
      number: 2,
      numberColor: 'bg-[#F5B738] text-white',
      lineColor: 'border-[#F5B738]',
      title: 'Los alumnos realizan sus pedidos.',
      description:
        'Cada alumno ofrece los productos y recoge los pedidos de forma sencilla con nuestro catálogo físico o digital.',
      icon: ShoppingBag,
      iconColor: 'text-[#E5A020]',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Alumnos revisando el catálogo físico de productos artesanos gallegos',
      tagBadge: null,
    },
    {
      number: 3,
      numberColor: 'bg-[#E76F38] text-white',
      lineColor: 'border-[#E76F38]',
      title: 'LUICAR prepara los productos.',
      description:
        'Preparamos cada pedido de forma individual, con cuidado y calidad, etiquetado con el nombre de cada alumno.',
      icon: Package,
      iconColor: 'text-[#E76F38]',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Caja kraft de Luicar con productos artesanos preparados individualmente para cada alumno',
      tagBadge: 'Preparado con cuidado para cada alumno',
    },
    {
      number: 4,
      numberColor: 'bg-[#E8728A] text-white',
      lineColor: 'border-[#E8728A]',
      title: 'El colegio recibe los pedidos organizados.',
      description:
        'Entregamos todos los pedidos ordenados por alumno y curso, listos para distribuir. Sin trabajo extra para el centro.',
      icon: Building2,
      iconColor: 'text-[#E8728A]',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Cajas apiladas y rotuladas por curso y nombre de alumno listas para entregar',
      tagBadge: null,
      customCardOverlay: true,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#E76F38] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#E76F38]">
              ¿CÓMO FUNCIONA?
            </span>
            <span className="w-5 h-[2px] bg-[#E76F38] rounded-full inline-block" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] tracking-tight mb-4">
            Así de fácil
          </h2>
          
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Un proceso sencillo y organizado para que vuestro viaje sea una realidad.
          </p>
        </div>

        {/* 4 Steps Grid with connecting timeline bar on desktop */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[284px] left-[12%] right-[12%] h-[2.5px] bg-gradient-to-r from-[#4FB8B8] via-[#F5B738] via-60% to-[#E8728A] -z-0 opacity-70" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.number} className="flex flex-col group">
                  
                  {/* Photo Card with rounded corners */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/80 mb-6 group-hover:shadow-md transition-shadow">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Step 3 Custom Badge Overlay if present */}
                    {step.tagBadge && (
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm border border-neutral-100">
                        <p className="text-[11px] font-semibold text-[#4E3629] leading-tight">
                          {step.tagBadge}
                        </p>
                      </div>
                    )}

                    {/* Step 4 Custom Box Labels Mockup overlay */}
                    {step.customCardOverlay && (
                      <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center p-4">
                        <div className="w-full max-w-[190px] space-y-2">
                          <div className="bg-white/95 rounded-md px-3 py-1.5 shadow-sm text-center border border-neutral-200">
                            <span className="block text-[11px] font-bold text-neutral-800">Martina R.</span>
                            <span className="block text-[9px] text-neutral-500">2º ESO A</span>
                          </div>
                          <div className="bg-white/95 rounded-md px-3 py-1.5 shadow-sm text-center border border-neutral-200">
                            <span className="block text-[11px] font-bold text-neutral-800">Hugo L.</span>
                            <span className="block text-[9px] text-neutral-500">2º ESO A</span>
                          </div>
                          <div className="bg-white/95 rounded-md px-3 py-1.5 shadow-sm text-center border border-neutral-200">
                            <span className="block text-[11px] font-bold text-neutral-800">Lucía G.</span>
                            <span className="block text-[9px] text-neutral-500">2º ESO A</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step Number Circle Bubble */}
                  <div className="flex items-center justify-center mb-5 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-[#FAF9F6] transition-transform group-hover:scale-110 ${step.numberColor}`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <div className="p-1 rounded-md bg-white shadow-2xs shrink-0 mt-0.5">
                        <IconComp className={`w-4 h-4 ${step.iconColor}`} />
                      </div>
                      <h3 className="text-base sm:text-[17px] font-bold text-[#1E1E1E] leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#555555] leading-relaxed pl-7">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Highlight Callout Card with Scallop Shell & Lighthouse coastline */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3ECE7] shadow-xs relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left / Center Info */}
          <div className="flex items-start sm:items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-xl bg-[#4FB8B8]/12 border border-[#4FB8B8]/30 flex items-center justify-center shrink-0">
              <ScallopShellIcon className="w-7 h-7" color="#4FB8B8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1E1E1E] leading-tight mb-1">
                Todo organizado, sin complicaciones.
              </h4>
              <p className="text-sm text-[#666666] leading-normal">
                Nuestro equipo está siempre disponible para ayudaros en cada paso del camino.
              </p>
            </div>
          </div>

          {/* Action button inside callout */}
          <div className="z-10 w-full md:w-auto flex justify-start md:justify-end">
            <button
              onClick={onOpenInfo}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4FB8B8] text-white text-sm font-bold shadow-xs hover:bg-[#43A4A4] active:scale-[0.98] transition-all cursor-pointer"
            >
              Consultar disponibilidad
            </button>
          </div>

          {/* Right Background Subtle Lighthouse & Coastline Art */}
          <div className="absolute right-0 bottom-0 top-0 w-full md:w-96 pointer-events-none opacity-40 md:opacity-85 z-0 flex items-end justify-end">
            <GalicianCoastLighthouseIllustration className="w-full h-24 md:h-28" />
          </div>

        </div>

      </div>
    </section>
  );
};
