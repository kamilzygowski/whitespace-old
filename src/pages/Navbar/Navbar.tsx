import React, { useState, useEffect, useRef } from 'react'
import "./Navbar.scss"
import "./StartButton.scss"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props: any) => {
  const { t, i18n } = useTranslation();
  const linksDiv: any = useRef();
  const linksDiv2: any = useRef();
  const langSpan: any = useRef();
  const signatureElement: any = useRef();
  const handleLanguageChange = (e: any) => {
    const lng: string = e.target.title
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng)
  }
  useEffect(() => {
    signatureElement.current.style.marginLeft = '-300px'
    linksDiv.current.style.color = `rgba(0,0,0,1)`
    linksDiv2.current.style.color = `rgba(0,0,0,1)`
    langSpan.current.style.color = `rgba(0,0,0,1)`

  }, []);
  useEffect(() => {
    if (props.linksColorCallback > 350) {
      signatureElement.current.style.marginLeft = '50px'
    }
    else {
      signatureElement.current.style.marginLeft = '-300px'

    } 
    linksDiv.current.style.color = `rgba(${props.linksColorCallback / 2},${props.linksColorCallback / 1},${props.linksColorCallback / 1},1)`
    linksDiv2.current.style.color = `rgba(${props.linksColorCallback / 2},${props.linksColorCallback / 1},${props.linksColorCallback / 1},1)`
    langSpan.current.style.color = `rgba(${props.linksColorCallback / 2},${props.linksColorCallback / 1},${props.linksColorCallback / 1},1)`
  });
  return (
    <div className='Navbar'>
      <ul>
        <div className="linksDiv" ref={linksDiv}>
          <Link className='signature links' ref={signatureElement} to="/">White Space</Link>
        </div>
        <div ref={linksDiv2}>
          <span className='lang' ref={langSpan}>
            <Dropdown
              callback={handleLanguageChange}
              options={[{ option: "English", value: "en" }, { option: "Polish", value: "pl" }]}
              arrowIcon={false}
              worldIcon={true}
              showText={false}
            />
          </span>
          <Link className='links' to="/news">{t("news-title")}</Link>
          <Link className='links' to="/about-us"> {t("navbar-about-us")}</Link>
          <Link className='links' to="/our-games"> {t("navbar-our-games")}</Link>
          <Link className='links' to="/locations"> {t("navbar-locations")}</Link>
          <Link className='links' to="/contact"> {t("navbar-contact")}</Link>
        </div>
      </ul>
    </div>
  )
}

export default Navbar