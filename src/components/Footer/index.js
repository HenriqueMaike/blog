import './footer.css'

function Footer(){

    const data = new Date();
    const ano = data.getFullYear(); 

    return(
        <footer>
            <div className="container-footer">
                <div className="informacoes-footer">
                    <p>{ano} © Blog - Lorem Ipsum</p>
                    <p>Termos de Privacidade</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;