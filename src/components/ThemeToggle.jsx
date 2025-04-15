// ✅ ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'; // Example icons

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 text-xl p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
      aria-label={darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
    >
      {darkMode ? <BsSunFill className="text-yellow-500" /> : <BsMoonStarsFill className="text-cyan-500" />}
    </button>
  );
};

export default ThemeToggle;