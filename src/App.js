import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Work";
import IconSeta from "./assets/icon-seta.svg";
import Fotos from "./pages/Fotos";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import instagram from "./assets/instagram.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";



const GlobalStyle = createGlobalStyle`


*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  list-style: none;
}
`;

const LinkInicio = styled(Link)`
  color: black;
  text-decoration: none;
  padding-right: 3vw;
  position: relative;
  z-index: 99;
  
  &:hover{
    opacity: 0.6;
  }
`;



const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  width: 100%;
  position: relative;  
  z-index: 99;
  
`
const ImgIcon = styled.img`
  width: 4.3vw;
  padding: 1vw;
  
`


const Ul = styled.ul`
display: flex;
align-items: center;
font-size: 1.2em;
font-weight: bold;
font-family: normal normal bold 13px/15px Arial;
`

const IntroliSeta = styled.li`
display: flex;
align-items: center;
padding-right: 2.5vw;
font-size: 0.9em;

font-weight: bold;
font-family: normal normal bold 13px/15px Arial;

&:hover{
  cursor: pointer;
}
`

export default function App(){
  return(
    
    <Router>
  
      <GlobalStyle/>
      <Nav>

        
      <div>
        <a href="https://www.instagram.com/dreina.sant/"><ImgIcon src={instagram} alt="instagram"/></a>
        <a href="https://github.com/dreinasant"><ImgIcon src={github} alt="github"/></a>
        <a href="https://www.linkedin.com/in/andr%C3%AAina-santos/"><ImgIcon src={linkedin} alt="linkedin"/></a>
      </div>

      <Ul>
        <LinkInicio to="/"><li>Home</li></LinkInicio>
        <IntroliSeta>
        <Works/>
        <img
                className="img-seta-categoria"
                src={IconSeta}
                alt="Seta para baixo"
              />
              </IntroliSeta>
        <LinkInicio to="/Fotos"><li>Fotos</li></LinkInicio>
              
      </Ul>

      </Nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Fotos" element={<Fotos/>}/>
      </Routes>

    </Router>
  
  )
}