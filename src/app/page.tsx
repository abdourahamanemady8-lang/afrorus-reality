import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import QuotesCarousel from '@/components/QuotesCarousel';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

// Récupération des 6 derniers témoignages
async function getRecentTemoignages() {
  const { data, error } = await supabase
    .from('temoignages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Erreur Supabase:', error);
    return [];
  }
  return data || [];
}

export default async function Home() {
  const temoignages = await getRecentTemoignages();

  return (
    <>
      <Hero />

      {/* Section Mission */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-africa-gold text-sm font-semibold tracking-widest uppercase">
              Notre Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
              Pourquoi <span className="text-russia-red">AfroRus Reality</span> est différent
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Ni propagande, ni complainte. Seulement la vérité du terrain, racontée par ceux qui la vivent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-russia-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Double Regard</h3>
              <p className="text-gray-600">
                Chaque sujet est analysé par un Africain qui découvre ET un Russe qui explique.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-africa-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">❄️🔥</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Le Vrai Choc</h3>
              <p className="text-gray-600">
                On parle du froid sibérien, de la paperasse folle ET de la chaleur humaine.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-charcoal/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Zéro Langue de Bois</h3>
              <p className="text-gray-600">
                Indépendant et transparent. Nous montrons le bon comme le difficile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derniers Témoignages */}
      <section className="py-24 px-4 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-africa-gold text-sm font-semibold tracking-widest uppercase">
                Fraîchement arrivés
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-3">
                Derniers Témoignages
              </h2>
            </div>
            <Link
              href="/temoignages"
              className="mt-4 md:mt-0 text-russia-red font-semibold hover:underline text-lg"
            >
              Voir tous les témoignages →
            </Link>
          </div>

          {/*
          {temoignages.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
              <p className="text-2xl text-gray-500 mb-2">Aucun témoignage pour le moment.</p>
              <p className="text-gray-400">Reviens bientôt, le premier arrive !</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temoignages.map((item: any) => (
                <TestimonialCard
                  key={item.id}
                  titre={item.titre}
                  categorie={item.categorie}
                  citationAfricain={item.citation_africain}
                  nomAfricain={item.nom_africain}
                  citationRusse={item.citation_russe}
                  nomRusse={item.nom_russe}
                  videoUrl={item.video_url}
                />
              ))}
            </div>
          )}
          */}
        </div>
      </section>

      {/* Carrousel de citations */}
        <QuotesCarousel />

      {/* CTA Guide de Survie */}
      <section className="py-24 px-4 bg-gradient-to-r from-charcoal to-dark-gray text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-africa-gold text-sm font-semibold tracking-widest uppercase">
            Téléchargement Gratuit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Prêt à vivre l'aventure russe ?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Notre Guide de Survie Étudiant (PDF de 20 pages) compile toutes les astuces, check-lists et contacts indispensables.
          </p>
          <Link
            href="/guide"
            className="btn-gold inline-flex items-center gap-2 text-lg px-10 py-4"
          >
            📥 Télécharger le Guide PDF
          </Link>
        </div>
      </section>
    </>
  );
}