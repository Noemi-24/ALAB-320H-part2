import './Footer.css'

function Footer(){
    return(
        <footer>
            <nav aria-label="Secondary Navigation" role="navigation">
                <ul className="bottom-navigation">
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">On the Street</a></li>
                    <li><a href="#">The Catwalk</a></li>
                    <li><a href="#">AdWatch</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
        </footer>
    );
}

export default Footer;