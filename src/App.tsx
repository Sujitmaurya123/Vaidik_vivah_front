import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/home/Navbar";

import './App.css'
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/home/Footer";
const Home = lazy(() => import("./pages/home/Home"));

function App() {
  

  return (
    <Router>
      <ScrollToTop />

      <Navbar />
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><Loading /></div>}>
        <Routes>
          <Route path="/" element={  <Home />} />
          </Routes>
          </Suspense>
          <Footer/>
          </Router>

  )
}

export default App
