function SkeletonInfo() {
  return (
    <div className=' w-full flex-col flex animate-pulse justify-between rounded shadow  p-2 px-4 gap-4'>
      <div className='w-full flex items-center justify-between'>
        <div className='w-20 bg-gray-200 h-3 rounded '></div>
        <div className='w-20 bg-gray-200 h-3 rounded '></div>
      </div>
      <div className='w-20 bg-gray-200 h-3 rounded '></div>

      <div className='flex justify-between'>
        <div className='w-36 bg-gray-200 h-4 rounded '></div>
        <div className='w-24 bg-gray-200 h-4 rounded '></div>
      </div>
    </div>
  );
}

export default SkeletonInfo;
