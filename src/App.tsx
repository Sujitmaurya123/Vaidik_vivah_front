import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


import './App.css'
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/auth/Login"));
const Question = lazy(() => import("./pages/questionare/Questionare"));
const Register = lazy(() => import("./pages/auth/Register"));



function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><Loading /></div>}>
        <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/register" element={<Register />} />



          </Routes>
          </Suspense>
          <Footer/>
          </Router>

  )
}

export default App
