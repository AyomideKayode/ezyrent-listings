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
    <div
      onClick={() => onClick(property)}
      className='group border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full'
    >
      {/* Image Section */}
      <div className='relative h-52 w-full overflow-hidden'>
        <img
          src={property.image}
          alt={property.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        {/* Price Badge */}
        <div className='absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-gray-100'>
          <span className='text-sm font-bold text-blue-600 font-mono'>
            {formatPrice(property.price)}
          </span>
          <span className='text-xs font-medium text-gray-500 ml-1'>/yr</span>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-5 flex flex-col grow'>
        <div className='mb-3'>
          <h3 className='text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors font-sans'>
            {property.title}
          </h3>
          <div className='flex items-center text-gray-500 text-sm mt-1 font-medium'>
            <MapPin className='w-4 h-4 mr-1.5 text-gray-400' />
            {property.location}
          </div>
        </div>

        {/* Features Grid */}
        <div className='flex items-center gap-4 text-gray-600 text-sm mb-5 pt-3 border-t border-gray-50'>
          <div className='flex items-center'>
            <Bed className='w-4 h-4 mr-2 text-blue-500' />
            <span className='font-medium'>{property.bedrooms} Beds</span>
          </div>
          <div className='flex items-center'>
            <Bath className='w-4 h-4 mr-2 text-blue-500' />
            <span className='font-medium'>
              {Math.max(1, property.bedrooms - 1)} Baths
            </span>
          </div>
        </div>

        {/* Footer/Action */}
        <div className='mt-auto flex items-center justify-between text-blue-600 font-semibold text-sm'>
          <span>View Details</span>
          <div className='p-1.5 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300'>
            <ArrowRight className='w-4 h-4' />
          </div>
        </div>
      </div>
    </div>
  );
};
