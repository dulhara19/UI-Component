import "@radix-ui/themes/styles.css";
import React from 'react';
import { Theme } from "@radix-ui/themes";
import LoginPage from './components/Auth/login.jsx';
import RegisterPage from "./components/Auth/RegisterPage.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import AuthLayout from "./components/Auth/AuthLayout.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import Sidebar from "./components/Navigation/Sidebar.jsx";
import HeroSection from "./components/Landing Page/HeroSection.jsx";
import FeaturedGifts from "./components/Landing Page/FeaturedGifts.jsx";

//import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
// import { Theme } from "@radix-ui/themes";



function App() {
  return (
    <div className="App">
       <Theme>
        <Navbar />
        <LoginPage />
        <RegisterPage />
        <ForgotPassword />
        <AuthLayout/>
        {/* <Sidebar /> */}
        <HeroSection />
        <FeaturedGifts />
      </Theme>
    </div>
  );
}

export default App;
