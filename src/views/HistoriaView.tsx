import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  Truck, 
  Sparkles, 
  ArrowRight, 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Plane, 
  Star, 
  Check, 
  MessageCircle, 
  Phone, 
  ChevronRight,
  Store,
  Compass
} from 'lucide-react';
import { ScallopShellIcon } from '../components/GaliciaIcons';

interface HistoriaViewProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
  onNavigateHome: () => void;
}

export const HistoriaView: React.FC<HistoriaViewProps> = ({
  onOpenInfo,
  onOpenCatalog,
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* BREADCRUMB                                                                */}
        {/* ========================================================================= 
        <nav className="flex items-center gap-2 text-xs text-[#777777] font-medium pt-1">
          <button 
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#191919] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Inicio</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#191919] font-bold">Conócenos</span>
        </nav>*/}

        {/* ========================================================================= */}
        {/* 1. HERO: DE UNA FAMILIA A MILES DE HISTORIAS                              */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-[#4FB8B8]">
              CONÓCENOS MEJOR
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#191919] tracking-tight leading-[1.1]">
              De una familia <br />
              a miles de <span className="text-[#4FB8B8]">historias</span>
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              <p>
                Luicar nació con Luis y Carmen, nuestros abuelos, y con una idea muy sencilla: trabajar cerca de las personas y ofrecer productos de calidad.
              </p>
              <p>
                Hoy seguimos siendo una empresa familiar que trabaja con colegios e institutos para ayudar a hacer realidad uno de los momentos más especiales del curso: <strong>el viaje de fin de curso.</strong>
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-[#FDF7E7] rounded-2xl p-5 sm:p-6 border border-[#F5E7B8] flex items-start gap-4 shadow-2xs">
              <span className="text-4xl sm:text-5xl font-serif text-[#F5B738] leading-none select-none">
                “
              </span>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-extrabold text-[#191919] leading-snug">
                  Detrás de cada viaje hay un esfuerzo.
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#7A5A1E] leading-snug">
                  Nosotros ayudamos a convertirlo en realidad.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Column: Vintage Photo with Heart Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-neutral-900 border-4 border-white aspect-[4/3] sm:aspect-[16/11] w-full">
              <img
                src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=1000&q=85"
                alt="Luis y Carmen, fundadores de Luicar junto a la ría"
                className="w-full h-full object-cover grayscale contrast-115 object-center"
              />

              {/* Teal Scallop & Heart Pill Badge overlay */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#4FB8B8]/95 backdrop-blur-md text-white shadow-lg border border-white/20">
                <Heart className="w-4 h-4 fill-white text-white" />
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  Una historia de familia, hecha para ayudaros.
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. NUESTRA HISTORIA (Timeline 4 milestones)                                */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Nuestra historia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Milestone 1: LUIS Y CARMEN */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center group hover:border-[#4FB8B8] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#4FB8B8]/10 border border-[#4FB8B8]/20 flex items-center justify-center text-[#4FB8B8] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#4FB8B8] mb-1.5">
                LUIS Y CARMEN
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                El comienzo de una empresa familiar.
              </p>
            </div>

            {/* Milestone 2: UNA EMPRESA QUE CRECE */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center group hover:border-[#F5B738] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#F5B738]/15 border border-[#F5B738]/30 flex items-center justify-center text-[#B87D0E] mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#B87D0E] mb-1.5">
                UNA EMPRESA QUE CRECE
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Más productos, más experiencia y más centros.
              </p>
            </div>

            {/* Milestone 3: HOY */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center group hover:border-[#DF2928] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#DF2928]/10 border border-[#DF2928]/20 flex items-center justify-center text-[#DF2928] mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#DF2928] mb-1.5">
                HOY
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Seguimos trabajando cerca de colegios, institutos, profesores, familias y alumnos.
              </p>
            </div>

            {/* Milestone 4: MAÑANA */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center group hover:border-[#55B585] transition-all">
              <div className="w-14 h-14 rounded-full bg-[#55B585]/15 border border-[#55B585]/30 flex items-center justify-center text-[#2E8B57] mb-4">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#2E8B57] mb-1.5">
                MAÑANA
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Seguir ayudando a convertir esfuerzos en viajes y experiencias.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. NUESTRA FORMA DE TRABAJAR (4 Columns)                                  */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Nuestra forma de trabajar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Calidad */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-2">
                Calidad
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Seleccionamos cuidadosamente nuestros productos y proveedores para garantizar ingredientes y materiales de la más alta calidad.
              </p>
            </div>

            {/* Card 2: Cercanía */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5B738]/20 flex items-center justify-center text-[#B87D0E] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-2">
                Cercanía
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Estamos para acompañar a profesores y alumnos durante todo el proceso. Contar con nosotros es contar con un apoyo.
              </p>
            </div>

            {/* Card 3: Organización */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#DF2928]/15 flex items-center justify-center text-[#DF2928] mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-2">
                Organización
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Nuestro servicio de entrega personalizada: pedidos repartidos por alumno para facilitar vuestra gestión.
              </p>
            </div>

            {/* Card 4: Compromiso con Galicia */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#55B585]/15 flex items-center justify-center text-[#2E8B57] mb-4">
                <ScallopShellIcon className="w-6 h-6" color="#2E8B57" />
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-2">
                Compromiso con Galicia
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Apostamos por el producto tradicional gallego y por impulsar nuestra economía local y regional.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. BANNER PANORÁMICO: TRADICIÓN GALLEGA. IMPULSO JOVEN (Torre de Hércules) */}
        {/* ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden shadow-xl border border-[#ECE6DA] bg-neutral-900 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] flex items-center">
          {/* Panoramic Background of Galicia Coast & Lighthouse */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
            alt="Paisaje costero gallego con faro histórico"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-2/3" />

          {/* Foreground Text Box */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-lg space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              <span className="text-[#4FB8B8]">Tradición gallega.</span> <br />
              <span className="text-[#E76F38]">Impulso joven.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
              Una forma de trabajar que viene de nuestra historia y una energía que nace de cada grupo que quiere llegar más lejos.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. LO QUE HACEMOS POSIBLE (Students & 4 Micro Steps + 60% Benefit)       */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#ECE6DA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Students collaborating */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-900 border-2 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                  alt="Alumnos colaborando para financiar su viaje escolar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Steps & Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#E76F38] mb-1">
                  LO QUE HACEMOS POSIBLE
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] leading-tight">
                  Vosotros tenéis un destino. <br />
                  Nosotros os ayudamos a llegar.
                </h2>
                <p className="text-xs sm:text-sm text-[#666666] mt-2 leading-relaxed">
                  Ponemos a vuestra disposición productos de calidad, una campaña sencilla y un servicio pensado para que el grupo pueda centrarse en lo importante: conseguir su objetivo.
                </p>
              </div>

              {/* 4 Steps Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                
                {/* Step 1 */}
                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#ECE6DA] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-extrabold text-[#191919]">Elegís</h4>
                  <span className="text-[10px] text-[#777777] mt-0.5">la campaña</span>
                </div>

                {/* Step 2 */}
                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#ECE6DA] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#F5B738]/20 flex items-center justify-center text-[#B87D0E] mb-2">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-extrabold text-[#191919]">Vendéis</h4>
                  <span className="text-[10px] text-[#777777] mt-0.5">a familiares y amigos</span>
                </div>

                {/* Step 3 */}
                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#ECE6DA] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#DF2928]/15 flex items-center justify-center text-[#DF2928] mb-2">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-extrabold text-[#191919]">Sumáis</h4>
                  <span className="text-[10px] text-[#777777] mt-0.5">cada venta os acerca</span>
                </div>

                {/* Step 4 */}
                <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#ECE6DA] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#55B585]/15 flex items-center justify-center text-[#2E8B57] mb-2">
                    <Plane className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-extrabold text-[#191919]">Viajáis</h4>
                  <span className="text-[10px] text-[#777777] mt-0.5">y disfrutáis de lo conseguido</span>
                </div>

              </div>

              {/* Star Benefit Badge */}
              <div className="bg-[#FFFDF3] rounded-xl p-3.5 border border-[#F5E7B8] flex items-center gap-2.5 text-xs text-[#444444]">
                <Star className="w-4 h-4 text-[#F5B738] fill-[#F5B738] shrink-0" />
                <span>
                  Con nuestros productos podéis obtener aproximadamente un <strong className="text-[#191919] font-bold">60% de beneficio</strong>.
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. VOSOTROS PONÉIS LAS GANAS. NOSOTROS PONEMOS EL CAMINO.                 */}
        {/* ========================================================================= */}
        <section className="bg-[#FDF7E7] rounded-3xl p-6 sm:p-10 border border-[#F5E7B8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Headline & Heart Icon */}
            <div className="md:col-span-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-[#F5E7B8] flex items-center justify-center text-[#F5B738] shrink-0 shadow-2xs">
                <Heart className="w-6 h-6 fill-[#F5B738]/20" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#191919] leading-tight">
                  Vosotros ponéis las <span className="text-[#4FB8B8]">ganas.</span> <br />
                  Nosotros ponemos el <span className="text-[#E76F38]">camino.</span>
                </h3>
              </div>
            </div>

            {/* Right: Paragraph */}
            <div className="md:col-span-6 text-xs sm:text-sm text-[#555555] leading-relaxed border-t md:border-t-0 md:border-l border-[#F5E7B8] pt-4 md:pt-0 md:pl-6">
              <p>
                Cada campaña tiene una historia diferente. Un grupo diferente. Un destino diferente. Pero todas empiezan de la misma manera: <strong>con las ganas de conseguirlo.</strong>
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. TEAL CTA BANNER (¿Listos para vuestro próximo destino?)                */}
        {/* ========================================================================= */}
        <section className="bg-[#4FB8B8] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          {/* Plane doodles in background */}
          <div className="absolute top-3 right-6 opacity-20 pointer-events-none">
            <Plane className="w-16 h-16 rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                ¿Listos para vuestro <br className="hidden sm:inline" />
                próximo <span className="text-[#F5B738]">destino?</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/34619937972?text=Hola%20Luicar!%20Queremos%20información%20para%20financiar%20nuestro%20viaje%20de%20fin%20de%20curso."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-2xl bg-white hover:bg-neutral-50 text-[#191919] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href="tel:619937972"
                className="py-3 px-6 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/40 backdrop-blur-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Llámanos: 619 937 972</span>
              </a>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 8. SIGNATURE BAR                                                          */}
        {/* ========================================================================= */}
        <div className="text-center pt-2 pb-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#555555] font-medium">
          <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
          <span>Luicar Comercial | Tradición gallega, <span className="text-[#E76F38] font-bold">impulso joven.</span></span>
        </div>

      </div>
    </div>
  );
};
