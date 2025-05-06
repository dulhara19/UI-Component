import "@radix-ui/themes/styles.css";
import React from 'react';
import LoginPage from './components/Auth/login.jsx';
import RegisterPage from "./components/Auth/RegisterPage.jsx";

//import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
// import { Theme } from "@radix-ui/themes";


function App() {
  return (
    <div className="App">
        <LoginPage />
        <RegisterPage />
    </div>
  );
}

export default App;
