import React, { useState } from 'react';
import { 
  Users, 
  ShoppingBag, 
  Package, 
  Plane, 
  ShieldCheck, 
  Award, 
  Truck, 
  Heart, 
  BookOpen, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { ScallopShellIcon } from '../components/GaliciaIcons';

interface AlumnosViewProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onOpenHistoria?: () => void;
}

export const AlumnosView: React.FC<AlumnosViewProps> = ({
  onOpenInfo,
  onOpenCatalog,
  onNavigateSection,
  onOpenHistoria,
}) => {
  const [activeSupplierSlide, setActiveSupplierSlide] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Gracias a Luicar fue todo mucho más fácil. Buen producto, buena organización y un trato excelente.',
      author: 'IES O Castro',
      grade: '3º ESO',
      trip: 'Viaje a Italia 2024',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: 'Vendimos todo el lote en dos semanas. Los productos gallegos se venden solos porque a la gente les encantan.',
      author: 'Colegio Maristas',
      grade: '4º ESO',
      trip: 'Viaje a Mallorca 2024',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: 'El reparto por alumno nos ahorró días enteros de trabajo. Repetiremos el año que viene sin dudarlo.',
      author: 'IES Rosalía de Castro',
      grade: '1º Bachillerato',
      trip: 'Viaje a Berlín 2024',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=300&q=80',
    },
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">
        
        {/* ========================================================= */}
        {/* 1. HERO SECTION (Tu viaje empieza aquí.)                  */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          
          {/* Left Column: Heading, Subtitle, Buttons, Social Proof */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#191919] tracking-tight leading-[1.08]">
              Tu viaje <br />
              empieza <span className="text-[#E76F38]">aquí.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-lg">
              Ayudamos a alumnos y profesores a conseguir el dinero para ese viaje de fin de curso que recordaréis siempre.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenInfo}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#DF2928] hover:bg-[#C82322] text-white font-bold text-sm sm:text-base shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Quiero financiar mi viaje</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCatalog}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#191919] font-bold text-sm sm:text-base border border-[#D5CEC0] shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Ver catálogos</span>
                <BookOpen className="w-4 h-4 text-[#555555]" />
              </button>
            </div>

            {/* Social Proof (+500 centros) */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Alumna"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Alumno"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Alumna"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Alumno"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#444444]">
                <strong className="text-[#191919] font-bold">+500 centros</strong> ya confían en nosotros
              </span>
            </div>
          </div>

          {/* Right Column: Students outdoors with map & Arch frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[36px] lg:rounded-l-[220px] lg:rounded-r-[40px] overflow-hidden shadow-xl bg-[#EDE7DA] aspect-[4/3] sm:aspect-[16/11] w-full border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
                alt="Grupo de alumnos planeando su viaje de fin de curso con un mapa"
                className="w-full h-full object-cover object-center"
              />

              {/* Teal Scallop Pill Badge overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#4FB8B8]/95 backdrop-blur-md text-white shadow-lg border border-white/20">
                <ScallopShellIcon className="w-5 h-5 text-white" color="#FFFFFF" />
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  Tradición gallega, impulso joven.
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* 2. 4 VALUE PILLARS (Confianza, Calidad, Entrega, Cerca)   */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: CONFIANZA */}
          <div className="bg-white rounded-2xl p-5 border border-[#ECE6DA] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#191919]">CONFIANZA</h4>
              <p className="text-xs text-[#666666] font-medium mt-0.5">Más de 20 años a vuestro lado</p>
            </div>
          </div>

          {/* Card 2: CALIDAD */}
          <div className="bg-white rounded-2xl p-5 border border-[#ECE6DA] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B738]/20 flex items-center justify-center text-[#B87D0E] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#191919]">CALIDAD</h4>
              <p className="text-xs text-[#666666] font-medium mt-0.5">Productos artesanos y seleccionados</p>
            </div>
          </div>

          {/* Card 3: ENTREGA FÁCIL */}
          <div className="bg-white rounded-2xl p-5 border border-[#ECE6DA] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#DF2928]/15 flex items-center justify-center text-[#DF2928] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#191919]">ENTREGA FÁCIL</h4>
              <p className="text-xs text-[#666666] font-medium mt-0.5">Servicio especial: reparto por alumno</p>
            </div>
          </div>

          {/* Card 4: CERCA DE TI */}
          <div className="bg-white rounded-2xl p-5 border border-[#ECE6DA] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#55B585]/15 flex items-center justify-center text-[#2E8B57] shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#191919]">CERCA DE TI</h4>
              <p className="text-xs text-[#666666] font-medium mt-0.5">Atención personal y constante</p>
            </div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* 3. ¿CÓMO FUNCIONA? (4 Steps)                              */}
        {/* ========================================================= */}
        <section id="como-funciona" className="text-center space-y-8">
          
          {/* Header */}
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] mb-3">
              ¿Cómo funciona?
            </h2>
            {/* 4-color stripe underline */}
            <div className="flex items-center justify-center gap-1.5 w-36 mx-auto h-1">
              <div className="w-8 h-full bg-[#4FB8B8] rounded-full" />
              <div className="w-8 h-full bg-[#F5B738] rounded-full" />
              <div className="w-8 h-full bg-[#191919] rounded-full" />
              <div className="w-8 h-full bg-[#DF2928] rounded-full" />
            </div>
          </div>

          {/* 4 Steps Row with arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1: Organizáis */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center relative group hover:border-[#4FB8B8] transition-colors">
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#ECE6DA] flex items-center justify-center text-[#444444]">
                  <Users className="w-7 h-7 text-[#444444]" />
                </div>
                <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#4FB8B8] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  1
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-1.5">Organizáis</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Elegís la campaña y los productos.
              </p>
            </div>

            {/* Step 2: Vendéis */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center relative group hover:border-[#F5B738] transition-colors">
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#ECE6DA] flex items-center justify-center text-[#444444]">
                  <ShoppingBag className="w-7 h-7 text-[#444444]" />
                </div>
                <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#F5B738] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  2
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-1.5">Vendéis</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                A familiares, amigos y conocidos.
              </p>
            </div>

            {/* Step 3: Nosotros nos encargamos */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center relative group hover:border-[#191919] transition-colors">
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#ECE6DA] flex items-center justify-center text-[#444444]">
                  <Package className="w-7 h-7 text-[#444444]" />
                </div>
                <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#191919] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  3
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-1.5">Nosotros nos encargamos</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Preparamos y repartimos todo por alumno.
              </p>
            </div>

            {/* Step 4: Viajáis */}
            <div className="bg-white rounded-2xl p-6 border border-[#ECE6DA] shadow-2xs flex flex-col items-center text-center relative group hover:border-[#DF2928] transition-colors">
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#ECE6DA] flex items-center justify-center text-[#444444]">
                  <Plane className="w-7 h-7 text-[#444444]" />
                </div>
                <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#DF2928] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  4
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#191919] mb-1.5">Viajáis</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Disfrutáis del viaje que habéis conseguido.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. PRODUCTOS QUE SUMAN (4 Categories)                     */}
        {/* ========================================================= */}
        <section id="productos" className="space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Productos que <span className="text-[#4FB8B8]">suman</span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              Sabores de Galicia que enamoran y ayudan a llegar más lejos.
            </p>
          </div>

          {/* 4 Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Repostería artesana */}
            <div 
              onClick={onOpenCatalog}
              className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                  alt="Repostería artesana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-sm sm:text-base text-[#191919] mb-1">
                  Repostería artesana
                </h3>
                <p className="text-xs text-[#777777]">
                  Tradición y recetas que saben a casa.
                </p>
              </div>
            </div>

            {/* 2. Quesos gallegos */}
            <div 
              onClick={onOpenCatalog}
              className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80"
                  alt="Quesos gallegos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-sm sm:text-base text-[#191919] mb-1">
                  Quesos gallegos
                </h3>
                <p className="text-xs text-[#777777]">
                  De nuestras queserías locales.
                </p>
              </div>
            </div>

            {/* 3. Miel y conservas */}
            <div 
              onClick={onOpenCatalog}
              className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80"
                  alt="Miel y conservas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-sm sm:text-base text-[#191919] mb-1">
                  Miel y conservas
                </h3>
                <p className="text-xs text-[#777777]">
                  Naturales, auténticos y de calidad.
                </p>
              </div>
            </div>

            {/* 4. Y mucho más... */}
            <div 
              onClick={onOpenCatalog}
              className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80"
                  alt="Y mucho más..."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-sm sm:text-base text-[#191919] mb-1">
                  Y mucho más...
                </h3>
                <p className="text-xs text-[#777777]">
                  Descubre todos nuestros productos.
                </p>
              </div>
            </div>

          </div>

          {/* Link below */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E76F38] hover:text-[#DF2928] transition-colors cursor-pointer"
            >
              <span>Ver catálogos completos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </section>

        {/* ========================================================= */}
        {/* 5. SOMOS LUICAR (De una familia a miles de historias)     */}
        {/* ========================================================= */}
        <section id="quienes-somos" className="bg-[#EBF6F5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D5ECE9] shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Vintage Photo with Heart Badge */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-900 border-2 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=800&q=80"
                  alt="Luis y Carmen, fundadores de Luicar"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute -bottom-3 left-4 sm:left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#4FB8B8] text-white text-xs font-bold shadow-md">
                <Heart className="w-4 h-4 fill-white" />
                <span>Una historia de familia, hecha para ayudaros.</span>
              </div>
            </div>

            {/* Right: Story Text */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="text-xs font-black uppercase tracking-widest text-[#4FB8B8]">
                SOMOS LUICAR
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919] leading-tight">
                De una familia a miles de <span className="text-[#4FB8B8]">historias</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                Luicar nació con Luis y Carmen, nuestros abuelos, y con una idea muy sencilla: trabajar cerca de las personas y ofrecer productos de calidad.
              </p>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                Hoy seguimos siendo una empresa familiar que trabaja con ilusión para acompañar a colegios e institutos en uno de los momentos más especiales: <strong>hacer realidad su viaje de fin de curso.</strong>
              </p>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenHistoria) {
                      onOpenHistoria();
                    } else {
                      onOpenInfo();
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4FB8B8] hover:text-[#2C8585] transition-colors cursor-pointer"
                >
                  <span>Conócenos mejor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Scallop shell & Wave doodle */}
                <div className="hidden sm:flex items-center gap-2 text-[#4FB8B8]/60">
                  <div className="w-16 h-0.5 bg-[#4FB8B8]/30 rounded-full" />
                  <ScallopShellIcon className="w-8 h-8" color="#4FB8B8" />
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* 6. TRABAJAMOS CON LOS MEJORES (Proveedores Gallegos)      */}
        {/* ========================================================= */}
        <section id="proveedores" className="space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
                Trabajamos con los mejores
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Seleccionamos cuidadosamente a proveedores gallegos con amplia trayectoria artesanal y un firme compromiso con la calidad y la tradición.
              </p>
              <button
                type="button"
                onClick={onOpenCatalog}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4FB8B8] hover:text-[#2C8585] transition-colors cursor-pointer pt-1"
              >
                <span>Conoce a nuestros proveedores</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Supplier Cards */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                
                {/* Brand 1: TUPANA */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] shadow-2xs flex flex-col items-center justify-center text-center h-28 hover:shadow-sm transition-all">
                  <div className="text-base sm:text-lg font-serif font-black tracking-widest text-[#4E3629]">
                    TUPANA
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-wider font-semibold mt-1">
                    Confitería desde 1931
                  </span>
                </div>

                {/* Brand 2: IGLESIAS */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] shadow-2xs flex flex-col items-center justify-center text-center h-28 hover:shadow-sm transition-all">
                  <div className="text-base sm:text-lg font-serif font-black tracking-widest text-[#4E3629]">
                    IGLESIAS
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-wider font-semibold mt-1">
                    Desde 1905
                  </span>
                </div>

                {/* Brand 3: Don Crisanto */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] shadow-2xs flex flex-col items-center justify-center text-center h-28 hover:shadow-sm transition-all">
                  <div className="text-base sm:text-lg font-serif italic font-bold text-[#4E3629]">
                    Don Crisanto
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-wider font-semibold mt-1">
                    Quesos con historia
                  </span>
                </div>

                {/* Brand 4: Casa do Mel */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] shadow-2xs flex flex-col items-center justify-center text-center h-28 hover:shadow-sm transition-all">
                  <div className="text-base sm:text-lg font-serif font-black tracking-wide text-[#4E3629]">
                    Casa do Mel
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-wider font-semibold mt-1">
                    Desde 1978
                  </span>
                </div>

              </div>

              {/* Carousel Pagination Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4FB8B8]" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* 7. TESTIMONIAL QUOTE (IES O Castro)                       */}
        {/* ========================================================= */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ECE6DA] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Quote */}
            <div className="md:col-span-8 flex items-start gap-4">
              <span className="text-5xl sm:text-6xl font-serif text-[#F5B738] leading-none select-none">
                “
              </span>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-[#2C2C2C] leading-relaxed pt-2">
                {testimonials[currentTestimonialIndex].quote}
              </p>
            </div>

            {/* Right: Author & Nav buttons */}
            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-neutral-100">
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FAF9F6]"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-[#191919]">
                    {testimonials[currentTestimonialIndex].author}
                  </h4>
                  <p className="text-xs text-[#777777]">
                    {testimonials[currentTestimonialIndex].grade}
                  </p>
                  <p className="text-[11px] font-semibold text-[#4FB8B8]">
                    {testimonials[currentTestimonialIndex].trip}
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevTestimonial}
                  className="w-8 h-8 rounded-full border border-[#D5CEC0] flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Anterior testimonio"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextTestimonial}
                  className="w-8 h-8 rounded-full border border-[#D5CEC0] flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. BIG RED CTA CARD (¿Listos para vuestro próximo destino?) */}
        {/* ========================================================= */}
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

        {/* ========================================================= */}
        {/* 9. SIGNATURE BAR                                          */}
        {/* ========================================================= */}
        <div className="text-center pt-2 pb-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#555555] font-medium">
          <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
          <span>Luicar Comercial | Tradición gallega, <span className="text-[#E76F38] font-bold">impulso joven.</span></span>
        </div>

      </div>
    </div>
  );
};
