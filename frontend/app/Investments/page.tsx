"use client";
import { useState } from "react";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar";
import Timeline from "../components/TimeLine";
import StakingCard from "../components/StakingCard";
import LoginButton from "../components/LoginButton";



const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  const handleConnectWallet = () => {
    setShowLoginCard(true);
  };

  const handleCloseLoginCard = () => {
    setShowLoginCard(false);
    setIsLoggedIn(true); // Set logged in after successful login/register
  };
  return (
    <div >
      
      <nav className="navbar">
      <Navbar />
      <div className="navbar-buttons">
        <LoginButton/>

        
      </div>
    </nav>
      <main className="bg-[#0c0a09]">
        {/* <Sidebar/> */}
        <div className="timeline-container">
      <div className='left'>
        <Timeline in={5}/>
        </div>
        <div className='right'>
        
        {/* <StakingCard/> */}
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
        </div></div>
        {/* Main content of the page */}
        {showLoginCard && <LoginCard onClose={handleCloseLoginCard} />}
      </main>
    </div>
  );
};

export default Home;