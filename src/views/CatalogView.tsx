import React, { useState } from 'react';
import { 
  LayoutGrid, 
  CakeSlice, 
  TreePine, 
  Gift, 
  SlidersHorizontal, 
  ChevronDown, 
  ShoppingCart, 
  ShieldCheck, 
  Award, 
  Mail, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  FileText,
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { CATALOG_PRODUCTS } from '../data/campaignData';
import { ProductItem } from '../types';
import { ScallopShellIcon, GaliciaMapIcon } from '../components/GaliciaIcons';

// Custom icons for categories to match catalogo.jpeg exactly
const ChocolateIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const CheeseIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 19 18-3V9L3 5v14Z" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const HoneyIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m19 5-3-3L6 12l3 3 10-10Z" />
    <path d="m13 8 3 3" />
    <path d="m10 11 3 3" />
    <path d="m7 14 3 3" />
    <path d="M4 18c-1.1 1.1-.9 2.9.2 4 .5.5 1.3.8 2 .8 1.1 0 2.2-.6 2.8-1.5" />
  </svg>
);

interface CatalogViewProps {
  onNavigateHome: () => void;
  onOpenInfo: (productName?: string) => void;
  onOpenFullPdf: () => void;
}

type CategoryType = 'Todos' | 'Repostería' | 'Chocolates' | 'Productos gallegos' | 'Quesos' | 'Miel' | 'Navidad' | 'Regalos';

