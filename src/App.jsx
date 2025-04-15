import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CryptoDetails from "./pages/CryptoDetails";
import About from "./pages/About"; // Import the About component
import Header from "./components/Header";
import "./App.css"; // or your global styles
// import NotFound from "./pages/NotFound"; // Import a NotFound component (if you create one)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-slate-100">
        <Header />
        <main className="flex-grow"> {/* Use main for the primary content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<CryptoDetails />} />
            <Route path="/about" element={<About />} /> {/* Add the About route */}
            {/* <Route path="*" element={<NotFound />} /> */} {/* Add a catch-all NotFound route */}
          </Routes>
        </main>
        {/* You could add a Footer component here in the future */}
      </div>
    </Router>
  );
}

export default App;