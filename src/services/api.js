// src/api/cryptoApi.js
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API response error:", error.response.status, error.response.data);
      if (error.response.status === 404) {
        throw new Error("Coin not found.");
      } else if (error.response.status >= 500) {
        throw new Error("Server error. Please try again later.");
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from API:", error.request);
      throw new Error("Network error. Please check your internet connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the API request:", error.message);
      throw new Error("Failed to make API request.");
    }
    throw new Error("Failed to fetch data from the server"); // Generic fallback
  }
};

export const getCoins = () =>
  handleRequest(() =>
    axiosInstance.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
      },
    })
  );

export const getCoinDetails = (id) =>
  handleRequest(() => axiosInstance.get(`/coins/${id}`));