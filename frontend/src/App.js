import React from 'react';
import { ChakraProvider, } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import './style.css';
import theme from './theme';
import ELearning from './screens/ELearning';
import Services from './screens/Services';
import About from './screens/About';
import Tutoring from './screens/Tutoring';
import Editorial from './screens/Editorial';
import Authoring from './screens/Authoring';
import Alignment from './screens/Alignment';
import Translation from './screens/Translation';
import Career from './screens/Career';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
         <Route path="/services" element={<Services />}/>
                    <Route path="services/learning" element={<ELearning />} />
                    <Route path="services/tutoring" element={<Tutoring />} />
                    <Route path="services/editorial" element={<Editorial />} />
                    <Route path="services/authoring" element={<Authoring />} />
                    <Route path="services/alignment" element={<Alignment />} />
                    <Route path="services/translation" element={<Translation />} />
          <Route path="/career" element = {<Career/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
