export default function Form({ 
  result, 
  formData, 
  handleInputChange, 
  handleSubmit,
  prizes 
}) {
  // Trouver le prix correspondant dans la liste des prix
  const prizeDetails = prizes?.find(p => p.name === result) || {
    name: result,
    description: "Un cadeau spécial",
    icon: "🎁"
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full border border-gray-700 shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-amber-700/20"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-500">
          Réclamez votre prix
        </h2>
        
        <div className="mb-6 text-center p-4 bg-gradient-to-r from-amber-400/10 via-red-500/10 to-purple-600/10 rounded-xl border border-yellow-500/30">
          <div className="text-6xl mb-2">{prizeDetails.icon}</div>
          <h3 className="text-yellow-400 font-bold text-xl mb-1">{prizeDetails.name}</h3>
          <p className="text-gray-300">{prizeDetails.description}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="prenom" className="block mb-1">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div>
            <label htmlFor="nom" className="block mb-1">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full px-6 py-3 mt-6 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-lg font-bold transition-all hover:from-yellow-500 hover:via-red-600 hover:to-purple-700 shadow-lg shadow-amber-500/30 transform hover:scale-[1.02] btn-glow"
          >
            Valider mon gain
          </button>
        </form>
      </div>
    </div>
  );
}