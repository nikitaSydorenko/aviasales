import React, {useEffect, useState} from 'react';
import logoAirline from "../../assets/logoAirline.png";
import '../../styles/Tickets.css'

const Ticket = ({ticket = {}}) => {

    const [segments, setSegments] = useState([]);
    const [segmentOne, setSegmentOne] = useState({})
    const [segmentTwo, setSegmentTwo] = useState({})
    useEffect(() => {
        console.log(ticket)
        setSegmentOne(ticket.segments[0])
        setSegmentTwo(ticket.segments[1])

    }, []);

    const stop2 = segmentTwo.stops || {};
    const {stops = []} = segmentOne;

    return (
        <div className="ticket">
            <div className="headerTicket">
                <div className="price">
                    <h2>{ticket.price} Р</h2>
                </div>
                <div className="logoAirline">
                    <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt=""/>
                </div>
            </div>
            <div className="flightDuration">
                <div className="flightTime">
                    <h4>{segmentOne.origin} – {segmentOne.destination}</h4>
                    <h5>10:45 – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>21ч 15м</h5>
                </div>
                <div className="flightTime">
                    <h4> {stops.length}  пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
            <div className="flightDuration">
                <div className="flightTime">
                    <h4>{segmentTwo.origin} – {segmentTwo.destination}</h4>
                    <h5>10:45 – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>21ч 15м</h5>
                </div>
                <div className="flightTime">
                    <h4>{stop2.length} пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
