import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";

const CryptoDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);
  const [chartError, setChartError] = useState(null);

  // Alert states
  const [dropPercentage, setDropPercentage] = useState("");
  const [highPrice, setHighPrice] = useState("");
  const [priceDropAlert, setPriceDropAlert] = useState("");
  const [priceHighAlert, setPriceHighAlert] = useState("");

  // Fetch coin + chart data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setChartLoading(true);
        setChartError(null);

        const [coinRes, chartRes] = await Promise.all([
          axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
          axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
            params: {
              vs_currency: "usd",
              days: 7,
            },
          }),
        ]);

        setCoin(coinRes.data);
        setChartData(
          chartRes.data.prices.map((price) => ({
            timestamp: new Date(price[0]).toLocaleDateString(),
            price: price[1],
          }))
        );
      } catch (err) {
        setError("Failed to fetch coin or chart data.");
        setChartError("Failed to fetch chart data.");
      } finally {
        setLoading(false);
        setChartLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Alert checker
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (coin?.market_data?.current_price?.usd) {
        const currentPrice = coin.market_data.current_price.usd;

        // Price drop alert
        if (dropPercentage && !isNaN(parseFloat(dropPercentage))) {
          const dropThreshold = parseFloat(dropPercentage) / 100;
          const initialPrice = chartData.at(-1)?.price;
          if (initialPrice && (initialPrice - currentPrice) / initialPrice >= dropThreshold) {
            setPriceDropAlert(`⚠️ Price dropped by ${dropPercentage}%! Now: $${currentPrice.toFixed(2)}`);
          } else {
            setPriceDropAlert("");
          }
        }

        // High price alert
        if (highPrice && !isNaN(parseFloat(highPrice))) {
          if (currentPrice >= parseFloat(highPrice)) {
            setPriceHighAlert(`🚀 Price exceeded $${highPrice}! Now: $${currentPrice.toFixed(2)}`);
          } else {
            setPriceHighAlert("");
          }
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [coin, chartData, dropPercentage, highPrice]);

  const handleDropPercentageChange = (e) => {
    setDropPercentage(e.target.value);
    setPriceDropAlert("");
  };

  const handleHighPriceChange = (e) => {
    setHighPrice(e.target.value);
    setPriceHighAlert("");
  };

  if (loading) return <div className="p-6 text-white"><Loader message="Fetching coin details..." /></div>;
  if (error) return <div className="p-6 text-white"><ErrorBlock message={error} /></div>;

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{coin.name}</h1>
      <img src={coin.image.large} alt={coin.name} className="w-24 h-24 rounded-full mb-4 border border-gray-500" />
      <p className="mb-4 text-gray-900 dark:text-white">
        <strong>Description:</strong>{" "}
        <span dangerouslySetInnerHTML={{ __html: coin.description?.en?.split(".")[0] + "." }} />
      </p>

      <div className="grid gap-2 mb-4 text-gray-900 dark:text-white">
        <p><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
        <p><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
        <p><strong>24h Change:</strong> {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
        <p><strong>Circulating Supply:</strong> {coin.market_data.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}</p>
      </div>

      <div className="mb-6 text-gray-900 dark:text-white">
        <h2 className="text-xl font-semibold mb-2">📡 Set Price Alerts</h2>
        <div className="flex space-x-4">
          <div>
            <label htmlFor="dropPercentage" className="block text-sm font-medium text-gray-900 dark:text-white">
              Price Drop (%)
            </label>
            <input
              type="number"
              id="dropPercentage"
              className="mt-1 p-2 w-32 text-black rounded-md shadow-sm"
              value={dropPercentage}
              onChange={handleDropPercentageChange}
              placeholder="e.g., 5"
            />
            {priceDropAlert && <p className="text-red-500 text-sm mt-1">{priceDropAlert}</p>}
          </div>

          <div>
            <label htmlFor="highPrice" className="block text-sm font-medium text-gray-900 dark:text-white">
              High Price ($)
            </label>
            <input
              type="number"
              id="highPrice"
              className="mt-1 p-2 w-32 text-black rounded-md shadow-sm"
              value={highPrice}
              onChange={handleHighPriceChange}
              placeholder="e.g., 50000"
            />
            {priceHighAlert && <p className="text-green-500 text-sm mt-1">{priceHighAlert}</p>}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">📊 Price Chart (Last 7 Days)</h2>
      {chartLoading ? (
        <div className="mb-4"><Loader message="Loading chart..." /></div>
      ) : chartError ? (
        <div className="mb-4"><ErrorBlock message={chartError} /></div>
      ) : (
        <div className="mb-4">
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#38bdf8" strokeWidth={2} dot={false} />
          </LineChart>
        </div>
      )}
    </div>
  );
};

export default CryptoDetails;
