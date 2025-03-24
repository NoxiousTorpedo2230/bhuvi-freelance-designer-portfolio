import React, { useEffect } from 'react';

// Header and Footer Component
import Header from './Components/Navbar/Header/Header.js';
import Footer from './Components/Navbar/Footer/Footer.js'

// MainComponents
import Home from './Components/Main/Home.js';
import Contact from './Components/Main/Contact.js';
import About from './Components/Main/About.js'
import Service from './Components/Main/Service.js'

function App() {
  // Function to handle smooth scrolling with offset for fixed header
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // Get the height of the navbar for offset
      const headerHeight = document.querySelector('nav.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fix anchor links on page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Wait for DOM to be fully loaded
      setTimeout(() => {
        const id = window.location.hash;
        const element = document.querySelector(id);
        if (element) {
          const headerHeight = document.querySelector('nav.navbar').offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="App">
      <Header handleScroll={handleScroll} />
      <main>
        <Home handleScroll={handleScroll} />
        <About />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;