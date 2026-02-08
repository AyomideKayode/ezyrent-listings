import { PropertyList } from './components/PropertyList';
import { useProperties } from './hooks/useProperties';
import { Loader2 } from 'lucide-react';

function App() {
  const { properties, loading, error } = useProperties();

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Simple Header */}
      <header className='bg-white shadow-sm sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <h1 className='text-2xl font-bold text-blue-600'>EzyRent</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <Loader2 className='w-8 h-8 animate-spin text-blue-600' />
          </div>
        ) : error ? (
          <div className='text-center text-red-500 py-10'>{error}</div>
        ) : (
          <>
            <div className='mb-6'>
              <h2 className='text-xl font-semibold text-gray-800'>
                Available Properties
              </h2>
              <p className='text-gray-500'>Find your next dream home.</p>
            </div>
            <PropertyList properties={properties} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
