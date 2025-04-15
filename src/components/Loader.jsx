const Loader = () => {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-gray-700 h-16 rounded-lg animate-pulse">
            <div className="flex items-center p-4 space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-600 animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-600 rounded animate-pulse w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded animate-pulse w-1/2"></div>
              </div>
              <div className="w-20 h-6 bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Loader;