import { useMemo } from 'react';
import type { Property } from '../types';

export type SortOrder = 'asc' | 'desc';

export const usePropertySearch = (
  properties: Property[],
  searchQuery: string,
  sortOrder: SortOrder,
) => {
  const sortedAndFilteredProperties = useMemo(() => {
    // 1. Filter
    let result = properties;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query),
      );
    }

    // 2. Sort
    result = [...result].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return result;
  }, [properties, searchQuery, sortOrder]);

  return sortedAndFilteredProperties;
};
