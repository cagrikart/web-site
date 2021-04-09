import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Service from './components/Services';
import About from './components/About';
import Our_Teams from './components/Our_Teams'
import Contact_Us from './components/Contact_Us';
import Footer from './components/Footer';
function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  return (
    <div className="App">
      <Navbar/>
    

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Studio!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>
<Service/>


  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  <About/>
  
         
  <Our_Teams/> 
 
            

  
<Contact_Us/>

  
  
  <Footer/>








    </div>
  );
}

export default App;