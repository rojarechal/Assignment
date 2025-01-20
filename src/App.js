import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopNavbar from "./components/TopNavbar";
import UserSelection from "./components/UserSelection";
import ChatPanel from "./components/ChatPanel";
import CompanyFooter from "./components/CompanyFooter";
import CenteredText from './components/CenteredText';
import IconTextSection from "./components/IconTextSection";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import BlogSection from "./components/BlogSection";
import "./App.css";
import TrialSection from "./components/TrialSection";
import Footer from "./components/Footer";





function App() {  
  return (
    <div>
      <Header />
      <Hero />
      <div className="app">
      <TopNavbar />
      <div className="main-content">
        <UserSelection />
        <ChatPanel />
      </div>
      <CompanyFooter />
    </div>
    <div className="App">
      <CenteredText />
      <IconTextSection />
      <Testimonial />
      <FAQ />
      <BlogSection />
      <TrialSection />
      <Footer/>
     
    </div>
    </div>
  );
}

export default App;
