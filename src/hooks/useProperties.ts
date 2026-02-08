import { useState, useEffect } from 'react';
import type { Property } from '../types';
import { properties as mockProperties } from '../data/properties';

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Simulate network latency (1000ms)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate a successful response
        setProperties(mockProperties);
        setLoading(false);
      } catch {
        setError('Failed to fetch properties. Please try again later.');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading, error };
};
