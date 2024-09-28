import React from 'react';
import { ChakraProvider, } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes  , Outlet, Link } from "react-router-dom";
import Home from './screens/home/Home';
import './style.css';
import theme from './theme';
import About from './screens/about/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
