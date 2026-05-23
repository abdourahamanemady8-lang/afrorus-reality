import DownloadGuideButton from '@/components/DownloadGuideButton';
import Image from 'next/image';

export const metadata = {
  title: 'Guide de Survie Étudiant – AfroRus Reality',
  description: 'Téléchargez gratuitement notre guide complet pour les étudiants africains en Russie : administratif, hiver, logement, astuces.',
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-russia-red to-charcoal pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-africa-gold text-sm font-semibold tracking-widest uppercase">
            Ressource Gratuite
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
            Guide de Survie Étudiant
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tout ce qu’on aurait aimé savoir avant de poser le pied en Russie.
            Check‑lists, contacts, astuces testées et approuvées.
          </p>
        </div>
      </section>

      {/* Contenu du guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Carte Administrative */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">📋</span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                Check‑list Administrative
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700">
              {[
                'Passeport valide au moins 18 mois après la fin du visa',
                'Carte de Migration – à remplir dans l’avion, à NE PAS PERDRE',
                'Enregistrement migratoire sous 7 jours (fait par l’université ou le propriétaire)',
                'Traduction notariée du passeport et visa (prévoir 1500–2000 ₽)',
                'Assurance médicale volontaire (ДМС)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-russia-red font-bold text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Hiver */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">❄️</span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                Survivre à l’Hiver Russe
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-russia-red font-bold">•</span>
                <span><strong>La technique des 3 couches :</strong> sous‑vêtement thermique, polaire, veste imperméable.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-russia-red font-bold">•</span>
                <span><strong>Chaussures :</strong> oublie les baskets. Investis dans des bottes fourrées (валенки ou équivalent).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-russia-red font-bold">•</span>
                <span><strong>Peau :</strong> crème hydratante grasse matin et soir. Le froid assèche extrêmement vite.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-russia-red font-bold">•</span>
                <span><strong>Moral :</strong> prends de la Vitamine D, le manque de soleil est réel.</span>
              </li>
            </ul>
          </div>

          {/* Carte Alimentation */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🍲</span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                Où trouver des produits africains ?
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-russia-red">Moscou</h3>
                <p>Marché Sadovod, boutiques près de l’Université RUDN.</p>
              </div>
              <div>
                <h3 className="font-bold text-russia-red">Saint-Pétersbourg</h3>
                <p>Marché Apraksin Dvor, île Vassilievski.</p>
              </div>
              <div>
                <h3 className="font-bold text-russia-red">Novossibirsk</h3>
                <p>Marché Central, commandes groupées Telegram.</p>
              </div>
            </div>
          </div>

          {/* Bouton de téléchargement */}
          <div className="pt-8">
            <DownloadGuideButton />
          </div>
        </div>
      </section>
    </main>
  );
}