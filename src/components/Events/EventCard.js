export const EventCard = ({event}) => {
    return (
        <article class="col-4 col-12-mobile special">
            <a href="/"><h2 class="reel-description">{event.title}</h2></a>
            <a href="/" class="image featured"><img class="imageZoom" src={event.image_url} alt="" height="300" /></a>
            <br/>
            <h3>Guest:  {event.guest} </h3>
            <h3>The Party <b>STARTS</b> on  {event.date}  at  {event.time}</h3>
            <br/>
            <p class="event-description"> {event.description} </p>
        </article>
    );
}
