import React, {useState, useEffect, useRef} from 'react'
import "./Dashboard.scss";
import image from "../../assets/x.png"
import Video from '../../components/Video/Video';
import NewsBar from '../../components/Newsbar/Newsbar';
import logo from '../../assets/logo.svg';
import astronaut from '../../assets/astronaut.svg';

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const astronautImage: any = useRef();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  useEffect(() => {
    if(astronautImage !== null){
      astronautImage.current.style.top = '10px';
    }
  }, [])
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      console.log(astronautImage.current.style.top);
      astronautImage.current.style.top = `${scrollPosition}px`;
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });
  return (
    <div className="Dashboard" onScroll={handleScroll}>
        <img src={astronaut} alt="" ref={astronautImage} className="astronaut"/>
        <img src={logo} alt="" className="logo"/>
        <NewsBar />
        Dashboard
    </div>
  )
}

export default Dashboard