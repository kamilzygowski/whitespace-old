import React, {useState, useEffect, useRef} from 'react'
import "./Dashboard.scss";
import image from "../../assets/x.png"
import Video from '../../components/Video/Video';
import NewsBar from '../../components/Newsbar/Newsbar';
import logo from '../../assets/logo.svg';
import astronaut from '../../assets/astronaut.svg';
import stars from '../../assets/stars.webp';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const astronautImage: any = useRef();
  const dashboardElement: any = useRef();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  useEffect(() => {
    if(scrollPosition > 0)
    window.scrollTo(0,0);
    dashboardElement.current.scrollIntoView(); // !important
    if(astronautImage !== null){
      astronautImage.current.style.top = '10px';
    }
    if(dashboardElement !== null){
      dashboardElement.current.style.backgroundColor = `rgba(255, 255, 255, 1)`
      dashboardElement.current.style.backgroundImage = `url(${stars})`;
    }
  }, [])
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      const r = 255 - (scrollPosition/(dashboardElement.current.clientHeight/1) * 450);
      const g = 255 - (scrollPosition/(dashboardElement.current.clientHeight/5) * 400)
      const b = 255 - (scrollPosition/(dashboardElement.current.clientHeight*3) *410)
      dashboardElement.current.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${0.8})`
      astronautImage.current.style.top = `${scrollPosition + 200}px`;
    return () => {
      //245, 213, 224
      //33, 5, 53
     // 11, 1 ,18
      window.removeEventListener('scroll', handleScroll);
    }
  });
  return (
    <div className="Dashboard" onScroll={handleScroll} ref={dashboardElement}>
              <Navbar linksColorCallback={scrollPosition}/>
        <img src={astronaut} alt="" ref={astronautImage} className="astronaut"/>
        <img src={logo} alt="" className="logo"/>
        <NewsBar />
        Dashboard
    </div>
  )
}

export default Dashboard