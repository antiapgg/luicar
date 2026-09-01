import React from 'react';
import { LuicarLogo } from './LuicarLogo';
import { ScallopShellIcon } from './GaliciaIcons';
import { Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onOpenInfo: () => void;
  onOpenCatalog: () => void;
  onNavigateView?: (view: 'home' | 'catalogo' | 'calculadora' | 'alumnos' | 'pontevedra' | 'historia', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo, onOpenCatalog, onNavigateView }) => {
  return (
    <footer id="contacto" className="bg-[#f9fae1] text-[#2C2C2C] pt-16 pb-12 border-t border-[#ECECC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#ECECC0]/80">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/80 p-2.5 rounded-2xl inline-block shadow-2xs border border-[#ECECC0]">
              <LuicarLogo size="md" subtitlePosition="bottom" />
            </div>
            
            <p className="text-sm text-[#4E4E30] max-w-sm leading-relaxed">
              Especialistas en campañas de financiación para viajes de fin de curso y etapas escolares en colegios e institutos de toda España, con el respaldo y la calidad de los productos de Galicia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 text-xs font-bold text-[#3B3B24] border border-[#ECECC0] shadow-2xs">
                <ScallopShellIcon className="w-3.5 h-3.5" color="#4FB8B8" />
                <span>Desde Galicia para toda España</span>
              </div>
            </div>
          </div>

          {/* Col 3: Secciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#191919]">Navegación</h4>
            <ul className="space-y-2 text-sm text-[#4E4E30]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('historia') : null}
                  className="hover:text-[#4FB8B8] font-bold text-[#191919] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ScallopShellIcon className="w-3.5 h-3.5" color="#4FB8B8" />
                  <span>Conócenos (Nuestra Historia)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('pontevedra') : null}
                  className="hover:text-[#E76F38] font-semibold text-[#191919] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E76F38]" />
                  <span>Pontevedra (Viajes de Fin de Curso)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('alumnos') : null}
                  className="hover:text-[#DF2928] font-medium text-[#191919] transition-colors cursor-pointer text-left"
                >
                  Vista Alumnos & Viajes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('home', 'inicio') : null}
                  className="hover:text-[#DF2928] transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('home', 'como-funciona') : null}
                  className="hover:text-[#DF2928] transition-colors cursor-pointer text-left"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenCatalog} 
                  className="hover:text-[#DF2928] transition-colors cursor-pointer text-left"
                >
                  Catálogo de productos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView ? onNavigateView('calculadora') : null}
                  className="hover:text-[#DF2928] transition-colors cursor-pointer text-left"
                >
                  Calculadora de beneficios
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenInfo} 
                  className="hover:text-[#DF2928] transition-colors cursor-pointer text-left"
                >
                  Pedir información
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Garantías */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#191919]">Garantías LUICAR</h4>
            <ul className="space-y-2.5 text-xs text-[#4E4E30]">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
                <span>Sin inversión previa ni pago por adelantado</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#B87D0E] shrink-0 mt-0.5" />
                <span>Devolución de excedentes no vendidos</span>
              </li>
              <li className="flex items-start gap-2">
                <ScallopShellIcon className="w-4 h-4 shrink-0 mt-0.5" color="#E8728A" />
                <span>Pedidos etiquetados por alumno y aula</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#191919]">Contacto</h4>
            <div className="space-y-2.5 text-sm text-[#4E4E30]">
              <a href="tel:619937972" className="flex items-center gap-2.5 hover:text-[#DF2928] transition-colors">
                <Phone className="w-4 h-4 text-[#DF2928]" />
                <span className="font-bold text-[#191919]">619 937 972</span>
              </a>
              <a href="mailto:info@luicarcomercial.com" className="flex items-center gap-2.5 hover:text-[#DF2928] transition-colors text-xs">
                <Mail className="w-4 h-4 text-[#4FB8B8]" />
                <span>info@luicarcomercial.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-[#4E4E30]">
                <MapPin className="w-4 h-4 text-[#E8728A] shrink-0 mt-0.5" />
                <span>Galicia, España</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E50]">
          <p>© {new Date().getFullYear()} LUICAR COMERCIAL. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#191919] cursor-pointer">Aviso Legal</span>
            <span className="hover:text-[#191919] cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-[#191919] cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
