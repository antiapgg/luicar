import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { ScallopShellIcon } from './GaliciaIcons';

interface WhatsAppButtonProps {
  onOpenInfoModal: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenInfoModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hola! Queremos información para la campaña de viaje de fin de curso de nuestro colegio.');

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/34986123456?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  LC
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-300 rounded-full ring-2 ring-[#25D366]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Luicar Comercial</h4>
                <p className="text-[11px] text-white/90">Atención a colegios e institutos</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 text-white/90 transition-colors"
              aria-label="Cerrar chat WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3 max-h-60 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-2xs text-xs text-neutral-800 space-y-1">
              <p className="font-semibold text-[#1E1E1E]">¡Hola! 👋</p>
              <p>¿Tenéis pensado hacer un viaje de fin de curso? Os ayudamos a financiarlo con nuestros catálogos de productos gallegos.</p>
              <span className="block text-[10px] text-neutral-400 text-right">Online</span>
            </div>
          </div>

          {/* Quick reply area */}
          <div className="p-3 bg-white border-t border-neutral-100 flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="flex-1 px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendWhatsApp();
                }}
              />
              <button
                onClick={handleSendWhatsApp}
                className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors cursor-pointer"
                title="Enviar por WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInfoModal();
                }}
                className="text-[#DF2928] hover:underline font-semibold"
              >
                O rellena el formulario formal
              </button>
              <a href="tel:986123456" className="flex items-center gap-1 hover:text-neutral-900">
                <PhoneCall className="w-3 h-3" />
                <span>986 123 456</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA Button with Notification badge */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="btn-floating-whatsapp"
          className="flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#20BD5A] hover:shadow-2xl active:scale-95 transition-all cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">¿Dudas? Escríbenos</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>

        {/* Pulsing indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white" />
          </span>
        )}
      </div>

    </div>
  );
};
