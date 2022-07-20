import React from "react"
import styled from "styled-components";

const BoxPhotos = styled.div`
background: purple;
width: 100%;
height: 100vh;
position: absolute;
top:0;
margin: auto;
`

const IntroH2 = styled.h2`
display: flex;
aling-items: center;
justify-content: center;
position: relative;
top: 30vh;
color: white;
`

export default function Fotos(){
    return(
        <BoxPhotos>
            <IntroH2>Ops, página em construção 🚧!!</IntroH2>
        </BoxPhotos>
    )
}