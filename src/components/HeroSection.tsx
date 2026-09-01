import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Award } from 'lucide-react';
import { ScallopShellIcon, GaliciaMapIcon } from './GaliciaIcons';
import { LuicarLogo } from './LuicarLogo';

interface HeroSectionProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInfo, onOpenCatalog }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs, Trust Badges */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-7 h-[2.5px] bg-[#E76F38] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#E76F38]">
                CAMPAÑAS QUE SUMAN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#191919] tracking-tight leading-[1.08] mb-6">
              Financiad vuestro viaje <br className="hidden sm:inline" />
              <span className="text-[#191919]">de fin de curso</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-[19px] text-[#4E4E4E] leading-relaxed mb-8 max-w-xl font-normal">
              Ayudamos a colegios, institutos y grupos de alumnos a conseguir fondos mediante campañas de venta.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={onOpenInfo}
                id="btn-hero-quiero-informacion"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#DF2928] text-white text-[15px] font-bold tracking-wide shadow-md hover:bg-[#C82322] hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>QUIERO INFORMACIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenCatalog}
                id="btn-hero-ver-catalogo"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FAF9F6] border border-[#DCD5C9] text-[#2D2D2D] text-[15px] font-semibold hover:bg-[#F3EFE7] hover:border-[#CBC1B1] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>VER CATÁLOGO</span>
                <BookOpen className="w-4 h-4 text-[#4E3629] group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Trust Badges / Value Pillars */}
            <div className="pt-2 border-t border-neutral-100 grid grid-cols-3 gap-2 sm:gap-4">
              {/* Pillar 1: Confianza */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4FB8B8]/10 border border-[#4FB8B8]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#4FB8B8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#1E1E1E] leading-tight">Confianza</span>
                  <span className="text-[11px] sm:text-xs text-[#666666] leading-tight">y cercanía</span>
                </div>
              </div>

              {/* Pillar 2: Calidad */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5B738]/15 border border-[#F5B738]/40 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#E5A020]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#1E1E1E] leading-tight">Productos</span>
                  <span className="text-[11px] sm:text-xs text-[#666666] leading-tight">de calidad</span>
                </div>
              </div>

              {/* Pillar 3: Galicia */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8728A]/12 border border-[#E8728A]/35 flex items-center justify-center shrink-0">
                  <GaliciaMapIcon className="w-5 h-5" color="#E8728A" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#1E1E1E] leading-tight">Comprometidos</span>
                  <span className="text-[11px] sm:text-xs text-[#666666] leading-tight">con Galicia</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            {/* Main Image Container with Asymmetrical Smooth Arch */}
            <div className="relative rounded-3xl lg:rounded-l-[140px] lg:rounded-r-3xl overflow-hidden shadow-2xl bg-[#F6F4EE] border border-[#ECE6DA]/80">
              
              {/* Photo representation of students packing and organizing the Luicar artisan boxes */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                  alt="Grupo de estudiantes preparando y revisando pedidos de viaje de fin de curso con Luicar Comercial"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Overlaid Realistic Luicar Box Mockup Card */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[240px] sm:max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/60">
                  <div className="flex flex-col items-center text-center">
                    <LuicarLogo size="sm" subtitlePosition="bottom" className="mb-1.5" />
                    <p className="text-[11px] sm:text-xs font-semibold text-[#3C3C3C] leading-snug">
                      Moitas grazas pola túa colaboración!
                    </p>
                    <div className="mt-1 flex items-center justify-center">
                      <ScallopShellIcon className="w-3.5 h-3.5" color="#E76F38" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge in bottom right corner: 'Tradición gallega, impulso joven' */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center shrink-0">
                    <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-[#1E1E1E] leading-tight">Tradición gallega,</span>
                    <span className="text-[11px] font-medium text-[#666666] leading-tight">impulso joven</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative subtle background gradient blob */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#4FB8B8]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -z-10 -bottom-10 left-10 w-60 h-60 bg-[#F5B738]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Seamless Wave Divider connecting Hero 1 and Hero 2 */}
      <div className="w-full mt-12 lg:mt-16 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 block text-[#FAF9F6]"
          preserveAspectRatio="none"
        >
          {/* Subtle dual-color accent curve */}
          <path
            d="M0,32 C360,68 1080,0 1440,36 L1440,80 L0,80 Z"
            fill="currentColor"
          />
          <path
            d="M0,30 C360,66 1080,-2 1440,34"
            stroke="#4FB8B8"
            strokeWidth="2.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M0,34 C360,70 1080,2 1440,38"
            stroke="#F5B738"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};
