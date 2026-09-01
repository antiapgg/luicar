import React from 'react';
import { ProfitCalculator } from '../components/ProfitCalculator';

interface CalculatorViewProps {
  onNavigateHome: () => void;
  onOpenInfo: () => void;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({ onNavigateHome, onOpenInfo }) => {
  return (
    <div className="py-8 sm:py-12 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation 
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#777777] mb-6 font-medium px-2 sm:px-4">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#DF2928] transition-colors cursor-pointer"
          >
            Inicio
          </button>
          <span>&gt;</span>
          <span className="text-[#191919] font-bold">Calculadora</span>
        </nav>*/}
        
        {/* The Exact Calculator Frame */}
        <ProfitCalculator onOpenInfo={onOpenInfo} />
      </div>
    </div>
  );
};
