import React, {useState, useEffect, useRef} from 'react'
import "./Navbar.scss"
import "./StartButton.scss"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'

const Navbar = (props: any) => {
  const { t, i18n } = useTranslation();
  const linksDiv:any = useRef();
  const handleLanguageChange = (e: any) => {
    const lng: string = e.target.title
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng)
  }
  useEffect(() => {
    if(linksDiv !== null){
      linksDiv.current.style.color = `rgba(0,0,0,1)`
    }
  }, []);
  useEffect(() => {
    if(linksDiv !== null){
      linksDiv.current.style.color = `rgba(${props.linksColorCallback/2},${props.linksColorCallback/1},${props.linksColorCallback/1},1)`
    }
    console.log(props.linksColorCallback);
  });
  return (
    <div className='Navbar'>
      <ul>
        <div className="linksDiv" ref={linksDiv}>
          <Link className='links' to="/">White Space</Link>
          <Link className='links' to="/news">{t("news-title")}</Link>
          <Link className='links' to="/downloads"> {t("download-title")}</Link>
          <Link className='links' to="/wiki"> {t("wiki-title")}</Link>
          <Link className='links' to="/highscores"> {t("highscores-title")}</Link>
        </div>
        <div>
          <span className='lang'>
            <Dropdown
              callback={handleLanguageChange}
              options={[{ option: "English", value: "en" }, { option: "Polish", value: "pl" }]}
              arrowIcon={false}
              worldIcon={true}
              showText={false}
            />
          </span>
          <Link className='links' to="/login"> {t("login-title")}</Link>
        </div>
      </ul>
    </div>
  )
}

export default Navbar