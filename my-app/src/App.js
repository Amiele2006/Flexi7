import GlobalStyle from './GlobalStyles';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import React, { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <GlobalStyle  theme={theme}/>
    <Header  theme={theme} toggleTheme={toggleTheme}/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
