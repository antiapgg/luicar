import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/campaignData';
import { LuicarLogo } from './LuicarLogo';
import { ScallopShellIcon } from './GaliciaIcons';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductForInfo: (productName: string) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectProductForInfo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const categories = ['Todos', 'Repostería', 'Chocolates', 'Quesos', 'Miel', 'Navidad', 'Regalos'];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleFakeDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FAF9F6] border-b border-[#ECE6DA] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LuicarLogo size="sm" />
            <div className="hidden sm:block h-6 w-px bg-neutral-300" />
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-neutral-900">Catálogo de Campañas Escolares</span>
              <span className="text-xs text-neutral-500">Productos artesanos de máxima calidad de Galicia</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleFakeDownload}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#D5CEC0] text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 shadow-2xs cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">¡Catálogo PDF descargado!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#4E3629]" />
                  <span>Descargar PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
              aria-label="Cerrar catálogo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 bg-white border-b border-neutral-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1E1E1E] text-white shadow-xs'
                  : 'bg-[#F5F4F0] text-neutral-600 hover:bg-[#EAE8E2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF9F6] rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col hover:border-[#4FB8B8] transition-all hover:shadow-md group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#DF2928] text-white text-[11px] font-bold shadow-xs">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-neutral-600">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#1E1E1E] leading-snug mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#777777] font-semibold mb-1.5">
                    {product.weightOrUnit}
                  </p>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-500 font-medium">PVP recomendado:</span>
                    <span className="font-bold text-neutral-900">{product.price}</span>
                  </div>
                  
                  {product.profitEstimated && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#4FB8B8] bg-[#4FB8B8]/10 px-2.5 py-1 rounded-lg mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Beneficio: {product.profitEstimated}</span>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      onClose();
                      onSelectProductForInfo(product.name);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-white border border-[#D5CEC0] text-xs font-bold text-neutral-800 hover:bg-[#1E1E1E] hover:text-white hover:border-[#1E1E1E] transition-all cursor-pointer shadow-2xs"
                  >
                    Pedir muestra o incluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-[#F5F4F0] border-t border-neutral-200 text-center text-xs text-neutral-600 flex items-center justify-center gap-2">
          <ScallopShellIcon className="w-4 h-4" color="#4FB8B8" />
          <span>Todos los productos cuentan con sellos de garantía alimentaria y presentación personalizada para colegios.</span>
        </div>
      </div>
    </div>
  );
};
