'use client';

import { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
  country: string;
  flag: string;
}

const quotes: Quote[] = [
  {
    text: "La jeunesse africaine est l'avenir du continent, et la Russie est un partenaire clé pour son développement.",
    author: "Paul Biya",
    country: "Cameroun",
    flag: "https://flagsapi.com/CM/flat/64.png"
  },
  {
    text: "L'éducation est l'arme la plus puissante pour changer le monde, et la coopération avec la Russie ouvre des portes immenses.",
    author: "Nelson Mandela",
    country: "Afrique du Sud",
    flag: "https://flagsapi.com/ZA/flat/64.png"
  },
  {
    text: "La Russie et l'Afrique partagent une amitié historique, et ensemble nous pouvons construire un avenir meilleur.",
    author: "Vladimir Poutine",
    country: "Russie",
    flag: "https://flagsapi.com/RU/flat/64.png"
  },
  {
    text: "Les échanges éducatifs entre la Russie et l'Afrique forment les leaders de demain.",
    author: "Sergueï Lavrov",
    country: "Russie",
    flag: "https://flagsapi.com/RU/flat/64.png"
  },
  {
    text: "Investir dans la jeunesse, c'est investir dans la paix et la prospérité de nos nations.",
    author: "Macky Sall",
    country: "Sénégal",
    flag: "https://flagsapi.com/SN/flat/64.png"
  }
];

export default function QuotesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrentIndex(index);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-russia-red/5 to-africa-gold/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
          Intellectuels et Révolutionnaires...
        </h2>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Citation active */}
          <div className="transition-all duration-500 min-h-[200px] flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              « {quotes[currentIndex].text} »
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src={quotes[currentIndex].flag}
                alt={`Drapeau ${quotes[currentIndex].country}`}
                className="w-10 h-7 inline-block rounded shadow-sm"
              />
              <div className="text-left">
                <p className="font-bold text-charcoal">{quotes[currentIndex].author}</p>
                <p className="text-sm text-gray-500">{quotes[currentIndex].country}</p>
              </div>
            </div>
          </div>

          {/* Flèche gauche */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Précédent"
          >
            <svg className="w-6 h-6 text-russia-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Suivant"
          >
            <svg className="w-6 h-6 text-russia-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs (dots) */}
          <div className="flex justify-center mt-6 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-russia-red scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Citation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}