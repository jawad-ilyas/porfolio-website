import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import MyExpertise from './Components/MyExpertise/MyExpertise'
import About from './Components/About/About'
import Porfolio from './Components/Porfolio/Porfolio'
import UserContextProvider from './Context/WebsiteContextProvider'
import { ThemeProvider } from './Context/Theme'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {

    setThemeMode("light")
  }
  const darkTheme = () => {

    setThemeMode("dark")
  }


  // actual change into theme


  useEffect(() => {
   document.querySelector('html').classList.remove("light","dark");
   document.querySelector('html').classList.add(themeMode);

  }, [themeMode])
  
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <HeroSection />
      <MyExpertise />
      <About />
      <Porfolio />
      {/* <Review /> */}
      <Contact />
      <Footer />
    </ThemeProvider>

  )
}

export default App
