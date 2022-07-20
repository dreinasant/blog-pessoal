import React, { Component } from "react";

export default class Works extends Component {
        state = {
          stateList: false
        };
      
        handleList = () => {
          this.setState({ stateList: !this.state.stateList });
        };
      

        render() {
            return (
                
              <div className="container-dropdown">
            
                <h2 className="botao-categorias" >Works</h2>
                
                  <div className="box-butom" >
                  <a title="Pou" href="https://projeto-pou-contador.netlify.app/" target="_blank">Pou</a>
                  <a title="Projeto objetivos sustentável" href="https://projeto-objetivos-sustentavel.netlify.app" target="_blank">Projeto objetivos sustentável</a>
                  <a title="Filmes api" href="https://projeto-api-filmes-series.netlify.app/" target="_blank">Projeto filmes api</a>
                  <a title="Projeto de inglês dog e cat" href="https://projeto-de-ingles-dog-cat.netlify.app/" target="_blank">Projeto de inglês dog e cat</a>
                  <a title="projeto de filmes e séries" href="https://projeto-de-filmes.netlify.app/" target="_blank">Projeto de filmes e Series</a>
                  </div>
                
              </div>
            );
          }
        }