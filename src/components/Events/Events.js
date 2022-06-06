
export default function Events() {
    return (
        <div id="down" class="wrapper style1">
            <div class="container">

                <article id="main" class="container special">
                    <header>
                        <h2>Our Next Event</h2>
                    </header>
                    <img class="image featured" src="latestevent.image_url" alt=""/>
                    <h2>Event title</h2>
                    <br/>
                    <h3>Guest: Latest Event.Guest</h3>
                    <h3>The Party <b>STARTS</b> on latest_event.date at latest_event.time </h3>
                    <br/>
                    <p>latest_event.description </p>
                </article>

                <hr />
                <header>
                    <h2>Upcoming Events</h2>
                </header>

                <div class="row">
                    <article class="col-4 col-12-mobile special">
                        <a href="/"><h2 class="reel-description">event.title</h2></a>
                        <a href="/" class="image featured"><img class="imageZoom" src="event.image_url" alt="" height="300" /></a>
                        <br/>
                        <h3>Guest:  event.guest </h3>
                        <h3>The Party <b>STARTS</b> on  event.date  at  event.time</h3>
                        <br/>
                        <p class="event-description"> event.description </p>
                    </article>
                </div>
                
                <hr />
                <section class="carousel">
                    <div class="reel">
                        <article>
                            <header>
                                <h3>event.title</h3>
                            </header>
                                <a href="/" class="image featured"><img src="event.image_ur" alt="" width="auto" height="400" /></a>
                                <p class="event-description">event.description</p>
                        </article>
                    </div>
                </section>
            
            </div>
        </div>
    );
}