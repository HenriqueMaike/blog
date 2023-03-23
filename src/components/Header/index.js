import { Link } from "react-router-dom";
import './header.css'

import 'remixicon/fonts/remixicon.css'

function Header(){
    return(
        <header>
            <div className="container">
                <nav class="navbar">
                    <a href="/" class="logo"><h2>LOGO</h2></a>
                    <input type="checkbox" id="toggler"/>
                    <label for="toggler"><i class="ri-menu-line"></i></label>
                        <div class="menu">
                            <ul class="list">
                                <Link to={"/" }>INICIOS</Link>
                                <Link to={"/sobre" }>SOBRE</Link>
                                <Link to={"/Contato" }>CONTATO</Link>
                            </ul>
                        </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;