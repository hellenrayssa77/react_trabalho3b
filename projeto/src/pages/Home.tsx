import img from "../img/Foto.png"
import "./home.css"

export const Home = () => {
    return(
        <>
        <h1>What is HTML?</h1>
        <p>HTML is a markup language used in building web pages. HTML documents can be interpreted by browsers. <br />
            The technology is the result of the junction between HyTime and SGML standards. <br />
            HyTime is a standard for the structured representation of hypermedia and time-based content.</p>

        <h1>What is JavaScript?</h1>    
        <p> JavaScript allows web developers to add dynamic elements to landing pages, such as animated graphics, <br />
             clickable buttons, and effects that appear when hovering over a specific section of the site.</p>    

        <h1>What is Java?</h1>    
        <p>Java is an object-oriented programming language developed in the 1990s by a team of programmers led by James Gosling, <br />
             at Sun Microsystems, which in 2008 was acquired by Oracle Corporation.</p> 
 
        <h1>What is React JS?</h1>
        <p>React JS is a JavaScript library for creating user interfaces — or UI (user interface).</p>

        <h1>What is Python?</h1>
        <p>Pythonis a high-level, multi-purpose programming language. It can be used for multiple tasks, <br />
            from data analysis and visualization to web development, prototyping and automation.</p>

        <h1>What is PHP?</h1> 
        <p>PHP is a free interpreted language, originally used only for the development of applications present <br />
             and acting on the server side, capable of generating dynamic content on the World Wide Web.</p>   

        <img className="ima" src={img} alt="" />
        </>
    );
}