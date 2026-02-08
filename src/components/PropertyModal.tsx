import type { Property } from '../types';
import { X, MapPin, Bed, Bath, ArrowRight } from 'lucide-react';

interface PropertyModalProps {
  selectedProperty: Property;
  onClose: () => void;
}

export const PropertyModal = ({ selectedProperty, onClose }: PropertyModalProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300'
      onClick={handleOverlayClick}
    >
      <div className='relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]'>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-gray-800 transition-colors'
        >
          <X className='w-5 h-5' />
        </button>

        {/* Image */}
        <div className='relative h-64 sm:h-80 w-full shrink-0'>
          <img
            src={selectedProperty.image}
            alt={selectedProperty.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-20'>
            <h2 className='text-2xl font-bold text-white mb-1 drop-shadow-sm font-sans'>
              {selectedProperty.title}
            </h2>
            <div className='flex items-center text-white/90 text-sm font-medium'>
              <MapPin className='w-4 h-4 mr-1.5' />
              {selectedProperty.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <span className='text-3xl font-bold text-blue-600 font-mono'>
                {formatPrice(selectedProperty.price)}
              </span>
              <span className='text-sm font-medium text-gray-500 ml-1'>/year</span>
            </div>

            {/* Key Details */}
            <div className='flex gap-4'>
              <div className='flex items-center px-3 py-1.5 bg-blue-50 rounded-lg text-blue-700 font-medium text-sm'>
                <Bed className='w-4 h-4 mr-2' />
                {selectedProperty.bedrooms} Beds
              </div>
              <div className='flex items-center px-3 py-1.5 bg-blue-50 rounded-lg text-blue-700 font-medium text-sm'>
                <Bath className='w-4 h-4 mr-2' />
                {selectedProperty.bathrooms} Baths
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Description</h3>
              <p className='text-gray-600 leading-relaxed'>
                {selectedProperty.description}
              </p>
            </div>

            {selectedProperty.amenities && selectedProperty.amenities.length > 0 && (
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>Amenities</h3>
                <div className='flex flex-wrap gap-2'>
                  {selectedProperty.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium'
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className='p-6 border-t border-gray-100 bg-gray-50 shrink-0'>
          <button
            onClick={() => window.alert('Booking feature coming soon!')}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2'
          >
            Book Viewing
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>

      </div>
    </div>
  );
};
