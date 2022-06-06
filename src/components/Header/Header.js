

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
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="/">Menu</a>
                    <ul>
                        <li><a href="/">Cocktails</a></li>
                        <li><a href="/">Alcohols</a></li>
                        <li><a href="/">Beers</a></li>
                        <li><a href="/">Soft Drinks</a></li>
                    </ul>
                </li>
                <li><a href="left-sidebar.html">Events</a></li>
                <li><a href="right-sidebar.html">Photo Gallery</a></li>
                <li><a href="no-sidebar.html">Contacts</a></li>
            </ul>
        </nav>

</div>
    )
}