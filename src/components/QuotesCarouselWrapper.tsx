'use client';

import dynamic from 'next/dynamic';

const QuotesCarousel = dynamic(() => import('./QuotesCarousel'), {
  ssr: false,
  loading: () => (
    <section className="py-16 px-4 bg-gradient-to-r from-russia-red/5 to-africa-gold/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
          Ils ont dit...
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-500">Chargement...</p>
        </div>
      </div>
    </section>
  ),
});

export default function QuotesCarouselWrapper() {
  return <QuotesCarousel />;
}