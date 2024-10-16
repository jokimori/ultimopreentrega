import React from 'react';

const MovieQuestionComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Lenguaje visual</h1>
      <h2 className="subtitle">Cine y tipos de consumo</h2>

      <div className="legend">
        <p>Cada tipo de consumo se ve representado por un <strong>color</strong> distinto:</p>
        <div className="row2">
          <span className="lasMasas">Las masas <span>#64A8C8</span></span>
          <div className="button blue2">Botones</div>
        </div>
        <div className="row2">
          <span className="losApasionados">Los apasionados <span>#9DB583</span></span>
          <div className="button green2">Botones</div>
        </div>
        <div className="row2">
          <span className="laAcademia">La Academia <span>#E8AD38</span></span>
          <div className="button yellow2">Botones</div>
        </div>
      </div>

      <div className="graph">
        <p>
          Las barras tradicionales en nuestro gráfico de barras las reemplazamos por pochoclos y estrellas, 
          dependiendo de si se está mostrando cuánto se recaudó o el puntaje de IMDB:
        </p>

     {/* Primera gráfica */}
     <div className="graph">
        

        <div className="graphRow">
          <div className="bar blue" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="pochoclo.png"
                alt="Pochoclo"
                width={30}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
          <div className="bar green" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="pochoclo.png"
                alt="Pochoclo"
                width={30}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
          <div className="bar yellow" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="pochoclo.png"
                alt="Pochoclo"
                width={30}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Segunda gráfica duplicada */}
      <div className="graph">
       

        <div className="graphRow">
          <div className="bar blue" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="star.png"
                alt="estrella"
                width={40}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
          <div className="bar green" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="star.png"
                alt="estrella"
                width={40}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
          <div className="bar yellow" />
          <div className="arrow" />
          <div className="iconColumn">
            {Array(4).fill(0).map((_, index) => (
              <img
                key={index}
                src="star.png"
                alt="estrella"
                width={40}
                height={30}
                className="popcorn"
              />
            ))}
          </div>
        </div>
      </div>
    </div>


      {/* Nueva sección: Baldes de pochoclos */}
      <div className="buckettext">
        <p className="buckettext">
          Los valores en el eje X los mostramos con baldes de pochoclos:
        </p>
        <div className="bucketRow">
          <div className="bucket">
            <img src="Bucket1.png" alt="Pochoclo 2014" className="bucketImage" />
            <p>2014</p>
          </div>
          <div className="bucket">
            <img src="Bucket2.png" alt="Pochoclo 2014" className="bucketImage" />
            <p>2014</p>
          </div>
          <div className="bucket">
            <img src="Bucket3.png" alt="Pochoclo 2014" className="bucketImage" />
            <p>2014</p>
          </div>
        </div> 
      </div>
      
      <div className="bucketTextprueba">
        <p className="bucketTextprueba">
           Cuando el usuario haga hover en alguna de las barras del gráfico o los baldes en X, al costado del mismo le aparecerá un balde personalizado con la película que le corresponde al año. Ejemplos:
        </p>
        <div className="bucketRowprueba">
          <div className="bucketprueba">
            <img src="baldeprueba3.png" alt="Prueba3" className="bucketImageprueba" />
            
          </div>
          <div className="bucketprueba">
            <img src="baldeprueba.png" alt="Prueba" className="bucketImageprueba" />
            
          </div>
          <div className="bucketprueba">
            <img src="baldeprueba2.png" alt="Prueba2" className="bucketImageprueba" />
            
          </div>
        </div> 
      </div>
      

      <div className="Grafico">
        <p className="textografico">Ejemplo de gráfico:</p>
        
        <img src="graphic.png" alt="grafico" className="grafico" />
      </div>

      <p className="subtitle"> Encuesta</p>
       <p className="legend"> Nuestra idea es incluir un test que le demuestre al usuario qué tipo de consumo se parece más al suyo.</p> 
     
      <div className="legend">
        <p className="progressText">
          El usuario puede saber en qué instancia se encuentra de la encuesta gracias a la barra de progreso:
        </p>
        <img src="progress.png" alt="Progreso" className="progressImage" />
      </div>
     

      <p className="legend">
        Cada respuesta de las preguntas del test representará un tipo de consumo. Al finalizar la encuesta, el
        usuario contará con un color especial que se habrá formado de la mezcla de los colores que le corresponden 
        a cada uno de los tipos de consumo. El tipo de consumo que más se asemeje al suyo contará con un porcentaje 
        mayor en la mezcla de los tres colores.
      </p>

      <p className="legend">Ejemplo:</p>

      {/* Sección centrada */}
      <div className="centerSeccion">
        <p className="ejemplo">Tu color:</p>
        <p className="ejemplo">#74ABB6</p>
        <img src="colores.png" alt="Colores" className="colores" />
        <p className="textoejemplo">
        Tus gustos se conforman en un 79% como el consumo de las masas, un 19% como el de los apasionados y un 4% como el de La Academia.
      </p>
      </div>

    </div>
    
    
    
    
    
  );
};

export default MovieQuestionComponent;
