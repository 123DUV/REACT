import React from 'react'
import "./main.css"

function Main(){
    return(
        <div className="main">
            <h2>Habilidades</h2>
            <div className="cvMain">
                <ul className="ListaHabilidadesMain">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Dart</li>
                    <li>JAVA</li>
                    <li>VisualBasic</li>
                    <li>SQL</li>
                </ul>
            </div>
            <h2>Formacion Academica Tenologica </h2>
            <div className='cvMain'>
                <p>Tecnologia en Analisis y Desarrollo de software. SENA</p>
            

            </div>
            <h2>Proyectos En Desarrollo</h2>
            <div className='cvMain'>
                <ul>
                    <li><p>Aplicacion</p></li>
                </ul>
            </div>
            <h2>Formacion Complementaria</h2>
            <div className='cvMain'>
                <h4>SENA</h4>
                <ul>
                    <li></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Main