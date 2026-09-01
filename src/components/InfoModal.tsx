import React, { useState } from 'react';
import { X, Send, CheckCircle, Phone, School, Users, Mail, User, MapPin } from 'lucide-react';
import { InquiryFormData } from '../types';
import { LuicarLogo } from './LuicarLogo';
import { ScallopShellIcon } from './GaliciaIcons';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    schoolName: '',
    gradeOrGroup: '4º ESO',
    studentsCount: 25,
    cityOrTown: '',
    notes: preselectedItem ? `Interesados en: ${preselectedItem}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#FAF9F6] border-b border-[#ECE6DA] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LuicarLogo size="sm" />
            <div className="hidden sm:block h-6 w-px bg-neutral-300" />
            <div>
              <h3 className="text-base font-extrabold text-[#1E1E1E]">Solicitud de Información</h3>
              <p className="text-xs text-[#666666]">Planificamos vuestra campaña de viaje a medida</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#191919] mb-2">¡Solicitud recibida con éxito!</h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                Gracias, <span className="font-semibold text-neutral-900">{formData.name}</span>. Un asesor especialista de Luicar Comercial contactará contigo en menos de 24h al teléfono <span className="font-semibold text-neutral-900">{formData.phone}</span> para enviaros el dossier completo de la campaña y muestras.
              </p>

              <div className="bg-[#FAF9F6] border border-neutral-200 rounded-2xl p-4 text-xs text-neutral-600 mb-6 flex items-center gap-3 text-left">
                <ScallopShellIcon className="w-6 h-6 shrink-0" color="#4FB8B8" />
                <span>Si necesitas respuesta inmediata, también puedes llamarnos al <strong>986 123 456</strong>.</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#DF2928] text-white text-sm font-bold shadow-md hover:bg-[#C82322] transition-all cursor-pointer"
              >
                Volver a la página
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">
                Completad los datos básicos del grupo o colegio y os enviaremos sin compromiso la propuesta económica con catálogos y márgenes de beneficio.
              </p>

              {/* Input: Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Nombre y Apellidos (profesor/a, tutor/a o alumno/a responsable) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Souto"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] focus:border-[#4FB8B8]"
                  />
                </div>
              </div>

              {/* Grid Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Teléfono de contacto *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 654 987 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] focus:border-[#4FB8B8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Correo electrónico *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="carmen@colegio.es"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] focus:border-[#4FB8B8]"
                    />
                  </div>
                </div>
              </div>

              {/* School name & Town */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Centro Educativo / Instituto *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <School className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ej. IES Rosalía de Castro"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] focus:border-[#4FB8B8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Localidad / Municipio</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Ej. Vigo / Santiago / A Coruña"
                      value={formData.cityOrTown}
                      onChange={(e) => setFormData({ ...formData, cityOrTown: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] focus:border-[#4FB8B8]"
                    />
                  </div>
                </div>
              </div>

              {/* Grade & Number of students */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Curso / Etapa</label>
                  <select
                    value={formData.gradeOrGroup}
                    onChange={(e) => setFormData({ ...formData, gradeOrGroup: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] bg-white text-neutral-800"
                  >
                    <option value="6º Primaria">6º Primaria (Viaje fin de etapa)</option>
                    <option value="2º ESO">2º ESO</option>
                    <option value="4º ESO">4º ESO (Viaje fin de curso)</option>
                    <option value="1º Bachillerato">1º Bachillerato</option>
                    <option value="2º Bachillerato">2º Bachillerato</option>
                    <option value="Ciclo Formativo FP">Ciclos Formativos FP</option>
                    <option value="Universidad / Club">Universidad / Club deportivo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Nº estimado de alumnos</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={formData.studentsCount}
                      onChange={(e) => setFormData({ ...formData, studentsCount: Number(e.target.value) || '' })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8]"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Comentarios, fechas deseadas o dudas
                </label>
                <textarea
                  rows={2}
                  placeholder="¿Queréis hacer campaña en Navidad, Pascua, primavera? Cuéntanos..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4FB8B8]"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#DF2928] text-white text-sm font-bold shadow-md hover:bg-[#C82322] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Enviando solicitud...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SOLICITAR DOSSIER Y MUESTRAS GRATIS</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  Tus datos solo se usarán para gestionar la información de la campaña de tu colegio. Sin compromiso.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
