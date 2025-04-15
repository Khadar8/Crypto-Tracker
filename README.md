# Crypto Tracker - Your Real-Time Cryptocurrency Dashboard

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18.x-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-v4.x-brightgreen)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.x-blueviolet)](https://tailwindcss.com/)
[![CoinGecko API](https://img.shields.io/badge/CoinGecko_API-Powered-ff9900)](https://www.coingecko.com/en/api)

**A modern and responsive web application for tracking cryptocurrency prices, market data, and setting up personalized price alerts.**

## ✨ Key Features

* **Real-time Cryptocurrency Tracking:** Live price updates for the top cryptocurrencies.
* **Intuitive Search & Filtering:** Quickly find specific coins with a smooth, debounced search.
* **Detailed Coin View:** Explore individual cryptocurrency pages with:
    * Real-time price and market capitalization.
    * Interactive price charts showcasing historical trends.
    * Concise coin descriptions.
* **Custom Price Alerts:** Set up notifications for significant price drops (by percentage) or when a target price is reached.
* **Responsive User Interface:** Seamless experience across desktop, tablet, and mobile devices.
* **Dark/Light Mode Toggle:** User-selectable themes for optimal viewing comfort.
* **Portfolio-Ready:** Demonstrates modern frontend development skills, API integration, and user-centric design.

## 🛠️ Built With

* **Frontend Framework:** [React](https://react.dev/) (v18.x)
* **Build Tool:** [Vite](https://vitejs.dev/) (v4.x) - For fast development and optimized builds.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.x) - A utility-first CSS framework for rapid styling.
* **Routing:** [React Router DOM](https://reactrouter.com/) - For client-side navigation.
* **Data Fetching:** [Axios](https://axios-http.com/) - A promise-based HTTP client.
* **Cryptocurrency Data API:** [CoinGecko API](https://www.coingecko.com/en/api) - Reliable source for real-time crypto data.
* **Charting Library:** [Recharts](https://recharts.org/) - A composable charting library for interactive data visualization.
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (potentially, if you used them).

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd crypto-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📸 Screenshots
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Homepage.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Coinsearch.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Alert%20Setup.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/d5827185e0c488912960104ccd9ddf3deede8a10/Aboutpage.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Listofcoins.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Light%20Mode1.png)
![image alt](https://github.com/Khadar8/Crypto-Tracker/blob/master/Light%20Mode2.png)

## 📂 Project Structure

crypto-tracker/
├── public/
│   └── favicon.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Loader.jsx
│   │   ├── ErrorBlock.jsx
│   │   └── CoinCard.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CryptoDetails.jsx
│   │   └── About.jsx
|   ├── services/
│   │   ├── api.js
│   └── assets/
│       └── Screenshots
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── vite.config.js


## 💡 Potential Future Enhancements

* **User Authentication:** Allow users to save their favorite coins and alerts.
* **More Advanced Charting Options:** Implement different timeframes and technical indicators.
* **Portfolio Tracking:** Enable users to track the value of their cryptocurrency holdings.
* **Real-time Notifications:** Implement browser or push notifications for price alerts.
* **Integration with More APIs:** Explore data from other cryptocurrency exchanges or sources.

## 🚀 Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/ec93257a-fca9-445b-b998-ecccdd15644d/deploy-status)](https://app.netlify.com/sites/cryptotrackerbykhadar/deploys)

This project can be easily deployed using platforms like:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 📬 Contact

[Khadhar Syed] - [khadarsyed92@gmail.com] - [https://www.linkedin.com/in/khadhar-syed-38a1106a/] - [https://github.com/Khadar8] - [https://khadar9.artstation.com]
