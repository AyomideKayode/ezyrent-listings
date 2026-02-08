export const SkeletonCard = () => {
  return (
    <div className='border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-full animate-pulse'>
      {/* Image Skeleton */}
      <div className='h-52 w-full bg-gray-200' />

      {/* Content Skeleton */}
      <div className='p-5 flex flex-col flex-grow space-y-4'>
        {/* Title & Location */}
        <div className='space-y-2'>
          <div className='h-6 bg-gray-200 rounded w-3/4' />
          <div className='h-4 bg-gray-200 rounded w-1/2' />
        </div>

        {/* Features */}
        <div className='flex gap-4 pt-3 border-t border-gray-50'>
          <div className='h-4 bg-gray-200 rounded w-16' />
          <div className='h-4 bg-gray-200 rounded w-16' />
        </div>

        {/* Footer */}
        <div className='mt-auto flex justify-between pt-4'>
          <div className='h-4 bg-gray-200 rounded w-20' />
          <div className='h-8 w-8 bg-gray-200 rounded-full' />
        </div>
      </div>
    </div>
  );
};
