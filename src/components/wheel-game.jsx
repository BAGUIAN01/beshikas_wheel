"use client"

import { useState, useRef } from 'react';
import Review from './review';
import Wheel from './wheel';
import Form from './form';

export default function WheelGame() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState('review'); // 'review', 'wheel', 'form'
  const [formData, setFormData] = useState({ nom: '', prenom: '' });
  
      // Prix possibles sur la roue - avec couleurs très vives et libellés courts
  const prizes = [
    { 
      name: 'REPAS', 
      color: 'linear-gradient(135deg, #FF0844, #FF1744)',
      description: 'Un repas complet gratuit',
      icon: '🍽️'
    },
    { 
      name: 'BOISSON', 
      color: 'linear-gradient(135deg, #00B0FF, #0091EA)',
      description: 'Une boisson fraîche de votre choix',
      icon: '🥤'
    },
    { 
      name: '-10%', 
      color: 'linear-gradient(135deg, #00E676, #00C853)',
      description: 'Réduction sur votre addition',
      icon: '💰'
    },
    { 
      name: 'DESSERT', 
      color: 'linear-gradient(135deg, #FFAB00, #FF9100)',
      description: 'Un dessert au choix offert',
      icon: '🍰'
    },
    { 
      name: 'APÉRITIF', 
      color: 'linear-gradient(135deg, #D500F9, #AA00FF)',
      description: 'Un apéritif offert avec votre repas',
      icon: '🍹'
    },
    { 
      name: '-5%', 
      color: 'linear-gradient(135deg, #00B8D4, #00ACC1)',
      description: 'Petite réduction sur votre addition',
      icon: '💰'
    },
    { 
      name: 'CAFÉ', 
      color: 'linear-gradient(135deg, #FF9E00, #FF6D00)',
      description: 'Un café offert avec votre repas',
      icon: '☕'
    },
    { 
      name: 'REJOUER', 
      color: 'linear-gradient(135deg, #424242, #212121)',
      description: 'Retentez votre chance plus tard',
      icon: '🎲'
    },
  ];
  
  // Calcul de l'angle pour chaque segment
  const segmentAngle = 360 / prizes.length;
  
  // Fonction pour vérifier l'avis Google
  const verifyGoogleReview = () => {
    // Normalement, il faudrait intégrer l'API Google pour vérifier
    // mais pour la démonstration, on simule une vérification réussie
    setStep('wheel');
  };
  
    // Fonction pour faire tourner la roue
  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    
    // Son de la roue qui tourne (à implémenter si désiré)
    // playSpinSound();
    
    // Générer une rotation aléatoire (entre 3 et 5 tours complets + angle final)
    const spinDuration = 5000; // 5 secondes
    const minSpins = 3;
    const maxSpins = 5;
    const randomSpins = Math.random() * (maxSpins - minSpins) + minSpins;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = 360 * randomSpins + randomAngle;
    
    // Appliquer la rotation
    setRotation(prevRotation => prevRotation + totalRotation);
    
    // Déterminer le résultat après l'animation
    setTimeout(() => {
      // Calculer quel segment a été sélectionné
      const normalizedRotation = (rotation + totalRotation) % 360;
      const prizeIndex = Math.floor(((360 - normalizedRotation) % 360) / segmentAngle);
      
      // Assurer que l'index est dans les limites
      const safeIndex = (prizeIndex + prizes.length) % prizes.length;
      
      setResult(prizes[safeIndex].name);
      setIsSpinning(false);
      
      // Son de gain (à implémenter si désiré)
      // playWinSound();
      
      // Passer à l'étape suivante après un court délai
      setTimeout(() => setStep('form'), 10000);
    }, spinDuration);
  };
  
  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Envoyer les données au restaurant (à implémenter avec une API)
    alert(`Félicitations ${formData.prenom} ${formData.nom} ! Votre gain (${result}) sera disponible lors de votre prochaine visite.`);
    
    // Réinitialiser le jeu
    setStep('review');
    setResult(null);
    setFormData({ nom: '', prenom: '' });
  };
  
  // Gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      {step === 'review' && (
        <Review verifyGoogleReview={verifyGoogleReview} />
      )}
      
      {step === 'wheel' && (
        <Wheel 
          prizes={prizes} 
          rotation={rotation} 
          isSpinning={isSpinning} 
          spinWheel={spinWheel} 
          result={result} 
        />
      )}
      
      {step === 'form' && (
        <Form 
          result={result} 
          formData={formData} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit}
          prizes={prizes}
        />
      )}
    </div>
  );
}