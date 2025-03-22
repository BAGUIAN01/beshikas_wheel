"use client"

import Head from 'next/head';
import WheelGame from '../components/wheel-game';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-red-500 filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-yellow-500 filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      <Head>
        <title>Jeu de la Roue - Restaurant</title>
        <meta name="description" content="Tentez votre chance et gagnez des prix exclusifs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container mx-auto max-w-4xl px-4 py-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-red-500 to-purple-600 animate-text">
          La Roue Magique
        </h1>
        <p className="text-center text-xl text-gray-300 mb-8">Tentez votre chance et gagnez des surprises gourmandes</p>
        
        <WheelGame />
      </main>
      
      <Footer />
    </div>
  );
}