export const CatalogView: React.FC<CatalogViewProps> = ({ onNavigateHome, onOpenInfo, onOpenFullPdf }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');
  const [sortBy, setSortBy] = useState<string>('Más vendidos');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showSampleModal, setShowSampleModal] = useState<boolean>(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<'all' | 'under10' | 'over10'>('all');

  const categories: { id: CategoryType; label: string; icon: React.ReactNode; colorClass: string; activeColor: string }[] = [
    { 
      id: 'Todos', 
      label: 'Todos', 
      icon: <LayoutGrid className="w-5 h-5" />, 
      colorClass: 'text-[#4FB8B8]',
      activeColor: 'bg-[#4FB8B8]/15 text-[#2C8585] border-[#4FB8B8]/40'
    },
    { 
      id: 'Repostería', 
      label: 'Repostería', 
      icon: <CakeSlice className="w-5 h-5" />, 
      colorClass: 'text-[#4FB8B8]',
      activeColor: 'bg-[#4FB8B8]/15 text-[#2C8585] border-[#4FB8B8]/40'
    },
    { 
      id: 'Chocolates', 
      label: 'Chocolates', 
      icon: <ChocolateIcon className="w-5 h-5" />, 
      colorClass: 'text-[#6D4C41]',
      activeColor: 'bg-[#6D4C41]/15 text-[#5D4037] border-[#6D4C41]/40'
    },
    { 
      id: 'Productos gallegos', 
      label: 'Productos gallegos', 
      icon: <ScallopShellIcon className="w-5 h-5" color="currentColor" />, 
      colorClass: 'text-[#4FB8B8]',
      activeColor: 'bg-[#4FB8B8]/15 text-[#2C8585] border-[#4FB8B8]/40'
    },
    { 
      id: 'Quesos', 
      label: 'Quesos', 
      icon: <CheeseIcon className="w-5 h-5" />, 
      colorClass: 'text-[#F5B738]',
      activeColor: 'bg-[#F5B738]/15 text-[#B87D0E] border-[#F5B738]/40'
    },
    { 
      id: 'Miel', 
      label: 'Miel', 
      icon: <HoneyIcon className="w-5 h-5" />, 
      colorClass: 'text-[#F5B738]',
      activeColor: 'bg-[#F5B738]/15 text-[#B87D0E] border-[#F5B738]/40'
    },
    { 
      id: 'Navidad', 
      label: 'Navidad', 
      icon: <TreePine className="w-5 h-5" />, 
      colorClass: 'text-[#E8728A]',
      activeColor: 'bg-[#E8728A]/15 text-[#C4435E] border-[#E8728A]/40'
    },
    { 
      id: 'Regalos', 
      label: 'Regalos', 
      icon: <Gift className="w-5 h-5" />, 
      colorClass: 'text-[#DF2928]',
      activeColor: 'bg-[#DF2928]/15 text-[#DF2928] border-[#DF2928]/40'
    },
  ];

  // Filtering products
  let displayProducts = CATALOG_PRODUCTS.filter((product) => {
    if (selectedCategory === 'Todos') return true;
    if (selectedCategory === 'Productos gallegos') {
      return product.name.toLowerCase().includes('gallega') || 
             product.name.toLowerCase().includes('galicia') || 
             product.name.toLowerCase().includes('arzúa') || 
             product.category === 'Quesos' || 
             product.category === 'Miel' ||
             product.category === 'Repostería';
    }
    return product.category === selectedCategory;
  });

  // Price range filter
  if (selectedPriceRange === 'under10') {
    displayProducts = displayProducts.filter(p => parseFloat(p.price.replace(',', '.').replace(' €', '')) < 10);
  } else if (selectedPriceRange === 'over10') {
    displayProducts = displayProducts.filter(p => parseFloat(p.price.replace(',', '.').replace(' €', '')) >= 10);
  }

  // Sort
  if (sortBy === 'Precio: menor a mayor') {
    displayProducts.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
  } else if (sortBy === 'Precio: mayor a menor') {
    displayProducts.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
  }

  const handleSelectSample = (product: ProductItem) => {
    if (!selectedItems.includes(product.name)) {
      setSelectedItems([...selectedItems, product.name]);
    }
    setLastAddedProduct(product.name);
    setShowSampleModal(true);
  };

  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 5000);
  };

  return (
    <div className="py-8 sm:py-12 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main View Container exactly framing catalogo.jpeg */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#ECE6DA] relative overflow-hidden">
          
          {/* Breadcrumb Navigation 
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#777777] mb-6 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#DF2928] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span>&gt;</span>
            <span className="text-[#191919] font-bold">Catálogo</span>
          </nav>*/}

          {/* Top Hero Section: Title, Subtitle, Curved Image & Traditional Seal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
            
            {/* Left Header Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#191919] tracking-tight leading-[1.12] mb-4">
                Catálogo de <br className="hidden sm:inline" />
                productos
              </h1>

              <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed mb-6 max-w-lg">
                Productos de calidad gallega que ayudan a financiar vuestro viaje de fin de curso.
              </p>

              {/* Terracotta / Orange Accent Line */}
              <div className="w-14 h-1 bg-[#E76F38] rounded-full" />
            </div>

            {/* Right Asymmetrical Curved Showcase Image & Circular Seal */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl lg:rounded-l-[140px] lg:rounded-r-3xl overflow-hidden shadow-lg bg-[#F6F4EE] border border-[#ECE6DA] aspect-[16/11] w-full">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                  alt="Muestra de productos del catálogo escolar Luicar Comercial"
                  className="w-full h-full object-cover object-center"
                />

                {/* Circular Seal "TRADICIÓN GALEGA • IMPULSO XOVEN" */}
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

          </div>

          {/* Horizontal Category Pill Bar (8 Categories matching catalogo.jpeg) */}
          <div className="bg-[#FAF9F6] rounded-2xl p-2 sm:p-2.5 border border-[#ECE6DA] mb-6 overflow-x-auto no-scrollbar shadow-2xs">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? `${cat.activeColor} bg-white shadow-2xs border`
                        : 'text-[#444444] hover:bg-white/70 border border-transparent'
                    }`}
                  >
                    <div className={isActive ? '' : cat.colorClass}>
                      {cat.icon}
                    </div>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Bar & Sort Options */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-2">
            
            {/* Filter Toggle Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#D5CEC0] text-xs sm:text-sm font-semibold text-[#2C2C2C] hover:bg-[#FAF9F6] shadow-2xs transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#555555]" />
                <span>Filtrar</span>
                {selectedPriceRange !== 'all' && (
                  <span className="w-2 h-2 rounded-full bg-[#DF2928]" />
                )}
              </button>

              {/* Filter popup dropdown */}
              {showFilterDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#ECE6DA] p-3 z-30 animate-in fade-in zoom-in-95">
                  <div className="text-xs font-bold text-[#191919] mb-2 px-1">Filtrar por tipo:</div>
                  <div className="space-y-1 text-xs">
                    <button
                      type="button"
                      onClick={() => { setSelectedPriceRange('all'); setShowFilterDropdown(false); }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg ${selectedPriceRange === 'all' ? 'bg-[#4FB8B8]/15 font-bold text-[#2C8585]' : 'hover:bg-neutral-50'}`}
                    >
                      Todos los productos
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSelectedPriceRange('under10'); setShowFilterDropdown(false); }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg ${selectedPriceRange === 'under10' ? 'bg-[#4FB8B8]/15 font-bold text-[#2C8585]' : 'hover:bg-neutral-50'}`}
                    >
                      Menos de 10 € (Fácil venta)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSelectedPriceRange('over10'); setShowFilterDropdown(false); }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg ${selectedPriceRange === 'over10' ? 'bg-[#4FB8B8]/15 font-bold text-[#2C8585]' : 'hover:bg-neutral-50'}`}
                    >
                      10 € o más (Lotes y regalos)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Quick PDF button & Sort Dropdown */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* PDF Banner Link */}
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF9F6] border border-[#ECE6DA] text-xs font-bold text-[#4E3629] hover:bg-[#F2EDE2] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#E76F38]" />
                <span>Descargar PDF completo (50+ refs)</span>
              </button>

              {/* Sort selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="inline-flex items-center justify-between gap-2 min-w-[140px] px-3.5 py-2 rounded-xl bg-white border border-[#D5CEC0] text-xs sm:text-sm font-semibold text-[#2C2C2C] hover:bg-[#FAF9F6] shadow-2xs transition-colors cursor-pointer"
                >
                  <span>{sortBy}</span>
                  <ChevronDown className="w-4 h-4 text-[#777777]" />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#ECE6DA] p-2 z-30 text-xs">
                    {['Más vendidos', 'Precio: menor a mayor', 'Precio: mayor a menor'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${
                          sortBy === option
                            ? 'bg-[#4FB8B8]/15 font-bold text-[#2C8585]'
                            : 'hover:bg-neutral-50 text-[#444444]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* 8 Product Cards Grid (2 rows x 4 columns) matching catalogo.jpeg exactly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
            {displayProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#ECE6DA] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-[#FAF9F6] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs rounded-full text-[10px] font-bold text-[#191919] shadow-2xs border border-neutral-200">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm sm:text-[15px] text-[#191919] leading-snug mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#777777] font-medium mb-3">
                      {product.weightOrUnit}
                    </p>
                  </div>

                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#191919] mb-3">
                      {product.price}
                    </div>

                    {/* Añadir / Solicitar muestra Button (Coral Red) */}
                    <button
                      type="button"
                      onClick={() => handleSelectSample(product)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F05A3E] hover:bg-[#E0492E] text-white text-xs sm:text-sm font-bold shadow-2xs active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Añadir</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Full PDF Catalog Callout Banner (el resto del catálogo en PDF) */}
          <div className="bg-gradient-to-r from-[#FAF9F6] via-[#F5EFE6] to-[#ECE5D8] rounded-2xl p-5 sm:p-7 border border-[#E3DCD0] shadow-2xs mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DF2928]/10 text-[#DF2928] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#191919]">
                  ¿Quieres ver el catálogo escolar completo de 50+ referencias?
                </h4>
                <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                  Esta es solo una muestra de los productos más vendidos. Descarga el dossier en PDF con todos los productos, márgenes para el viaje y hojas de pedido.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full md:w-auto py-3 px-5 rounded-xl bg-white border border-[#D5CEC0] text-xs sm:text-sm font-bold text-[#191919] hover:bg-neutral-50 shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#DF2928]" />
                <span>Descargar PDF</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenInfo()}
                className="w-full md:w-auto py-3 px-5 rounded-xl bg-[#DF2928] text-white text-xs sm:text-sm font-bold shadow-2xs hover:bg-[#C82322] flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Pedir muestras para la clase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Value Badges matching bottom of catalogo.jpeg */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-t border-neutral-100 mb-8">
            
            {/* 1. Confianza y cercanía */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2C2C2C] leading-snug">
                Confianza <br className="hidden sm:inline" />y cercanía
              </div>
            </div>

            {/* 2. Productos de calidad */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5B738]/15 flex items-center justify-center text-[#F5B738] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2C2C2C] leading-snug">
                Productos <br className="hidden sm:inline" />de calidad
              </div>
            </div>

            {/* 3. Comprometidos con Galicia */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8728A]/15 flex items-center justify-center text-[#E8728A] shrink-0">
                <GaliciaMapIcon className="w-5 h-5" color="#E8728A" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2C2C2C] leading-snug">
                Comprometidos <br className="hidden sm:inline" />con Galicia
              </div>
            </div>

            {/* 4. Tradición gallega, impulso joven */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4FB8B8]/15 flex items-center justify-center text-[#4FB8B8] shrink-0">
                <ScallopShellIcon className="w-5 h-5" color="#4FB8B8" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2C2C2C] leading-snug">
                Tradición gallega, <br className="hidden sm:inline" />impulso joven
              </div>
            </div>

          </div>

          {/* Newsletter / Campaign Tips Box */}
          <div className="bg-[#FAF9F6] rounded-2xl p-5 sm:p-7 border border-[#ECE6DA] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#4FB8B8]/20 flex items-center justify-center text-[#4FB8B8] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#191919]">
                  Recibe novedades y consejos para vuestra campaña
                </h4>
                <p className="text-xs text-[#666666] mt-0.5">
                  Ideas, materiales y productos que suman.
                </p>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full md:w-auto max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full py-2.5 px-4 bg-white rounded-xl border border-[#D5CEC0] text-xs sm:text-sm text-[#191919] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#4FB8B8] transition-all"
                />
              </div>
              <button
                type="submit"
                className="py-2.5 px-5 rounded-xl bg-[#4FB8B8] hover:bg-[#43A4A4] text-white text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer shrink-0"
              >
                Suscribirme
              </button>
            </form>
          </div>

          {/* Notifications & Modal */}
          {newsletterSubscribed && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>¡Gracias por suscribirte! Recibirás los consejos y novedades para vuestra campaña escolar.</span>
            </div>
          )}

          {downloadSuccess && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between gap-2 animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Catálogo Escolar Completo en PDF</strong> preparado para descarga con todas las referencias y fichas de venta.</span>
              </div>
              <button 
                type="button" 
                onClick={() => setDownloadSuccess(false)}
                className="text-emerald-700 hover:text-emerald-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Educational Campaign Sample Modal (Clarifying no direct e-commerce, it's a school campaign inquiry) */}
      {showSampleModal && lastAddedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#ECE6DA] relative animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={() => setShowSampleModal(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#4FB8B8]/15 text-[#4FB8B8] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-[#191919] mb-2">
              Producto añadido a vuestra selección de campaña
            </h3>

            <p className="text-sm text-[#555555] leading-relaxed mb-4">
              Has seleccionado <strong>{lastAddedProduct}</strong> como producto de interés para la campaña escolar de vuestro centro.
            </p>

            <div className="bg-[#FAF9F6] rounded-xl p-3.5 border border-[#ECE6DA] text-xs text-[#666666] mb-6 flex items-start gap-2">
              <Info className="w-4 h-4 text-[#4FB8B8] shrink-0 mt-0.5" />
              <span>
                Recuerda que <strong>no es una compra directa</strong> individual: los colegios reciben el catálogo completo en PDF y lotes de muestra con facilidades de devolución y sin pago por adelantado.
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setShowSampleModal(false);
                  onOpenInfo(lastAddedProduct);
                }}
                className="w-full py-3 px-5 rounded-xl bg-[#DF2928] text-white text-sm font-bold shadow-md hover:bg-[#C82322] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar información y muestras para la clase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setShowSampleModal(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 cursor-pointer"
              >
                Continuar explorando muestra
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
