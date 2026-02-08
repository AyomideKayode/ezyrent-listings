import { Search, ArrowUpDown } from 'lucide-react';
import type { SortOrder } from '../hooks/usePropertySearch';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

export const FilterBar = ({
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
}: FilterBarProps) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between'>
      {/* Search Input */}
      <div className='relative w-full sm:w-96'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <Search className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='text'
          className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out'
          placeholder='Search location or title...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sort Dropdown */}
      <div className='flex items-center gap-2 w-full sm:w-auto'>
        <ArrowUpDown className='h-5 w-5 text-gray-400 hidden sm:block' />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className='block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        >
          <option value='asc'>Price: Low to High</option>
          <option value='desc'>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};
