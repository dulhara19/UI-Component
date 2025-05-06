import "@radix-ui/themes/styles.css";
import React from 'react';
import LoginPage from './components/Auth/login.jsx';
import RegisterPage from "./components/Auth/RegisterPage.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import AuthLayout from "./components/Auth/AuthLayout.jsx";

//import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
// import { Theme } from "@radix-ui/themes";


function App() {
  return (
    <div className="App">
        <LoginPage />
        <RegisterPage />
        <ForgotPassword />
        <AuthLayout/>
    </div>
  );
}

export default App;
