import "./style.css";
import {Link} from "react-router-dom"

export const Menu =  () => {
    return (
        <>
        <header>
            <h1 className="logo"> Technologies</h1>
            <nav className='menu'>
                <ul>
                    <li>
                       <Link to = '/home'>Home</Link>
                    </li>

                    <li>
                    <Link to = '/contatos'>Contatos</Link>
                    </li>

                    <li>
                    <Link to = '/servicos'>Serviços</Link>
                    </li>

                </ul>
            </nav>
        </header>
        </>
    );
}