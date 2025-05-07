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
import Testimonials from "./components/Navigation/Testimonials.jsx";
import Footer from "./components/Navigation/Footer.jsx";
import GiftCard from "./components/Product/GiftCard.jsx";
import GiftGrid from "./components/Product/GiftGrid.jsx";
import GiftShopPage from "./components/Product/SampleGifts.jsx";

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
        <Testimonials />
        <Footer />
        
        <GiftCard
  gift={{
    id: 1,
    name: "Valentine Rose Box",
    description: "Elegant rose box with scented candles and chocolates.",
    price: 49.99,
    image: "/images/rose-box.jpg",
    label: "New"
  }}
  onAddToCart={(id) => console.log("Added gift with id:", id)}
/>
        <GiftShopPage />
      </Theme>
    </div>
  );
}

export default App;
