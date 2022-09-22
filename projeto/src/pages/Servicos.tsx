import img from "../img/Foto.png"

import html from "../img/html.png"

import jvas from "../img/js.png"

import java from "../img/java.png"

import react from "../img/React.png"

import pt from "../img/python.png"

import php from "../img/php.png"


import "./contatos.css"

export const Servicos = () => {
    return(
        <>

        <h1>We are hiring:</h1>

        <div className="html">
            <img className="ht" src={html} alt="" />
            <p>HTML developer</p>
        </div>

        <div className="jvas">
            <img className="js" src={jvas} alt="" />
            <p>JavaScript developer</p>
        </div>
        
        <div className="java">
            <img className="j" src={java} alt="" />
            <p>Java developer</p>
        </div>
        
        <div className="react">
            <img className="reac" src={react} alt="" />
            <p>React JS developer</p>
        </div>
       
       <div className="python">
        <img className="py" src={pt} alt="" />
        <p>Python developer</p>
       </div>

       <div className="php">
        <img className="ph" src={php} alt="" />
        <p>PHP developer</p>
       </div>
        
        <img className="ima" src={img} alt="" />
        </>
    );
}