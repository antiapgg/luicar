import React, { useState, useEffect } from 'react';
import { LuicarLogo } from './LuicarLogo';
import { Phone, Menu, X, ChevronRight, MapPin } from 'lucide-react';
import { AppView } from '../App';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView, sectionId?: string) => void;
  onOpenInfo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dedicated nav links when in Pontevedra view vs General Alumnos view
  const isPontevedra = currentView === 'pontevedra';

  const alumnosNavLinks = [
    { name: 'Inicio', id: 'inicio', targetView: 'home' as AppView, sectionId: 'inicio' },
    { name: 'Cómo funciona', id: 'como-funciona', targetView: 'home' as AppView, sectionId: 'como-funciona' },
    { name: 'Alumnos', id: 'alumnos', targetView: 'alumnos' as AppView },
    { name: 'Catálogo', id: 'catalogo', targetView: 'catalogo' as AppView },
    { name: 'Conócenos', id: 'conocenos', targetView: 'historia' as AppView },
  ];

  const pontevedraNavLinks = [
    { name: 'Inicio', id: 'inicio', targetView: 'pontevedra' as AppView, sectionId: 'inicio' },
    { name: 'Cómo funciona', id: 'como-funciona', targetView: 'pontevedra' as AppView, sectionId: 'como-funciona' },
    { name: 'Productos', id: 'productos', targetView: 'pontevedra' as AppView, sectionId: 'productos' },
    { name: 'Ventajas', id: 'ventajas', targetView: 'pontevedra' as AppView, sectionId: 'ventajas' },
    { name: 'FAQs', id: 'faqs', targetView: 'pontevedra' as AppView, sectionId: 'faqs' },
  ];

  const navLinks = isPontevedra ? pontevedraNavLinks : alumnosNavLinks;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-100 py-3'
          : 'bg-white/90 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & City Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home', 'inicio')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FB8B8] rounded-lg cursor-pointer text-left"
            aria-label="Luicar Comercial Inicio"
          >
            <LuicarLogo size="md" subtitlePosition="bottom" />
          </button>

          {/* Quick city toggle pill */}
          <button
            type="button"
            onClick={() => onNavigate(isPontevedra ? 'home' : 'pontevedra')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              isPontevedra
                ? 'bg-[#E76F38]/10 text-[#E76F38] border-[#E76F38]/30 hover:bg-[#E76F38]/20'
                : 'bg-[#FAF9F6] text-[#666666] border-[#ECE6DA] hover:text-[#191919]'
            }`}
            title={isPontevedra ? 'Ver versión general' : 'Ver versión Pontevedra'}
          >
            <MapPin className="w-3 h-3 text-[#E76F38]" />
            <span>{isPontevedra ? 'Pontevedra' : 'Pontevedra'}</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#333333]">
          {navLinks.map((link) => {
            const isActive = currentView === link.targetView && (!link.sectionId || link.sectionId === 'inicio');
            return (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  if (link.id === 'contacto' && !isPontevedra) {
                    onOpenInfo();
                  } else {
                    onNavigate(link.targetView, link.sectionId);
                  }
                }}
                className={`relative py-1 transition-colors cursor-pointer hover:text-[#111111] ${
                  isActive ? 'text-[#111111] font-semibold' : 'text-[#4A4A4A]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E76F38] rounded-full" />
                )}
              </button>
            );
          })}

          {/* Quick tab for Profit Calculator */}
          <button
            type="button"
            onClick={() => onNavigate('calculadora')}
            className={`relative py-1 transition-colors cursor-pointer hover:text-[#111111] ${
              currentView === 'calculadora' ? 'text-[#111111] font-semibold' : 'text-[#777777] text-xs font-semibold'
            }`}
          >
            Calculadora
            {currentView === 'calculadora' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E76F38] rounded-full" />
            )}
          </button>
        </nav>

        {/* Action Phone Pill Button (986 123 456 in Pontevedra view, 619 937 972 otherwise) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={isPontevedra ? 'tel:986123456' : 'tel:619937972'}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F6] border border-[#E8E4DC] text-[#2C2C2C] text-sm font-semibold hover:bg-[#F3EFE7] hover:border-[#D5CEC0] transition-all shadow-2xs"
            title="Llámanos directamente"
          >
            <Phone className="w-3.5 h-3.5 text-[#4E3629]" />
            <span className="tracking-wide">{isPontevedra ? '986 123 456' : '619 937 972'}</span>
          </a>

          <button
            type="button"
            onClick={onOpenInfo}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#E76F38] text-white text-xs font-bold hover:bg-[#D45E28] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
          >
            Pide Información
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          
          {/* City / Main switch in mobile menu */}
          <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
                !isPontevedra ? 'bg-[#4FB8B8] text-white' : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              Principal
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('pontevedra');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
                isPontevedra ? 'bg-[#E76F38] text-white' : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              Pontevedra
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.targetView && (!link.sectionId || link.sectionId === 'inicio');
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (link.id === 'contacto' && !isPontevedra) {
                      onOpenInfo();
                    } else {
                      onNavigate(link.targetView, link.sectionId);
                    }
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base w-full text-left ${
                    isActive
                      ? 'bg-[#FAF9F6] text-[#E76F38] font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('calculadora');
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base w-full text-left text-neutral-700 hover:bg-neutral-50"
            >
              <span>Calculadora de beneficios</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={isPontevedra ? 'tel:986123456' : 'tel:619937972'}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] text-neutral-800 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#4E3629]" />
              <span>Llamar: {isPontevedra ? '986 123 456' : '619 937 972'}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfo();
              }}
              className="w-full py-3 rounded-xl bg-[#E76F38] text-white text-sm font-bold shadow-md hover:bg-[#D45E28] transition-colors cursor-pointer"
            >
              QUIERO FINANCIAR MI VIAJE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
