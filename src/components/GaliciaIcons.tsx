import React from 'react';

export const ScallopShellIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#4FB8B8',
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Galicia Pilgrim Scallop Shell (Vieira) */}
      <path
        d="M24 6C13.5066 6 5 14.5066 5 25C5 30.6863 7.55523 35.7766 11.597 39.2201C12.8719 40.306 14.6146 40.759 16.2755 40.4357L21.8483 39.3512C23.2751 39.0736 24.7249 39.0736 26.1517 39.3512L31.7245 40.4357C33.3854 40.759 35.1281 40.306 36.403 39.2201C40.4448 35.7766 43 30.6863 43 25C43 14.5066 34.4934 6 24 6Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shell Grooves radiating to the hinge */}
      <path
        d="M24 6V39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17 9C19 18 21.5 30 23.5 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M31 9C29 18 26.5 30 24.5 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 15C14.5 22 19 31 22.5 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M37.5 15C33.5 22 29 31 25.5 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 23.5C11 27 17 33 22 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M41.5 23.5C37 27 31 33 26 39"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GaliciaMapIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#E8728A',
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized recognizable silhouette of Galicia (Rías Altas, Rías Baixas, Costa da Morte) */}
      <path
        d="M14 10C18 8 26 8 32 11C35 12.5 38 16 38 21C38 27 36 34 32 38C27 43 18 42 13 38C9 35 8 28 8 23C8 19 10 12 14 10Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10C17 14 15 17 11 19M10 24C14 24 16 26 15 30M13 35C16 34 18 36 21 38"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Central star pin indicating Pontevedra/Galicia connection */}
      <circle cx="23" cy="24" r="3" fill={color} />
    </svg>
  );
};

export const GalicianCoastLighthouseIllustration: React.FC<{ className?: string }> = ({
  className = 'w-full h-full',
}) => {
  return (
    <svg
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Subtle sea and coast line art */}
      {/* Waves & coastline */}
      <path
        d="M0 108C50 105 100 112 150 106C200 100 240 108 290 102C330 98 370 105 420 100"
        stroke="#4FB8B8"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M20 114C70 110 130 116 190 111C250 107 310 114 380 109"
        stroke="#4FB8B8"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeLinecap="round"
      />

      {/* Coastal Cliffs / Rocks */}
      <path
        d="M240 106L265 92L280 96L305 82L330 86L345 74L360 84L380 78L400 88L420 84"
        stroke="#4FB8B8"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M250 106L270 96L295 104L320 92L350 98L375 88L410 94"
        stroke="#4FB8B8"
        strokeWidth="1.2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />

      {/* Galician Lighthouse (Faro) */}
      <path
        d="M338 74L342 38H348L352 74"
        stroke="#4FB8B8"
        strokeWidth="1.8"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lighthouse gallery & lantern */}
      <path
        d="M340 38H350V30H340V38Z"
        stroke="#4FB8B8"
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />
      <path
        d="M345 30V24"
        stroke="#4FB8B8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <path
        d="M337 38H353"
        stroke="#4FB8B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      {/* Light beam hints */}
      <path
        d="M340 34L305 26M350 34L385 26"
        stroke="#F5B738"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeOpacity="0.6"
      />

      {/* Sea Birds (Gaivotas) */}
      <path
        d="M290 32C293 29 296 29 299 32C302 29 305 29 308 32"
        stroke="#4FB8B8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      <path
        d="M312 42C314 40 316 40 318 42C320 40 322 40 324 42"
        stroke="#4FB8B8"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
    </svg>
  );
};
