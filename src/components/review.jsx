export default function Review({ verifyGoogleReview }) {
    return (
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full text-center border border-gray-700 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-amber-700/20"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-500">
            Laissez-nous votre avis
          </h2>
          <p className="mb-8">
            Pour jouer à la roue de la fortune, partagez d'abord votre expérience sur notre page Google Maps.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://g.co/kgs/JHyA12P" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full font-medium transition-all shadow-lg shadow-red-600/30 transform hover:scale-105 btn-glow"
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Laisser un avis sur Google
              </span>
            </a>
            <button 
              onClick={verifyGoogleReview} 
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full font-medium transition-all shadow-lg shadow-purple-600/30 transform hover:scale-105 btn-glow"
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                J'ai laissé mon avis
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }