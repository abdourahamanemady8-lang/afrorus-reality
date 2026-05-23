export const metadata = {
  title: 'À propos – AfroRus Reality',
  description: 'Découvrez la mission et l’équipe derrière AfroRus Reality, le média qui montre la Russie sans filtre aux étudiants africains.',
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-charcoal mb-12 text-center">
          À Propos d’<span className="text-russia-red">AfroRus Reality</span>
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-russia-red mb-4">Notre Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              AfroRus Reality est né d’un constat simple : l’information sur la vie étudiante en Russie est soit trop institutionnelle, soit éparpillée sur des forums peu fiables. Nous créons le pont qui manquait.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Notre média indépendant donne la parole aux premiers concernés : les étudiants africains qui vivent l’expérience, et leurs amis russes qui aident à la comprendre. Sans filtre, sans langue de bois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-russia-red mb-4">L’Équipe</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nous sommes une équipe bénévole d’étudiants et jeunes professionnels basés à Novossibirsk, Moscou et au-delà. Nous croyons au dialogue direct et à la transparence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-russia-red mb-4">Contact & Partenariats</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <a href="mailto:contact@afrorus-reality.com" className="hover:text-russia-red underline">
                  contact@afrorus-reality.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Novossibirsk, Fédération de Russie
              </p>
              <p className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Telegram : @afrorus_reality
              </p>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Vous représentez une université, une fondation ou une organisation ? Nous sommes ouverts aux partenariats et au mécénat pour développer la plateforme.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}