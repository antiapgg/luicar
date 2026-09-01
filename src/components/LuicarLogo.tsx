import React from 'react';

interface LuicarLogoProps {
  className?: string;
  variant?: 'nav' | 'full' | 'box' | 'banner';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  subtitlePosition?: 'bottom' | 'top';
  customSubtitle?: string;
}

export const LuicarLogo: React.FC<LuicarLogoProps> = ({
  className = '',
  size = 'md',
  subtitlePosition = 'bottom',
  customSubtitle,
}) => {
  const sizeConfig = {
    sm: {
      text: 'text-xl md:text-2xl',
      sub: 'text-[9px] md:text-[10px] tracking-[0.28em]',
      gap: 'gap-0.5',
    },
    md: {
      text: 'text-2xl md:text-3xl',
      sub: 'text-[10px] md:text-[11px] tracking-[0.32em]',
      gap: 'gap-1',
    },
    lg: {
      text: 'text-3xl md:text-4xl lg:text-5xl',
      sub: 'text-xs md:text-sm tracking-[0.35em]',
      gap: 'gap-1.5',
    },
    xl: {
      text: 'text-4xl md:text-5xl lg:text-6xl',
      sub: 'text-sm md:text-base tracking-[0.38em]',
      gap: 'gap-2',
    },
  };

  const currentSize = sizeConfig[size];
  const subtitleText = customSubtitle || 'COMERCIAL';

  return (
    <div className={`inline-flex flex-col items-center select-none ${currentSize.gap} ${className}`}>
      {subtitlePosition === 'top' && (
        <span className={`font-sans font-extrabold uppercase text-[#1E1E1E] leading-none ${currentSize.sub}`}>
          {subtitleText}
        </span>
      )}
      
      {/* Brand Letters with exact corporate palette */}
      <div className={`font-logo font-black tracking-tight leading-none flex items-baseline drop-shadow-xs ${currentSize.text}`}>
        <span className="text-[#4FB8B8] transition-transform hover:scale-105 inline-block">L</span>
        <span className="text-[#F5B738] transition-transform hover:scale-105 inline-block">U</span>
        <span className="text-[#E76F38] transition-transform hover:scale-105 inline-block">I</span>
        <span className="text-[#4E3629] transition-transform hover:scale-105 inline-block">C</span>
        <span className="text-[#E8728A] transition-transform hover:scale-105 inline-block">A</span>
        <span className="text-[#DF2928] transition-transform hover:scale-105 inline-block">R</span>
      </div>

      {subtitlePosition === 'bottom' && (
        <span className={`font-sans font-extrabold uppercase text-[#1E1E1E] leading-none ${currentSize.sub}`}>
          {subtitleText}
        </span>
      )}
    </div>
  );
};
