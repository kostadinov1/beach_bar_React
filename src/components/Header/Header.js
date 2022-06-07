
import { Link } from "react-router-dom"
export  function Header() {
    return(
        <div id="header">


        <div className="inner">
            <header>
                <h1><Link to="index.html" id="logo">Beach Bar</Link></h1>
                <hr />
                <p>Welcome and Have Fun!</p>
            </header>
            <footer>
                <Link to="/banner" className="button circled scrolly">Book Now</Link>
            </footer>
        </div>

        <nav id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/main-menu">Menu</Link>
                    <ul>
                        <li><Link to="/">Cocktails</Link></li>
                        <li><Link to="/">Alcohols</Link></li>
                        <li><Link to="/">Beers</Link></li>
                        <li><Link to="/soft-drinks-menu">Soft Drinks</Link></li>
                    </ul>
                </li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>

</div>
    )
}