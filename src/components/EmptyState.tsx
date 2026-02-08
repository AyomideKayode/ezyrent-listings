import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 text-center'>
      <div className='bg-gray-100 p-6 rounded-full mb-4'>
        <SearchX className='w-12 h-12 text-gray-400' />
      </div>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
        No properties match your search
      </h3>
      <p className='text-gray-500 max-w-sm mb-8'>
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      <button
        onClick={onReset}
        className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Reset Filters
      </button>
    </div>
  );
}
