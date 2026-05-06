import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import ThemeToggle from "./components/header/ThemeToggle";
import LanguageToggle from "./components/header/LanguageToggle";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemeToggle />
        <LanguageToggle />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <References />
        <Contact />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
