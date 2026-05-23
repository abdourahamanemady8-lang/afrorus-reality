import Link from 'next/link'; // ou import { Link } from '@/i18n/routing';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/hero-fallback.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-transparent z-10"></div>

      {/* Contenu */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
        <span className="text-africa-gold text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
          Témoignages Authentiques • Russie & Afrique
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 max-w-4xl leading-tight">
          La Russie sans filtre,
          <br />
          <span className="text-africa-gold">racontée par les nôtres.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-light">
          Des étudiants africains et leurs amis russes te disent TOUT : chocs culturels, astuces de survie, et vraies opportunités.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/temoignages" className="btn-primary text-center text-lg px-8 py-4">
            🎬 Voir les Témoignages
          </Link>
          <Link
            href="/guide"
            className="btn-outline text-center text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-russia-red"
          >
            📥 Télécharger le Guide
          </Link>
        </div>

        {/* Statistiques */}
        <div className="flex gap-8 md:gap-12 mt-16">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">40+</p>
            <p className="text-white/70 text-sm">Témoignages</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">12</p>
            <p className="text-white/70 text-sm">Villes couvertes</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">15k</p>
            <p className="text-white/70 text-sm">Lecteurs / mois</p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}