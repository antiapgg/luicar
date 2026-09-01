import React from 'react';
import { 
  Shield, 
  Award, 
  MapPin, 
  BookOpen, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  Building, 
  ShoppingBag, 
  Package, 
  School, 
  Plane
} from 'lucide-react';
import { ScallopShellIcon, GaliciaMapIcon } from '../components/GaliciaIcons';

interface HomeHeroViewProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const HomeHeroView: React.FC<HomeHeroViewProps> = ({
  onOpenInfo,
  onOpenCatalog,
  onNavigateSection,
}) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO (hero1.jpeg)                                              */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headline, CTAs, 3 Value Pillars */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              
              {/* Tag: — CAMPAÑAS QUE SUMAN */}
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#E76F38]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E76F38]">
                  CAMPAÑAS QUE SUMAN
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#1E1E1E] tracking-tight leading-[1.08]">
                Financiad <br />
                vuestro viaje <br />
                de fin de curso
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-lg">
                Ayudamos a colegios, institutos y grupos de alumnos a conseguir fondos mediante campañas de venta.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={onOpenInfo}
                  className="px-7 py-3.5 rounded-full bg-[#DF2928] hover:bg-[#C82322] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>QUIERO INFORMACIÓN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCatalog}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 active:scale-[0.98] text-[#1E1E1E] font-bold text-sm sm:text-base border border-[#DCD6CA] flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
                >
                  <span>VER CATÁLOGO</span>
                  <BookOpen className="w-4 h-4 text-[#555555]" />
                </button>
              </div>

              {/* 3 Value Pillars */}
              <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-100">
                
                {/* 1. Confianza y cercanía */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-[#4FB8B8]/40 bg-[#4FB8B8]/10 flex items-center justify-center text-[#4FB8B8] shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#333333] leading-tight">
                    Confianza <br />
                    <span className="font-normal text-[#666666]">y cercanía</span>
                  </div>
                </div>

                {/* 2. Productos de calidad */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-[#F5B738]/40 bg-[#F5B738]/10 flex items-center justify-center text-[#B87D0E] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#333333] leading-tight">
                    Productos <br />
                    <span className="font-normal text-[#666666]">de calidad</span>
                  </div>
                </div>

                {/* 3. Comprometidos con Galicia */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-[#DF2928]/40 bg-[#DF2928]/10 flex items-center justify-center text-[#DF2928] shrink-0">
                    <GaliciaMapIcon className="w-5 h-5" color="#DF2928" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#333333] leading-tight">
                    Comprometidos <br />
                    <span className="font-normal text-[#666666]">con Galicia</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Organic Cutout Photo with Product Box & Badge */}
            <div className="lg:col-span-6 relative">
              
              {/* Organic Curved Container Frame matching hero1.jpeg */}
              <div className="relative rounded-[40px] lg:rounded-tl-[120px] lg:rounded-br-[40px] overflow-hidden shadow-2xl bg-neutral-100 border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                  alt="Alumnos de instituto preparando y revisando las cajas de productos Luicar"
                  className="w-full h-full object-cover object-center"
                />

                {/* Box Packaging overlay realistic mock representing Luicar box */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[240px] sm:max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#ECE6DA] shadow-lg hidden xs:block">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#DF2928]">LUICAR COMERCIAL</span>
                  </div>
                  <p className="text-xs font-bold text-[#191919] leading-tight">
                    "Moitas grazas pola túa colaboración!"
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-[#777777]">
                    <ScallopShellIcon className="w-3 h-3" color="#4FB8B8" />
                    <span>Reparto organizado por alumno</span>
                  </div>
                </div>

                {/* Floating Bottom Right Badge: Tradición gallega, impulso joven */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#1E1E1E] shadow-xl border border-white/80">
                  <div className="w-8 h-8 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8]">
                    <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[11px] sm:text-xs font-bold text-[#1E1E1E] leading-tight">
                      Tradición gallega,
                    </span>
                    <span className="block text-[11px] sm:text-xs font-medium text-[#4FB8B8] leading-tight">
                      impulso joven
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Wavy bottom organic contour line */}
        <div className="w-full mt-10 overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 text-[#FAF9F6]"
            preserveAspectRatio="none"
          >
            <path
              d="M0 24C240 48 480 0 720 24C960 48 1200 0 1440 24V48H0V24Z"
              fill="currentColor"
            />
            <path
              d="M0 24C240 48 480 0 720 24C960 48 1200 0 1440 24"
              stroke="#4FB8B8"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ASÍ DE FÁCIL / CÓMO FUNCIONA (hero2.jpeg)                       */}
      {/* ========================================================================= */}
      <section id="como-funciona" className="bg-[#FAF9F6] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#E76F38]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E76F38]">
                ¿CÓMO FUNCIONA?
              </span>
              <span className="w-6 h-[1.5px] bg-[#E76F38]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Así de fácil
            </h2>

            <p className="text-sm sm:text-base text-[#666666]">
              Un proceso sencillo y organizado para que vuestro viaje sea una realidad.
            </p>
          </div>

          {/* 4 Cards Grid with Visual Photos & Connected Step Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-[260px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#4FB8B8] via-[#F5B738] via-[#E76F38] to-[#DF2928] z-0 pointer-events-none opacity-50" />

            {/* STEP 1: El centro organiza la campaña */}
            <div className="bg-white rounded-3xl p-5 border border-[#ECE6DA] shadow-sm flex flex-col justify-between relative z-10 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Photo 1: Advisor on phone with Luicar poster */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Asesora de Luicar coordinando la campaña con el centro escolar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Circle: 1 (Teal) */}
                <div className="flex items-center justify-center -mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#4FB8B8] text-white font-black text-sm flex items-center justify-center shadow-md border-4 border-white">
                    1
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <Building className="w-5 h-5 text-[#4FB8B8] shrink-0 mt-0.5" />
                    <h3 className="text-sm sm:text-base font-extrabold text-[#191919] leading-snug">
                      El centro organiza la campaña.
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed pl-7">
                    Os acompañamos desde el inicio: definimos fechas, productos y objetivos. Nosotros nos encargamos de todo lo demás.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 2: Los alumnos realizan sus pedidos */}
            <div className="bg-white rounded-3xl p-5 border border-[#ECE6DA] shadow-sm flex flex-col justify-between relative z-10 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Photo 2: Students looking at catalog */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                    alt="Alumnos de instituto revisando el catálogo impreso y físico de productos"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Circle: 2 (Amber) */}
                <div className="flex items-center justify-center -mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#F5B738] text-white font-black text-sm flex items-center justify-center shadow-md border-4 border-white">
                    2
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#B87D0E] shrink-0 mt-0.5" />
                    <h3 className="text-sm sm:text-base font-extrabold text-[#191919] leading-snug">
                      Los alumnos realizan sus pedidos.
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed pl-7">
                    Cada alumno ofrece los productos y recoge los pedidos de forma sencilla con nuestro catálogo físico o digital.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 3: LUICAR prepara los productos */}
            <div className="bg-white rounded-3xl p-5 border border-[#ECE6DA] shadow-sm flex flex-col justify-between relative z-10 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Photo 3: Packing artisan box with care */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                    alt="Preparación artesanal de las cajas de productos etiquetadas por alumno"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Circle: 3 (Orange) */}
                <div className="flex items-center justify-center -mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#E76F38] text-white font-black text-sm flex items-center justify-center shadow-md border-4 border-white">
                    3
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-[#E76F38] shrink-0 mt-0.5" />
                    <h3 className="text-sm sm:text-base font-extrabold text-[#191919] leading-snug">
                      LUICAR prepara los productos.
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed pl-7">
                    Preparamos cada pedido de forma individual, con cuidado y calidad, etiquetado con el nombre de cada alumno.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 4: El colegio recibe los pedidos organizados */}
            <div className="bg-white rounded-3xl p-5 border border-[#ECE6DA] shadow-sm flex flex-col justify-between relative z-10 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Photo 4: Student boxes stack (Martina R., Hugo L., Lucía G.) */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Cajas individuales listas y organizadas por alumno para entrega directa en el centro"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Circle: 4 (Crimson) */}
                <div className="flex items-center justify-center -mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#DF2928] text-white font-black text-sm flex items-center justify-center shadow-md border-4 border-white">
                    4
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <School className="w-5 h-5 text-[#DF2928] shrink-0 mt-0.5" />
                    <h3 className="text-sm sm:text-base font-extrabold text-[#191919] leading-snug">
                      El colegio recibe los pedidos organizados.
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed pl-7">
                    Entregamos todos los pedidos ordenados por alumno y curso, listos para distribuir. Sin trabajo extra para el centro.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card: Todo organizado, sin complicaciones (hero2.jpeg) */}
          <div className="bg-[#FFFDF6] rounded-3xl p-6 sm:p-8 border border-[#F0E6D2] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            {/* Left: Scallop shell icon & text */}
            <div className="flex items-start sm:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#4FB8B8]/15 border border-[#4FB8B8]/30 flex items-center justify-center text-[#4FB8B8] shrink-0">
                <ScallopShellIcon className="w-8 h-8" color="#4FB8B8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-extrabold text-[#1E1E1E]">
                  Todo organizado, sin complicaciones.
                </h4>
                <p className="text-xs sm:text-sm text-[#666666]">
                  Nuestro equipo está siempre disponible para ayudaros en cada paso del camino.
                </p>
              </div>
            </div>

            {/* Right: CTA button */}
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={onOpenInfo}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-[#E76F38] hover:bg-[#D45E28] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer text-center"
              >
                Pide Información
              </button>
            </div>

            {/* Background subtle lighthouse coastal sketch */}
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none hidden md:block pr-8">
              <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 80C50 70 100 85 150 75C180 70 200 80 220 75" stroke="#4FB8B8" strokeWidth="2" strokeDasharray="3 3"/>
                <path d="M180 75L185 30H195L200 75" stroke="#4FB8B8" strokeWidth="2"/>
                <path d="M182 30H198V20H182V30Z" stroke="#4FB8B8" strokeWidth="2"/>
                <path d="M190 20V12" stroke="#4FB8B8" strokeWidth="2"/>
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: QUICK CONTACT BAR                                             */}
      {/* ========================================================================= */}
      <section className="bg-[#DF2928] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Plane Doodles */}
          <div className="absolute top-4 left-6 opacity-20 pointer-events-none">
            <Plane className="w-16 h-16 rotate-12" />
          </div>
          <div className="absolute bottom-4 right-8 opacity-20 pointer-events-none">
            <Plane className="w-20 h-20 -rotate-12" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-7 space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                ¿Listos para vuestro <br />
                próximo <span className="text-[#F5B738]">destino?</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                Contactad con nosotros y os ayudamos a empezar hoy mismo.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="https://wa.me/34619937972?text=Hola%20Luicar!%20Queremos%20información%20para%20financiar%20nuestro%20viaje%20de%20fin%20de%20curso."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-neutral-50 text-[#191919] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href="tel:619937972"
                className="w-full py-3.5 px-6 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/40 backdrop-blur-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Llámanos: 619 937 972</span>
              </a>
            </div>

          </div>

        </section>

        <div className="text-center pt-2 pb-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#555555] font-medium">
          <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
          <span>Luicar Comercial | Tradición gallega, <span className="text-[#E76F38] font-bold">impulso joven.</span></span>
        </div>
        </div>

    </div>
  );
};
