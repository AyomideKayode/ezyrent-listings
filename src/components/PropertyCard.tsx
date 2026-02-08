import type { Property } from '../types';
import { MapPin, Bed, Bath, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

export const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className='border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full'>
      {/* Image Section */}
      <div className='relative h-48 w-full'>
        <img
          src={property.image}
          alt={property.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800'>
          {formatPrice(property.price)}
          <span className='text-xs font-normal text-gray-500'>/yr</span>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-5 flex flex-col flex-grow'>
        <div className='flex items-start justify-between mb-2'>
          <h3 className='text-lg font-bold text-gray-900 line-clamp-1'>
            {property.title}
          </h3>
        </div>

        <div className='flex items-center text-gray-500 text-sm mb-4'>
          <MapPin className='w-4 h-4 mr-1' />
          {property.location}
        </div>

        {/* Features Grid */}
        <div className='flex items-center gap-4 text-gray-600 text-sm mb-6'>
          <div className='flex items-center'>
            <Bed className='w-4 h-4 mr-1.5' />
            {property.bedrooms} Beds
          </div>
          <div className='flex items-center'>
            <Bath className='w-4 h-4 mr-1.5' />
            {Math.max(1, property.bedrooms - 1)} Baths
          </div>
        </div>

        <div className='mt-auto'>
          <button
            onClick={() => onClick(property)}
            className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors'
          >
            View Details
            <ArrowRight className='w-4 h-4 ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
};
