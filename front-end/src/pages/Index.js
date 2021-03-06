import React from "react";
import Title from "../components/Tilt";

import "../styles/Index.css"

const Index = () => {
  const userDataFromLocalStorage = JSON.parse(localStorage.getItem("response"));
  return (
    <>                     
        <Title        
        options = {{
          max: 25,
		      speed: 400,
          glare: true,
          "max-glare": 1
        }}>
          <div className = "container">
            <div className = "card">
              <div className = "content">
                <h2>Logged</h2>
                <h3>{ userDataFromLocalStorage.name }</h3>
                <p>
                  Esta aplicação usa API-rest em TypeScript e pode ser 
                  facilmente implementada em seus projetos veja mais no meu GitHub                  
                  </p>
                  <a 
                  target = "_blanck"
                  href = "https://github.com/Allan28818/Login-application">GitHub</a>   
                  <p
                  className = "page-landing-author"
                  >
                    &copy; 
                    Copyright 
                    Allan Julie Fontes de Oliveira 2021
                  </p> 
              </div>
            </div>
          </div>
        </Title>
    </>
  )
}

export default Index;  