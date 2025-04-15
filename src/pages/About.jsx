// src/pages/About.jsx
const About = () => {
    return (
        <div className="p-6 text-gray-900 dark:text-white max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400 dark:text-cyan-300">About Crypto Tracker</h1>
        <p className="mb-4 text-lg text-gray-900 dark:text-white">
          <strong>Crypto Tracker</strong> is a modern, responsive web application that allows users to explore live data from the cryptocurrency market.
          It leverages the <a href="https://www.coingecko.com/en/api" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">CoinGecko API</a> to provide real-time prices, market insights, and interactive price charts.
        </p>
  
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">✨ Key Features</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Top Cryptocurrencies:</strong> Real-time tracking of the top cryptocurrencies by market capitalization.</li>
          <li><strong>Search & Filter:</strong> Efficiently find specific coins using the search functionality with built-in debounce to optimize performance.</li>
          <li><strong>Detailed Coin View:</strong> Explore individual cryptocurrency pages with comprehensive details, including interactive price charts for historical trends and concise descriptions.</li>
          <li><strong>Price Alerts:</strong> Set up custom alerts to be notified of significant price drops (by percentage) or when a specific target price is reached.</li>
          <li><strong>Responsive Design:</strong> Enjoy a seamless experience across various devices, from desktops to mobile phones.</li>
          <li><strong>Dark/Light Mode:</strong> Toggle between a dark and light theme to suit your viewing preferences.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">🛠️ Built With</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Frontend Framework:</strong> React, utilizing Vite as the build tool for a fast and efficient development experience.</li>
          <li><strong>Styling:</strong> Tailwind CSS, a utility-first CSS framework enabling rapid and consistent styling.</li>
          <li><strong>Routing:</strong> React Router DOM for smooth navigation between different pages of the application.</li>
          <li><strong>API Communication:</strong> Axios for making HTTP requests to the CoinGecko API to fetch cryptocurrency data.</li>
          <li><strong>Charting Library:</strong> Recharts, a composable charting library for React, used to create interactive and informative price charts.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">🎯 Purpose & Portfolio</h2>
        <p className="text-lg mb-4">
          This project was developed to showcase proficiency in modern frontend web development practices, including effective API integration, responsive design implementation, and the creation of a user-friendly interface. It serves as an excellent demonstration for portfolios and job applications, highlighting skills relevant to frontend and full-stack development roles.
        </p>

        <p className="text-sm text-gray-400 mt-2">
  Built by <a href="https://www.linkedin.com/in/khadhar-syed-38a1106a/" className="underline hover:text-cyan-300">Khadhar Syed</a>
</p>

  
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Crypto Tracker. Crafted with 💙 for learning and portfolio showcasing.
        </p>
      </div>
    );
  };
  
  export default About;