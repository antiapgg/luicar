import React, { useState } from 'react';
import { Calculator, Users, ShoppingBag, Package, Award, Ticket, TrendingUp, ShieldCheck, Minus, Plus, Info, ArrowRight } from 'lucide-react';
import { LuicarLogo } from './LuicarLogo';
import { ScallopShellIcon } from './GaliciaIcons';

interface ProfitCalculatorProps {
  onOpenInfo: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onOpenInfo }) => {
  const [students, setStudents] = useState<number>(25);
  const [productsPerStudent, setProductsPerStudent] = useState<number>(8);

  // Calculations
  const totalProducts = students * productsPerStudent;
  const profitPerUnit = 6; // 6€ profit per product (e.g. 200 * 6 = 1.200€)
  const totalProfit = totalProducts * profitPerUnit;
  const totalTickets = totalProducts; // 1 papeleta asociada por producto/lote
  const totalIncomePotential = totalProfit;

  const handleStudentsChange = (delta: number) => {
    setStudents((prev) => Math.max(1, Math.min(200, prev + delta)));
  };

  const handleProductsChange = (delta: number) => {
    setProductsPerStudent((prev) => Math.max(1, Math.min(50, prev + delta)));
  };

  return (
    <section id="calculadora" className="py-12 lg:py-16 bg-[#FAF9F6] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Canvas Card mimicking the exact frame of calculadora.jpeg */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#ECE6DA] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Top: Logo, Eyebrow, Main Title, Subtitle */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* Logo */}
              <div className="mb-6">
                <LuicarLogo size="md" subtitlePosition="bottom" />
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#E76F38]">
                  <Calculator className="w-4 h-4 text-[#E76F38]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[#E76F38]">
                  CALCULADORA DE CAMPAÑAS ESCOLARES
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#191919] tracking-tight leading-[1.15] mb-4">
                ¿Cuánto puede <br className="hidden sm:inline" />
                conseguir vuestra clase?
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed mb-8 max-w-xl">
                Calculad el potencial de vuestra campaña y acercaos un paso más a vuestro viaje.
              </p>

            </div>

            {/* Right Top: Asymmetrical Circular Frame with Realistic Artisan Box & Floating Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl lg:rounded-l-[140px] lg:rounded-r-3xl overflow-hidden shadow-lg bg-[#F6F4EE] border border-[#ECE6DA] aspect-[16/11] w-full">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                  alt="Caja artesanal de productos Luicar Comercial para colegios"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating circular badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#ECE6DA] p-2 flex flex-col items-center justify-center text-center">
                  <ScallopShellIcon className="w-5 h-5 mb-1" color="#4FB8B8" />
                  <p className="text-[9px] sm:text-[10px] font-bold text-[#2C2C2C] leading-tight px-1">
                    Calidad gallega que impulsa vuestros sueños
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Row of 2 Input Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
            
            {/* Input 1: Número de alumnos */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-[#2C2C2C] leading-tight">
                    Número de alumnos
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#191919] leading-tight">
                    {students}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleStudentsChange(-1)}
                  className="w-9 h-9 rounded-full border border-[#4FB8B8]/50 text-[#4FB8B8] flex items-center justify-center hover:bg-[#4FB8B8]/10 active:scale-95 transition-all cursor-pointer"
                  aria-label="Restar un alumno"
                >
                  <Minus className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStudentsChange(1)}
                  className="w-9 h-9 rounded-full bg-[#4FB8B8] text-white flex items-center justify-center hover:bg-[#43A4A4] shadow-2xs active:scale-95 transition-all cursor-pointer"
                  aria-label="Añadir un alumno"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Input 2: Productos vendidos por alumno */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5B738]/15 flex items-center justify-center text-[#F5B738] shrink-0">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-[#2C2C2C] leading-tight">
                    Productos vendidos por alumno
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#191919] leading-tight">
                    {productsPerStudent}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleProductsChange(-1)}
                  className="w-9 h-9 rounded-full border border-[#F5B738]/60 text-[#F5B738] flex items-center justify-center hover:bg-[#F5B738]/10 active:scale-95 transition-all cursor-pointer"
                  aria-label="Restar un producto"
                >
                  <Minus className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleProductsChange(1)}
                  className="w-9 h-9 rounded-full bg-[#F5B738] text-white flex items-center justify-center hover:bg-[#E5A82B] shadow-2xs active:scale-95 transition-all cursor-pointer"
                  aria-label="Añadir un producto"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>

          {/* Row of 4 Calculation Output Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
            
            {/* Metric 1: Productos vendidos */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-[#4FB8B8]">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#4FB8B8]">
                  Productos vendidos
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#4FB8B8] leading-tight">
                  {totalProducts.toLocaleString('es-ES')}
                </div>
                <span className="text-xs text-[#666666] font-medium mt-0.5 block">
                  unidades
                </span>
              </div>
            </div>

            {/* Metric 2: Beneficio estimado */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-[#F5B738]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#E5A020]">
                  Beneficio estimado
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F5B738] leading-tight">
                  {totalProfit.toLocaleString('es-ES')} €
                </div>
                <div className="flex items-center gap-1 text-xs text-[#666666] font-medium mt-0.5">
                  <span>beneficio neto</span>
                  <Info className="w-3 h-3 text-[#999999]" />
                </div>
              </div>
            </div>

            {/* Metric 3: Papeletas asociadas */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-[#E8728A]">
                  <Ticket className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#E8728A]">
                  Papeletas asociadas
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#E8728A] leading-tight">
                  {totalTickets.toLocaleString('es-ES')}
                </div>
                <div className="flex items-center gap-1 text-xs text-[#666666] font-medium mt-0.5">
                  <span>papeletas</span>
                  <Info className="w-3 h-3 text-[#999999]" />
                </div>
              </div>
            </div>

            {/* Metric 4: Potencial de ingresos */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-[#ECE6DA] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-[#4E3629]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#4E3629]">
                  Potencial de ingresos
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#191919] leading-tight">
                  {totalIncomePotential.toLocaleString('es-ES')} €
                </div>
                <div className="flex items-center gap-1 text-xs text-[#666666] font-medium mt-0.5">
                  <span>para vuestro viaje</span>
                  <Info className="w-3 h-3 text-[#999999]" />
                </div>
              </div>
            </div>

          </div>

          {/* Full-width Big Red CTA Button */}
          <div className="w-full">
            <button
              onClick={onOpenInfo}
              className="w-full py-4 px-6 rounded-2xl bg-[#DF2928] text-white text-base sm:text-lg font-bold tracking-wide shadow-md hover:bg-[#C82322] hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>QUIERO INFORMACIÓN</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust guarantee note below button */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#555555] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#4FB8B8]" />
            <span>Sin compromiso. Os asesoramos en todo el proceso.</span>
          </div>

          {/* Bottom Tradición Gallega Tagline */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#999999]">
            <ScallopShellIcon className="w-3.5 h-3.5" color="#999999" />
            <span>TRADICIÓN GALLEGA, IMPULSO JOVEN</span>
          </div>

        </div>

      </div>
    </section>
  );
};

