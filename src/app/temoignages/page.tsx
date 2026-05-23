import { supabase } from '@/lib/supabase';
import TestimonialCard from '@/components/TestimonialCard';
import CategoryFilter from '@/components/CategoryFilter';
import { CATEGORIES } from '@/lib/constants';

export const revalidate = 3600;

async function getTemoignages(categorie?: string) {
  let query = supabase
    .from('temoignages')
    .select('*')
    .order('created_at', { ascending: false });

  if (categorie && categorie !== 'all') {
    query = query.eq('categorie', categorie).limit(3);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Erreur Supabase:', error);
    return [];
  }
  return data || [];
}

export default async function TemoignagesPage({
  searchParams,
}: {
  searchParams: { categorie?: string };
}) {
  const categorie = searchParams.categorie || 'all';
  const temoignages = await getTemoignages(categorie);

  return (
    <main className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="bg-charcoal pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tous les Témoignages
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Des dizaines d’étudiants africains et leurs amis russes partagent leur vécu. Filtre par thème pour trouver ce qui t’intéresse.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 px-4 border-b border-light-gray bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter categories={CATEGORIES} />
        </div>
      </section>

      {/* Grille */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {temoignages.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
              <p className="text-2xl text-gray-500">Aucun témoignage dans cette catégorie.</p>
              <p className="text-gray-400 mt-2">Essaie un autre filtre ou reviens plus tard.</p>
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
        </div>
      </section>
    </main>
  );
}