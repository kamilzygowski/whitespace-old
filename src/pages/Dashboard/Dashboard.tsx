import React, { useState, useEffect, useRef } from 'react'
import "./Dashboard.scss";
import image from "../../assets/x.png"
import Video from '../../components/Video/Video';
import NewsBar from '../../components/Newsbar/Newsbar';
import logo from '../../assets/logo.svg';
import astronaut from '../../assets/astronaut.svg';
import stars from '../../assets/stars.webp';
import Navbar from '../Navbar/Navbar';
import AllGames from '../../components/AllGames/AllGames';
import Footer from '../../components/Footer/Footer';

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const astronautImage: any = useRef();
  const dashboardElement: any = useRef();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  useEffect(() => {
    if (scrollPosition > 0)
      window.scrollTo(0, 0);
    dashboardElement.current.scrollIntoView(); // !important
    if (astronautImage !== null) {
      astronautImage.current.style.top = '10px';
    }
    if (dashboardElement !== null) {
      dashboardElement.current.style.background = `linear-gradient(rgb(${255}, ${255}, ${255}), rgb(${255}, ${255}, ${255}))`
     // dashboardElement.current.style.backgroundImage = `url(${stars})`;
    }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    const r = 255 - (scrollPosition / (dashboardElement.current.clientHeight / 1) * 450);
    const g = 255 - (scrollPosition / (dashboardElement.current.clientHeight / 5) * 400)
    const b = 255 - (scrollPosition / (dashboardElement.current.clientHeight * 3) * 410)
    astronautImage.current.style.top = `${scrollPosition + 100}px`;
    if (scrollPosition > 10)
      dashboardElement.current.style.background = `linear-gradient(rgb(${r * 10}, ${g}, ${b * 5}), rgb(${55}, ${10}, ${b}))`
      else   dashboardElement.current.style.background = `linear-gradient(rgb(${255}, ${255}, ${255}), rgb(${255}, ${255}, ${255}))`
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });
  return (
    <div className="Dashboard" onScroll={handleScroll} ref={dashboardElement}>
      <Navbar linksColorCallback={scrollPosition} />
      <img src={astronaut} alt="" ref={astronautImage} className="astronaut" />
      <img src={logo} alt="" className="logo" />
      <NewsBar />
      <AllGames />
      <Footer />
    </div>
  )
}

export default Dashboard