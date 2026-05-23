import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">
              AfroRus <span className="text-africa-gold">Reality</span>
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              La Russie sans filtre, racontée par ceux qui la vivent.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Navigation</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/temoignages" className="hover:text-white transition">Témoignages</Link></li>
              <li><Link href="/guide" className="hover:text-white transition">Guide de survie</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition">À propos</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Partenaires</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Русский Диалог (NSTU)</li>
              <li>Association des Étudiants Africains</li>
              <li>Fondation Gorchakov</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Contact</h5>
            <p className="text-white/60 text-sm">
              contact@afrorus-reality.com<br />
              Novossibirsk, Russie
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/60 hover:text-white">📱</a>
              <a href="#" className="text-white/60 hover:text-white">📘</a>
              <a href="#" className="text-white/60 hover:text-white">📷</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          © 2026 AfroRus Reality. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}