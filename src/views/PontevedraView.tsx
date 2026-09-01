import React, { useState } from 'react';
import { 
  MessageSquare, 
  Package, 
  Users, 
  Euro, 
  Heart, 
  Check, 
  BookOpen, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Clock, 
  Gift, 
  ShieldCheck, 
  Award,
  MapPin,
  Send,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { ScallopShellIcon } from '../components/GaliciaIcons';

interface PontevedraViewProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
  onNavigateView?: (view: string) => void;
}

export const PontevedraView: React.FC<PontevedraViewProps> = ({
  onOpenInfo,
  onOpenCatalog,
}) => {
  // FAQs Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    centro: '',
    telefono: '',
    email: '',
    detalles: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      q: '¿Tenéis pedido mínimo?',
      a: 'No exigimos un pedido mínimo obligatorio para comenzar la campaña en centros de Pontevedra y comarca. Nos adaptamos tanto a aulas pequeñas como a grupos grandes de varios cursos.',
    },
    {
      q: '¿Cuánto tarda en llegar el pedido?',
      a: 'Una vez cerrado el recuento de pedidos de los alumnos, la entrega en el centro educativo se realiza en un plazo habitual de 5 a 7 días hábiles, empaquetado y organizado individualmente por alumno.',
    },
    {
      q: '¿Qué formas de pago aceptáis?',
      a: 'Aceptamos transferencia bancaria, Bizum para grupos escolares y pago tras la recaudación. No tenéis que adelantar dinero antes de repartir y cobrar los productos.',
    },
    {
      q: '¿Podemos personalizar los materiales?',
      a: 'Sí, facilitamos catálogos digitales e impresos, talonarios y hojas de pedido personalizadas con el nombre del centro, curso y objetivo del viaje para Pontevedra.',
    },
    {
      q: '¿Y si sobra producto?',
      a: 'Ofrecemos garantía de devolución para los productos no vendidos en su embalaje original, para que el centro y las familias no asuman ningún riesgo económico.',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ nombre: '', centro: '', telefono: '', email: '', detalles: '' });
    }, 6000);
  };

  const productCategories = [
    {
      name: 'Repostería',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Chocolates',
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Quesos',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Miel',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Regalos',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO: Financiar viajes de fin de curso en Pontevedra                   */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E76F38]">
              <span className="w-6 h-[2px] bg-[#E76F38] inline-block" />
              <span>CAMPAÑAS PARA COLEGIOS E INSTITUTOS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#191919] tracking-tight leading-[1.08]">
              Financiar viajes <br />
              de fin de curso <br />
              <span className="text-[#191919]">en Pontevedra</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-lg">
              Productos gallegos de calidad para que vuestro grupo consiga el viaje que tanto merece.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenInfo}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E76F38] hover:bg-[#D45E28] text-white font-bold text-sm sm:text-base shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Solicitar información</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCatalog}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#191919] font-bold text-sm sm:text-base border border-[#D5CEC0] shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Ver productos</span>
                <BookOpen className="w-4 h-4 text-[#666666]" />
              </button>
            </div>

            {/* 3 Bullet Features */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-100 text-xs text-[#555555] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Sin riesgo para el centro</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F5B738]/20 flex items-center justify-center text-[#B87D0E]">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Productos gallegos de calidad</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E8728A]/20 flex items-center justify-center text-[#E8728A]">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span>Cercanía y trato personalizado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Students & Circular Seal */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[36px] lg:rounded-l-[200px] lg:rounded-r-[36px] overflow-hidden shadow-xl bg-[#EDE7DA] aspect-[4/3] sm:aspect-[16/11] w-full border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
                alt="Alumnos en Pontevedra con la caja de productos Luicar Comercial"
                className="w-full h-full object-cover object-center"
              />

              {/* Floating Circular Traditional Seal "TRADICIÓN GALEGA • IMPULSO XOVEN" */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#ECE6DA] p-2 flex flex-col items-center justify-center text-center">
                <div className="relative flex flex-col items-center justify-center">
                  <span className="text-[7.5px] sm:text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#4E3629] block leading-none mb-1">
                    TRADICIÓN GALEGA
                  </span>
                  <ScallopShellIcon className="w-5 h-5 sm:w-6 sm:h-6 my-0.5" color="#4FB8B8" />
                  <span className="text-[7.5px] sm:text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#4E3629] block leading-none mt-1">
                    IMPULSO XOVEN
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. CÓMO FINANCIAR UN VIAJE DE FIN DE CURSO (5 Steps with curved lines)    */}
        {/* ========================================================================= */}
        <section id="como-funciona" className="space-y-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Cómo financiar un viaje de fin de curso
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#D5CEC0] shadow-2xs flex items-center justify-center text-[#444444] group-hover:border-[#4FB8B8] transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#555555]" />
                </div>
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#4FB8B8] text-white text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
              </div>
              <p className="text-xs text-[#555555] font-medium leading-relaxed max-w-[160px]">
                Nos contáis vuestro objetivo y fechas del viaje.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#D5CEC0] shadow-2xs flex items-center justify-center text-[#444444] group-hover:border-[#4FB8B8] transition-colors">
                  <Package className="w-5 h-5 text-[#555555]" />
                </div>
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#4FB8B8] text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
              </div>
              <p className="text-xs text-[#555555] font-medium leading-relaxed max-w-[160px]">
                Preparamos la campaña con productos gallegos de calidad.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#D5CEC0] shadow-2xs flex items-center justify-center text-[#444444] group-hover:border-[#4FB8B8] transition-colors">
                  <Users className="w-5 h-5 text-[#555555]" />
                </div>
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#4FB8B8] text-white text-[10px] font-bold flex items-center justify-center">
                  3
                </span>
              </div>
              <p className="text-xs text-[#555555] font-medium leading-relaxed max-w-[160px]">
                Cada alumno vende a familiares, amigos y vecinos.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#D5CEC0] shadow-2xs flex items-center justify-center text-[#444444] group-hover:border-[#4FB8B8] transition-colors">
                  <Euro className="w-5 h-5 text-[#555555]" />
                </div>
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#4FB8B8] text-white text-[10px] font-bold flex items-center justify-center">
                  4
                </span>
              </div>
              <p className="text-xs text-[#555555] font-medium leading-relaxed max-w-[160px]">
                Recogéis los pedidos y nosotros nos encargamos del resto.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#D5CEC0] shadow-2xs flex items-center justify-center text-[#444444] group-hover:border-[#4FB8B8] transition-colors">
                  <Heart className="w-5 h-5 text-[#555555]" />
                </div>
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#4FB8B8] text-white text-[10px] font-bold flex items-center justify-center">
                  5
                </span>
              </div>
              <p className="text-xs text-[#555555] font-medium leading-relaxed max-w-[160px]">
                Entrega rápida y dinero para vuestro viaje.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PRODUCTOS DISPONIBLES (Left text & 5 Category Cards)                   */}
        {/* ========================================================================= */}
        <section id="productos" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
                Productos disponibles
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Seleccionamos lo mejor de Galicia para ofrecer productos que enamoran y que siempre se venden.
              </p>
              <button
                type="button"
                onClick={onOpenCatalog}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E76F38] hover:text-[#D45E28] transition-colors cursor-pointer pt-1"
              >
                <span>Ver catálogo completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: 5 Thumbnails */}
            <div className="lg:col-span-8 relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                {productCategories.map((item) => (
                  <div
                    key={item.name}
                    onClick={onOpenCatalog}
                    className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group text-center"
                  >
                    <div className="aspect-square bg-neutral-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2.5">
                      <span className="text-xs font-bold text-[#191919]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation circle arrow button */}
              <button
                type="button"
                onClick={onOpenCatalog}
                className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D5CEC0] shadow-md items-center justify-center text-neutral-700 hover:bg-neutral-50 transition-all cursor-pointer"
                aria-label="Ver más productos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VENTAJAS QUE FACILITAN TODO EL PROCESO (Para Profesores + Mapa Galicia)*/}
        {/* ========================================================================= */}
        <section id="ventajas" className="bg-[#EBF6F5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D5ECE9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Students reviewing dossier */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-900 border-2 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"
                  alt="Alumnos de Pontevedra revisando el catálogo escolar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle: Text and Checklist */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E76F38]">
                <span className="w-5 h-[2px] bg-[#E76F38] inline-block" />
                <span>PARA PROFESORES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] leading-tight">
                Ventajas que facilitan <br />
                todo el proceso
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#444444]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                  <span>Sin inversión inicial ni riesgos para el centro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                  <span>Materiales de campaña gratuitos y personalizados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                  <span>Productos gallegos de calidad que se venden solos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                  <span>Atención cercana y acompañamiento en todo momento.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                  <span>Entrega en el centro en la fecha acordada.</span>
                </li>
              </ul>
            </div>

            {/* Right: Galicia Outline Map with Pontevedra Pin */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-xs rounded-2xl border border-white/80">
              <div className="relative w-40 h-40">
                {/* SVG Outline of Galicia */}
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#4FB8B8]/20 fill-current stroke-[#4FB8B8] stroke-1">
                  <path d="M 40 40 Q 90 20 140 30 Q 180 50 170 100 Q 160 160 110 180 Q 50 170 30 130 Q 15 80 40 40 Z" />
                </svg>

                {/* Pin on Pontevedra (South-West Galicia) */}
                <div className="absolute bottom-10 left-8 flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E76F38] border-2 border-white animate-pulse shadow-sm" />
                  <span className="text-[11px] font-extrabold text-[#191919] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-neutral-200">
                    Pontevedra
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PEDIDOS ORGANIZADOS POR ALUMNO (3 Cards)                              */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-4 space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
                Pedidos organizados <br />
                por alumno
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Cada alumno tiene su listado de pedidos y cobros, facilitando el control y la entrega.
              </p>
            </div>

            {/* Right: 3 Feature Blocks */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Card 1: Listados individuales */}
              <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#ECE6DA] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#191919]">Listados individuales</h4>
                  <p className="text-[11px] text-[#666666] mt-0.5 leading-relaxed">
                    Cada alumno gestiona sus pedidos de forma sencilla.
                  </p>
                </div>
              </div>

              {/* Card 2: Control de entregas */}
              <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#ECE6DA] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B738]/20 flex items-center justify-center text-[#B87D0E] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#191919]">Control de entregas</h4>
                  <p className="text-[11px] text-[#666666] mt-0.5 leading-relaxed">
                    Sabéis en todo momento qué falta por entregar.
                  </p>
                </div>
              </div>

              {/* Card 3: Liquidación clara */}
              <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#ECE6DA] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8728A]/20 flex items-center justify-center text-[#E8728A] shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#191919]">Liquidación clara</h4>
                  <p className="text-[11px] text-[#666666] mt-0.5 leading-relaxed">
                    Al final de la campaña, dinero recaudado para el viaje.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. BOTTOM: PREGUNTAS FRECUENTES + FORMULARIO "HABLEMOS DE VUESTRO VIAJE"  */}
        {/* ========================================================================= */}
        <section id="faqs" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preguntas frecuentes */}
          <div className="lg:col-span-5 bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-[#ECE6DA] space-y-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#191919]">
              Preguntas frecuentes
            </h3>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-xl border border-[#ECE6DA] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-bold text-[#191919] flex items-center justify-between gap-2 hover:bg-neutral-50 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-[#E76F38]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-xs text-[#666666] leading-relaxed border-t border-neutral-100 pt-2 animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onOpenInfo}
              className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#D5CEC0] text-xs font-bold text-[#191919] hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Ver todas las preguntas
            </button>
          </div>

          {/* Right Column: Hablemos de vuestro próximo viaje Form */}
          <div id="contacto" className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-[#ECE6DA] space-y-4 shadow-2xs">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#191919]">
                Hablemos de vuestro próximo viaje
              </h3>
              <p className="text-xs text-[#666666] mt-1">
                Cuéntanos vuestro proyecto y os enviaremos toda la información sin compromiso.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">¡Solicitud recibida para Pontevedra!</h4>
                <p className="text-xs text-emerald-700">
                  Nos pondremos en contacto con vuestro centro en menos de 24 horas para enviaros muestras y el dossier escolar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre y apellidos"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full py-2.5 px-3.5 bg-white rounded-xl border border-[#D5CEC0] text-xs text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#E76F38]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Centro educativo"
                      required
                      value={formData.centro}
                      onChange={(e) => setFormData({ ...formData, centro: e.target.value })}
                      className="w-full py-2.5 px-3.5 bg-white rounded-xl border border-[#D5CEC0] text-xs text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#E76F38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full py-2.5 px-3.5 bg-white rounded-xl border border-[#D5CEC0] text-xs text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#E76F38]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3.5 bg-white rounded-xl border border-[#D5CEC0] text-xs text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#E76F38]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos vuestro viaje (destino, fechas, nº de alumnos...)"
                    value={formData.detalles}
                    onChange={(e) => setFormData({ ...formData, detalles: e.target.value })}
                    className="w-full py-2.5 px-3.5 bg-white rounded-xl border border-[#D5CEC0] text-xs text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#E76F38] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#E76F38] hover:bg-[#D45E28] text-white text-xs sm:text-sm font-bold shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Enviar solicitud →
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-[#666666]">
                    <Check className="w-3.5 h-3.5 text-[#4FB8B8]" />
                    <span>Te respondemos en menos de 24 horas</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 7. PONTEVEDRA SIGNATURE BAR                                              */}
        {/* ========================================================================= */}
        <div className="text-center pt-2 pb-2 flex flex-col items-center justify-center gap-1 text-xs text-[#555555]">
          <div className="flex items-center gap-2">
            <ScallopShellIcon className="w-4 h-4" color="#4FB8B8" />
            <span className="font-bold text-[#191919]">Luicar Comercial</span>
            <span>•</span>
            <span>Productos gallegos para grandes objetivos.</span>
          </div>
          <div className="text-[11px] text-[#888888] font-medium">
            <span className="text-[#E76F38] font-semibold">Pontevedra</span> • Galicia
          </div>
        </div>

      </div>
    </div>
  );
};
