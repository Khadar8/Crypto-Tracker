import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => (
  <Link to={`/coin/${coin.id}`}>
    <li className="bg-slate-800 rounded p-4 hover:bg-slate-700 transition-all cursor-pointer transform hover:scale-105 duration-200 shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-8 h-8" />
          <span className="font-medium">{coin.name} ({coin.symbol.toUpperCase()})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400 font-semibold">
            ${coin.current_price.toLocaleString()}
          </span>
          {coin.price_change_percentage_24h !== undefined && (
            <span
              className={`font-semibold text-sm ${
                coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? '▲' : '▼'}
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
          )}
        </div>
      </div>
      {coin.market_cap && (
        <span className="text-gray-400 text-sm mt-1">
          MCap: ${coin.market_cap.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
        </span>
      )}
    </li>
  </Link>
);

export default CoinCard;