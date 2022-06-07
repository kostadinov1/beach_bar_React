

export  function Header() {
    return(
        <div id="header">


        <div class="inner">
            <header>
                <h1><a href="index.html" id="logo">Beach Bar</a></h1>
                <hr />
                <p>Welcome and Have Fun!</p>
            </header>
            <footer>
                <a href="/banner" class="button circled scrolly">Book Now</a>
            </footer>
        </div>


        <nav id="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/main-menu">Menu</a>
                    <ul>
                        <li><a href="/">Cocktails</a></li>
                        <li><a href="/">Alcohols</a></li>
                        <li><a href="/">Beers</a></li>
                        <li><a href="/soft-drinks-menu">Soft Drinks</a></li>
                    </ul>
                </li>
                <li><a href="/events">Events</a></li>
                <li><a href="/photo-gallery">Photo Gallery</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>

</div>
    )
}