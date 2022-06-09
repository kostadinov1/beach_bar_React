
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../../services/singleEventService";
import { Link } from "react-router-dom";


export default function EventSingle() {

    const [event, setEvent] = useState([])
    const { eventId } = useParams();

    useEffect(() => {
        getSingleEvent(eventId).then(result =>{
            setEvent(result)});

    }, [eventId])

    return (
        <div className="wrapper style2">
            <article id="main" className="container special">
                <br/>
                <br/>
                <img className="image featured" src={event.image_url} alt="" />
                    <h2> {event.title} </h2>
                    <br/>
                    <h3>Guest: {event.guest}</h3>
                    <h3>The Party <b>STARTS</b> on {event.date} at {event.time} </h3>
                    <br/>
                    <p>{event.description}</p>
                <footer>
                    <Link to="/events" className="button">Back to Events</Link>
                </footer>
            </article>
        </div>
    );
}