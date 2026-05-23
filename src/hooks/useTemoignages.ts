import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Temoignage } from '@/types';

export function useTemoignages(categorie?: string) {
  const [temoignages, setTemoignages] = useState<Temoignage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemoignages = async () => {
      setLoading(true);
      let query = supabase.from('temoignages').select('*').order('created_at', { ascending: false });

      if (categorie && categorie !== 'all') {
        query = query.eq('categorie', categorie);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
      } else {
        setTemoignages(data || []);
      }
      setLoading(false);
    };

    fetchTemoignages();
  }, [categorie]);

  return { temoignages, loading, error };
}