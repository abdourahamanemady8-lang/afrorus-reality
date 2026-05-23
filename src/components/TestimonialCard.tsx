interface TestimonialCardProps {
  titre: string;
  categorie: string;
  citationAfricain: string;
  nomAfricain: string;
  citationRusse: string;
  nomRusse: string;
  videoUrl?: string; // Le lien YouTube (pas embed, juste le lien normal)
}

export default function TestimonialCard({
  titre,
  categorie,
  citationAfricain,
  nomAfricain,
  citationRusse,
  nomRusse,
  videoUrl,
}: TestimonialCardProps) {
  return (
    <article className="testimonial-card group flex flex-col h-full">
      <span className="category-badge mb-4 self-start">{categorie}</span>

      <h3 className="text-xl font-bold text-charcoal mb-5 group-hover:text-russia-red transition-colors">
        {titre}
      </h3>

      <div className="space-y-5 mt-auto">
        {/* Citation Africain */}
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-africa-gold/20 flex items-center justify-center text-xl">
            👨🏿‍🎓
          </div>
          <div>
            <p className="testimonial-quote text-sm line-clamp-3">« {citationAfricain} »</p>
            <p className="text-xs font-semibold text-charcoal/70 mt-1.5">— {nomAfricain}</p>
          </div>
        </div>

        {/* Citation Russe */}
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-russia-red/10 flex items-center justify-center text-xl">
            👨🏻‍🎓
          </div>
          <div>
            <p className="testimonial-quote text-sm line-clamp-3">« {citationRusse} »</p>
            <p className="text-xs font-semibold text-charcoal/70 mt-1.5">— {nomRusse}</p>
          </div>
        </div>
      </div>

      {/* Bouton qui renvoie vers YouTube */}
      <div className="mt-5 pt-4 border-t border-light-gray flex justify-end">
        {videoUrl ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-russia-red text-sm font-medium hover:underline cursor-pointer inline-flex items-center gap-1 transition-colors"
          >
            🎬 Voir l’interview complète
            <span className="text-lg">→</span>
          </a>
        ) : (
          <span className="text-gray-400 text-sm italic">
            Pas de vidéo disponible
          </span>
        )}
      </div>
    </article>
  );
}