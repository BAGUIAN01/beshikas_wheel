"use client"

import { useRef } from 'react';

export default function Wheel({ 
  prizes, 
  rotation, 
  isSpinning, 
  spinWheel, 
  result 
}) {
  const wheelRef = useRef(null);
  const segmentAngle = 360 / prizes.length;
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-80 h-80 md:w-96 md:h-96 mb-12 wheel-container">
        {/* Outer glow ring amélioré */}
        <div className="absolute -inset-6 bg-gradient-to-r from-amber-400 via-red-500 to-purple-600 rounded-full opacity-80 blur-lg animate-spin-slow z-0"></div>
        
        {/* Arrière-plan circulaire */}
        <div className="absolute inset-1 bg-gray-900 rounded-full z-0 border-4 border-gray-700"></div>
        
        {/* Bordure décorative */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500/20 z-0"></div>
        
        {/* Support ombré pour l'indicateur */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-28 h-10 bg-black/30 rounded-full blur-lg z-10"></div>
        
        {/* Indicateur PRIX amélioré */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -mt-12 z-30 wheel-pointer">
          {/* Effet de halo lumineux */}
          <div className="absolute -inset-2 opacity-60 blur-xl bg-yellow-500 rounded-full"></div>
          
          {/* Flèche avec bordure dorée */}
          {/* <div className="relative w-0 h-0 border-l-[20px] border-r-[20px] border-t-[34px] border-l-transparent border-r-transparent border-t-yellow-400 filter drop-shadow-[0_0_8px_rgba(255,204,0,0.8)]"></div> */}
          
          {/* Cercle lumineux avec texte */}
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full -mt-1 mx-auto 
               shadow-[0_0_15px_rgba(255,204,0,0.7)] flex items-center justify-center border-2 border-yellow-300">
            <span className="text-black font-extrabold text-lg drop-shadow-sm">PRIX</span>
          </div>
        </div>
        
        {/* La roue principale avec design simplifié */}
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full overflow-hidden border-[12px] border-gray-800 shadow-2xl relative transition-transform duration-5000 ease-out z-10 bg-gray-800"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.15)'
          }}
        >
          {/* Fond de roue avec lignes de séparation */}
          <div className="absolute inset-0 z-0">
            {prizes.map((_, index) => (
              <div
                key={index}
                className="absolute top-0 left-1/2 h-1/2 w-0.5 bg-gray-600"
                style={{
                  transform: `rotate(${index * segmentAngle}deg)`,
                  transformOrigin: 'bottom center',
                }}
              ></div>
            ))}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700 z-10"></div>
          </div>

          {/* Cercle central décoratif - taille responsive */}
          <div className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -mt-6 -ml-6 sm:-mt-7 sm:-ml-7 md:-mt-8 md:-ml-8 rounded-full bg-gray-900 border-2 border-gray-700 z-20"></div>

          {/* Prix placés en cercle autour de la roue - ajustement responsive */}
          {prizes.map((prize, index) => {
            // Calculer la position sur le cercle
            const angle = index * segmentAngle;
            const radian = (angle - 90) * (Math.PI / 180); // -90 pour aligner à midi
            
            // Rayon responsive - un peu plus petit sur mobile pour éviter le débordement
            const radius = window.innerWidth < 480 ? 36 : 38; // % du diamètre de la roue
            
            const x = 50 + radius * Math.cos(radian);
            const y = 50 + radius * Math.sin(radian);

            return (
              <div
                key={index}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                }}
              >
                {/* Fond coloré pour le prix */}
                <div 
                  className="rounded-lg bg-gradient-to-br from-black/80 to-black/50 shadow-lg p-1 sm:p-1.5 md:p-2 rotate-0 border border-white/10"
                  style={{ 
                    background: `linear-gradient(135deg, ${prize.color.split(',')[0].split('(')[1]}, rgba(0,0,0,0.6))`,
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {/* Contenu du prix */}
                  <div className="flex flex-col items-center">
                    {/* Icône - taille responsive */}
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-black/80 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                      <span className="text-white text-lg sm:text-xl md:text-2xl">
                        {prize.icon}
                      </span>
                    </div>
                    
                    {/* Texte du prix avec meilleure visibilité - taille responsive */}
                    <div className="flex mt-1 bg-black/80 rounded-md px-1.5 sm:px-2 py-0.5 border border-white/20 backdrop-blur-sm shadow-inner shadow-white/5">
                      <span className="text-white font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                        {prize.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
     
      
          {/* Bouton pour tourner - taille responsive */}
          <button 
            onClick={spinWheel}
            disabled={isSpinning}
            className={`
              px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-extrabold tracking-wider rounded-full transition-all transform hover:scale-105
              relative overflow-hidden btn-glow mt-4 sm:mt-6 md:mt-8
              ${isSpinning 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-amber-400 via-red-500 to-purple-600 hover:from-yellow-400 hover:via-red-600 hover:to-purple-700 shadow-xl shadow-amber-500/40 border border-white/20'}
            `}
          >
            <span className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {isSpinning ? 'LA ROUE TOURNE...' : 'TOURNER LA ROUE !'}
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 hover:opacity-40 transition-opacity"></span>
          </button>
      
      {/* Affichage du résultat - responsive */}
      {result && (
        <div className="mt-6 sm:mt-8 text-center text-xl sm:text-2xl font-bold result-text px-2 sm:px-0">
          <div className="animate-pulse p-4 sm:p-6 bg-gradient-to-r from-amber-400/10 via-red-500/10 to-purple-600/10 rounded-xl border-2 border-yellow-500/50 shadow-lg shadow-amber-500/20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 text-2xl sm:text-3xl">
              Vous avez gagné :
            </span>
            
            <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center">
              {/* Icône du prix gagné */}
              <span className="text-4xl sm:text-5xl animate-bounce mb-1 sm:mb-2">
                {prizes.find(p => p.name === result)?.icon || '🎁'}
              </span>
              
              {/* Nom du prix */}
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent mt-1">
                {prizes.find(p => p.name === result)?.description || result}
              </span>
            </div>
          </div>
          
          {/* Confettis pour célébrer - quantité réduite sur mobile */}
          {[...Array(window.innerWidth < 480 ? 25 : 40)].map((_, i) => (
            <div 
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#FFD700', '#FF4136', '#0074D9', '#2ECC40', '#FF851B', '#F012BE'][i % 6],
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}