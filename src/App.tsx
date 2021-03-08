import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import UserProvider from "./providers/user-provider";
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import ProductProvider from "./providers/product-provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <Router>
      <ProductProvider>
        <UserProvider>
          <div style={{ margin: "22px 137px 0px 137px" }}>
            <Header />
            <Content />
          </div>
          <Footer />
          <ToastContainer autoClose={2500} position="bottom-right" />
        </UserProvider>
      </ProductProvider>

    </Router>
  );
};

export default App;
