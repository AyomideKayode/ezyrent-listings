import { PropertyList } from './components/PropertyList';
import { SkeletonCard } from './components/SkeletonCard';
import { useProperties } from './hooks/useProperties';
import { TriangleAlert } from 'lucide-react';

function App() {
  const { properties, loading, error } = useProperties();

  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-900'>
      {/* Simple Header */}
      <header className='bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            EzyRent
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Discover Your Perfect Home
          </h2>
          <p className='text-gray-500 text-lg'>
            Explore our curated list of rental properties in prime locations.
          </p>
        </div>

        {error ? (
          <div className='text-center py-20'>
            <div className='inline-block p-4 rounded-full bg-red-50 text-red-500 mb-4'>
              <TriangleAlert className='w-8 h-8' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              Error Loading Properties
            </h3>
            <p className='text-gray-500'>{error}</p>
          </div>
        ) : loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <PropertyList properties={properties} />
        )}
      </main>
    </div>
  );
}

export default App;
