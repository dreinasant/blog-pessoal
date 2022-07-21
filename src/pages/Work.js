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
                  <a title="Pou" target="blank" href="https://projeto-pou-contador.netlify.app/">Pou</a>
                  <a title="Projeto objetivos sustentável" target="blank" href="https://aquamarine-gnome-5a8165.netlify.app/">Projeto objetivos sustentável</a>
                  <a title="Filmes api" target="blank" href="https://projeto-api-filmes-series.netlify.app/">Projeto filmes api</a>
                  <a title="Projeto de inglês dog e cat" target="blank" href="https://projeto-de-ingles-dog-cat.netlify.app/">Projeto de inglês dog e cat</a>
                  <a title="projeto de filmes e séries" target="blank" href="https://projeto-de-filmes.netlify.app/">Projeto de filmes e Series</a>
                  </div>
                
              </div>
            );
          }
        }