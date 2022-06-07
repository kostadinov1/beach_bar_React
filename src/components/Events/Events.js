import { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import * as eventsService from '../../services/eventsService'

export function Events() {


    const EventReelCard = ({event}) => {
        return (
        <article>
            <header>
                <h3>{event.title}</h3>
            </header>
                <a href="/" class="image featured"><img src={event.image_url} alt="" width="auto" height="400" /></a>
                <p class="event-description">{event.description}</p>
        </article>
        );
    }


    const [events, setEvents] = useState([])
    const [latestEvent, setLatestEvent] = useState([])


    useEffect(() => {
        eventsService.getAllEvents()
        .then(result => {
            setLatestEvent(result[0])
            setEvents(result);
        });
    },[])


    return (
        <div id="down" class="wrapper style1">
            <div class="container">
                <article id="main" class="container special">
                    <header>
                        <h2>Our Next Event</h2>
                    </header>
                    <img class="image featured" src={latestEvent.image_url} alt=""/>
                    <h2>{latestEvent.title}</h2>
                    <br/>
                    <h3>Guest: {latestEvent.guest}</h3>
                    <h3>The Party <b>STARTS</b> on {latestEvent.date} at {latestEvent.time} </h3>
                    <br/>
                    <p>{latestEvent.description} </p>
                </article>

                <hr />
                <header>
                    <h2>Upcoming Events</h2>
                </header>
                <div class="row">
                    {events.map(x => <EventCard key={x.id} event={x}/>)}
                </div>
                <hr />
                <section class="carousel">
                    <div class="reel">
                        {events.map(x => <EventReelCard key={x.id} event={x}/>)}
                    </div>
                </section>
            
            </div>
        </div>
    );
}