"use client"
export default function Footer() {
    return (
      <footer className="mt-16 py-8 text-center text-gray-400 relative z-10">
        <p className="mb-2">
          © {new Date().getFullYear()} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-500"> La Gourmandise</span> 
          - Tous droits réservés - ToemeXpertise
        </p>
        <p className="text-sm opacity-75">
          Jeu soumis à conditions - Un seul gain par client et par visite
        </p>
      </footer>
    );
  }