

 
export function Home() {
    return (
        <div>
            <section id="banner">
            <header>
                <h2>Hello And Welcome to <strong>Delano Beach Bar</strong>.</h2>
                <p>Come and join Us on some of Our Events!</p>
            </header>
        </section>
        <div class="wrapper style2">
            <article id="main" class="container special">
                <header>
                    <h2>Our Next Event</h2>
                </header>
                    <img class="image featured" src="{{ event.image_url }}" alt="" />
                    <h2> event.title </h2>
                    <br/>
                    <h3>Guest: event.guest</h3>
                    <h3>The Party <b>STARTS</b> on event.date at event.time </h3>
                    <br/>
                    <p> event.description </p>
                        <h2>No Events Yet</h2>
                <footer>
                    <a href="{% url 'events' %}" class="button">More Events</a>
                </footer>
            </article>
        </div>
        <section class="carousel">
            <div class="reel">

                <article>
                    <a href="{% url 'cocktail menu' %}" class="image featured"><img src="{{ product.image_url }}" alt="" width="auto" height="400" /></a>
                    <header>
                        <h3><a href="{% url 'cocktail menu' %}">product.name </a></h3>
                                    <h4>Price: product.price floatformalv.</h4>
                    </header>
                    <p class="reel-description">product.description</p>
                </article>
                    <h2>No Products Yet</h2>
            </div>
        </section>
        <div class="wrapper style1">
            <section id="features" class="container special">
                <header>
                <a href="{% url 'photo gallery' %}"><h2>Check out the Gallery</h2></a>
                <p>Ipsum volutpat consectetur orci metus consequat imperdiet duis integer semper magna.</p>
                </header>
                <div class="row">
                    <article class="col-4 col-12-mobile special">
                        <a href="/" class="image featured"><img src=" photo.image_local.url " height="300" width="300" alt="" /></a>
                    </article>
                        <h2>No Photos Yet</h2>
                </div>
            </section>
        </div>
    </div>       
    )

}