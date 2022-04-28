import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Destinations from './components/Destinations/Destinations'
import Search from './components/Search/Search'
import ImgCarousel from './components/Carousel/ImgCarousel'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div >
     <Navbar />
     <Hero />
     <Destinations />
     <Search />
     <ImgCarousel />
     <Footer />
    </div>
  );
}

export default App;
