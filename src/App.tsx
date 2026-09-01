import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHeroView } from './views/HomeHeroView';
import { AlumnosView } from './views/AlumnosView';
import { PontevedraView } from './views/PontevedraView';
import { HistoriaView } from './views/HistoriaView';
import { CatalogView } from './views/CatalogView';
import { CalculatorView } from './views/CalculatorView';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { InfoModal } from './components/InfoModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export type AppView = 'home' | 'alumnos' | 'pontevedra' | 'historia' | 'catalogo' | 'calculadora';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string | undefined>(undefined);

  // Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'alumnos') {
        setCurrentView('alumnos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'historia' || hash === 'conocenos' || hash === 'nuestra-historia' || hash === 'sobre-nosotros' || hash === 'quienes-somos') {
        setCurrentView('historia');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'pontevedra') {
        setCurrentView('pontevedra');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'catalogo' || hash === 'productos') {
        setCurrentView('catalogo');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'calculadora') {
        setCurrentView('calculadora');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'home' || hash === 'inicio' || hash === '') {
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'como-funciona' || hash === 'proveedores' || hash === 'contacto' || hash === 'ventajas' || hash === 'faqs') {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: AppView, sectionId?: string) => {
    setCurrentView(view);
    window.location.hash = sectionId || view;
    if (sectionId && sectionId !== 'inicio') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenInfo = (productName?: string) => {
    setPreselectedProduct(productName);
    setIsInfoModalOpen(true);
  };

  const handleOpenCatalog = () => {
    handleNavigate('catalogo');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E1E1E] antialiased selection:bg-[#4FB8B8]/20 selection:text-[#1E1E1E]">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenInfo={() => handleOpenInfo()}
      />

      {/* Main Views Container */}
      <main className="flex-1">
        
        {/* VIEW 1: INICIO / HERO (hero1.jpeg & hero2.jpeg) */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-200">
            <HomeHeroView
              onOpenInfo={() => handleOpenInfo()}
              onOpenCatalog={handleOpenCatalog}
              onNavigateSection={(sectionId) => handleNavigate('home', sectionId)}
            />
          </div>
        )}

        {/* VIEW 2: ALUMNOS (alumnos.jpeg) */}
        {currentView === 'alumnos' && (
          <div className="animate-in fade-in duration-200">
            <AlumnosView
              onOpenInfo={() => handleOpenInfo()}
              onOpenCatalog={handleOpenCatalog}
              onNavigateSection={(sectionId) => handleNavigate('alumnos', sectionId)}
              onOpenHistoria={() => handleNavigate('historia')}
            />
          </div>
        )}

        {/* VIEW 3: HISTORIA / CONÓCENOS (historia1.jpeg & historia2.jpeg) */}
        {currentView === 'historia' && (
          <div className="animate-in fade-in duration-200">
            <HistoriaView
              onOpenInfo={() => handleOpenInfo()}
              onOpenCatalog={handleOpenCatalog}
              onNavigateHome={() => handleNavigate('home', 'inicio')}
            />
          </div>
        )}

        {/* VIEW 4: PONTEVEDRA (pontevedra.jpeg) */}
        {currentView === 'pontevedra' && (
          <div className="animate-in fade-in duration-200">
            <PontevedraView
              onOpenInfo={() => handleOpenInfo()}
              onOpenCatalog={handleOpenCatalog}
              onNavigateView={(view) => handleNavigate(view as AppView)}
            />
          </div>
        )}

        {/* VIEW 5: CATÁLOGO DE PRODUCTOS (catalogo.jpeg) */}
        {currentView === 'catalogo' && (
          <div className="animate-in fade-in duration-200">
            <CatalogView
              onNavigateHome={() => handleNavigate('home', 'inicio')}
              onOpenInfo={(productName) => handleOpenInfo(productName)}
              onOpenFullPdf={() => setIsCatalogModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 6: CALCULADORA DE BENEFICIOS (calculadora.jpeg) */}
        {currentView === 'calculadora' && (
          <div className="animate-in fade-in duration-200">
            <CalculatorView
              onNavigateHome={() => handleNavigate('home', 'inicio')}
              onOpenInfo={() => handleOpenInfo()}
            />
          </div>
        )}

      </main>

      {/* Persistent Global Footer */}
      <Footer
        onOpenInfo={() => handleOpenInfo()}
        onOpenCatalog={handleOpenCatalog}
        onNavigateView={(view, sectionId) => handleNavigate(view as AppView, sectionId)}
      />

      {/* Full Dossier PDF modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
        onOpenInfo={(productName) => handleOpenInfo(productName)}
      />

      {/* Contact / Information Request Modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        preselectedProduct={preselectedProduct}
      />

      {/* WhatsApp Quick Float Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
