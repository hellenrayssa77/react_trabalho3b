import img from "../img/Foto.png"

import insta from "../img/instagram.png"

import wpp from "../img/wpp.png"

import git from "../img/github.png"

import lin from "../img/lin.png"

import "./contatos.css"

export const Contatos = () => {
    return (
        <div className="contact">
            <div>
            <h1>Contacts:</h1>

            <img className="ima" src={img} alt="" />

            <div className="insta">
                <img className="ins" src={insta} alt="" />
                <p>@aglayrton</p>
            </div>

            <div className="wpp">
                <img className="whats" src={wpp} alt="" />
                <p>+55 (85) 9985-9977</p>
            </div>

            <div className="git">
                <img className="hub" src={git} alt="" />
                <p>aglayrton</p>
            </div>

            <div className="lin">
                <img className="lin" src={lin} alt="" />
                <p>aglayrtonjulião</p>
            </div> <br />
            </div>


            <form action="" className="form">
                <h1>Contact form:</h1>
                <div className="mb-3">
                    <label className="form_1">Your name:</label> <br />
                    <input type="name" className="form-control1" id="exampleFormControlInput1" placeholder="" />
                </div>

                <div className="mb-3">
                    <label className="form_2">Inform your email:</label>
                    <br />
                    <input type="email" className="form-control2" id="exampleFormControlInput2" placeholder="" />
                </div>

                <div className="mb-3">
                    <label className="form_3">Means of contact:</label>
                    <br />
                    <input type="contact" className="form-control3" id="exampleFormControlInput3" placeholder="" />
                </div>

                <div className="mb-3">
                    <label className="form_4">Subject:</label> <br />
                    <input type="subject" className="form-control4" id="exampleFormControlInput4" placeholder="" />
                </div>

                <div className="mb-3">
                    <label className="form_5">Message:</label> <br />
                    <input type="message" className="form-control5" id="exampleFormControlInput5" placeholder="" />
                </div>

                <div className="btns">
                <input className="button" type="submit" name="" value="Submit" /> 
                <input className="button1" type="reset" name="" value="Clean" />
                </div> 
            </form>
        </div>
    );
}

