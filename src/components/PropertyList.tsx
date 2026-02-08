import type { Property } from '../types';
import { PropertyCard } from './PropertyCard';
import { SearchX } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
}

export const PropertyList = ({ properties }: PropertyListProps) => {
  const handlePropertyClick = (property: Property) => {
    // will wire this up to the Modal later, for now I'll just log the clicked property
    console.log('Clicked:', property.title);
  };

  if (properties.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-20 text-center px-4'>
        <div className='bg-gray-100 p-6 rounded-full mb-4'>
          <SearchX className='w-12 h-12 text-gray-400' />
        </div>
        <h3 className='text-xl font-bold text-gray-900 mb-2'>
          No properties found
        </h3>
        <p className='text-gray-500 max-w-md'>
          We couldn't find any properties matching your criteria. Try adjusting
          your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={handlePropertyClick}
        />
      ))}
    </div>
  );
};
