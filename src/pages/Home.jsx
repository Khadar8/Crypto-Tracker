import { useEffect, useState } from "react";
import axios from "axios";
import CoinCard from "../components/CoinCard";
import useDebounce from "../hooks/useDebounce";
import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setLoadingInitial(true);
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100, // Increased per_page
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setCoins(res.data);
        setFilteredCoins(res.data);
        setLoadingInitial(false);
      })
      .catch(() => {
        setError("Failed to load initial coin data. Please try again later.");
        setLoadingInitial(false);
      });
  }, []);

  useEffect(() => {
    if (debouncedSearch === "") {
      setFilteredCoins(coins);
    } else {
      const query = debouncedSearch.toLowerCase();
      const matches = coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(query) ||
          coin.symbol.toLowerCase().includes(query)
      );
      setFilteredCoins(matches);
    }
  }, [debouncedSearch, coins]);

  if (loadingInitial) return <div className="p-6"><Loader message="Loading initial coin data..." /></div>;
  if (error) return <div className="p-6"><ErrorBlock message={error} /></div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Top Cryptocurrencies</h1>

      <input
        type="text"
        placeholder="Search for a coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 mb-6 rounded bg-gray-700 text-white w-full md:w-1/2"
      />

      {filteredCoins.length === 0 && search !== "" && (
        <div className="text-gray-400 mb-4">No coins found matching your search.</div>
      )}

      <ul className="grid gap-4">
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </ul>
    </div>
  );
};

export default Home;