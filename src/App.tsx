import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


import './App.css'
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";

const Home = lazy(() => import("./pages/home/Home"));

const Question = lazy(() => import("./pages/questionare/Questionare"));
const Register = lazy(() => import("./pages/auth/Register"));
const Verification = lazy(() => import("./pages/auth/Verification"));
const VerifyOtp = lazy(() => import("./pages/auth/VerifyOtp"));
const ChangePassword = lazy(() => import("./pages/auth/ChangePassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const CreatePassword = lazy(() => import("./pages/auth/CreatePassword"));



function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><Loading /></div>}>
        <Routes>
          <Route path="/" element={  <Home />} />
          
          <Route path="/questions" element={<Question />} />
          <Route path="/register" element={<Register />} />
          

          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />

          </Routes>
          </Suspense>
          <Footer/>
          </Router>

  )
}

export default App
