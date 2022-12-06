import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme} = useContextGlobal();
  return (
    <footer className='footer' id={theme.theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

/*const Footer = () => {
  const {theme, setTheme} = useState("light");
  const toggleTheme = () => {
    setTheme((curr === "light" ? "dark" : "light"));
  };

  <img src="./images/DH2.png" alt='DH-logo'/>

  return (
    <ThemeContext.Provider value={{theme, toggleTheme }}>
      <div className='footer' id="light">
        <p>Power by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      <div/>  
    </ThemeContext.Provider>
  );
}*/

export default Footer;
