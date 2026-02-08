import type { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

export const PropertyList = ({
  properties,
  onPropertySelect,
}: PropertyListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={onPropertySelect}
        />
      ))}
    </div>
  );
};
