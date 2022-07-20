import React from "react";
import "../App.css";
import styled from "styled-components";
import imgAndreina from "../assets/img-andreina.jpg";


const P = styled.p`
margin-top: vw;
margin-right: vw;
color: black;
font-size: 1.5em;
font-weight: bold;
`

const ImgAndreina = styled.img`
margin-top: vw;
border-radius: 50%;
width: 20vw;
height: vh;

`
const BoxImg = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom:10vh;
  margin-top: 20vh;
 
`


export default function Home(){

    return(
        <div>
          
        <header className="header">
        <BoxImg>
          <ImgAndreina src={imgAndreina} alt="img andreina"/>
          <div className="container-title">
              <p className="paragrafo-blog">Blog</p>
              <h1 className="text-h1">Andrêina <br/>Santos</h1>
          </div>
                
            </BoxImg>
        
          
  
           
            {/* <P>Olá, bem vindo(a) ao meu blog. <br/>Me chamo Andrêina tenho 21 anos, <br/>moro no interior da Bahia (Itatiaia) e <br/>trabalho atualmente.     <br/> </P> */}
        </header>
        </div>
        
    )
}