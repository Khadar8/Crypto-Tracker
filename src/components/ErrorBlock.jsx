const ErrorBlock = ({ message, onRetry }) => (
    <div className="bg-red-500 text-white p-4 rounded-md shadow-md flex flex-col items-center justify-center space-y-3">
      <span className="text-xl">⚠️ Error</span>
      <p className="text-center">{message || "An unexpected error occurred."}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-white text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Retry
        </button>
      )}
    </div>
  );
  
  export default ErrorBlock;