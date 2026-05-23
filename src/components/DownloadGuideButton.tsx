'use client';

import { useState } from 'react';

export default function DownloadGuideButton() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Adresse email valide requise.');
      return;
    }
    setError('');
    setLoading(true);

    // Simulation d'un appel API (à remplacer par un vrai endpoint)
   try {
  // Envoyer l'email à Formspree pour le collecter
  await fetch('https://formspree.io/f/xvzyrabn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, message: 'Demande de téléchargement du guide' }),
  });
  
  // Déclencher le téléchargement
  window.open('/guide-survie-afrorus.pdf', '_blank');
  setSubmitted(true);
} catch (err) {
  setError('Une erreur est survenue. Réessaie.');
} finally {
  setLoading(false);
}
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-md mx-auto">
        <span className="text-5xl mb-4 block">✅</span>
        <p className="text-green-800 font-bold text-xl mb-2">Merci !</p>
        <p className="text-green-700">Le téléchargement a commencé.</p>
        <p className="text-green-600 text-sm mt-4">
          Si rien ne se passe,{' '}
          <a href="/guide-survie-afrorus.pdf" className="underline font-medium">
            clique ici
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Ton adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3.5 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-russia-red focus:border-transparent text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Envoi...' : '📥 Télécharger le PDF'}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <p className="text-xs text-gray-500 mt-4 text-center">
        🔒 Nous ne partageons jamais ton email. Guide 100% gratuit.
      </p>
    </form>
  );
}