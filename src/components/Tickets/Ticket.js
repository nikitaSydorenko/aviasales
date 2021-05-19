import React, {useEffect, useState} from 'react';
import '../../styles/Tickets.css'

const Ticket = ({ticket = {}}) => {
    console.log(ticket)
    const [segments, setSegments] = useState([]);
    const [segmentOne, setSegmentOne] = useState({})
    const [segmentTwo, setSegmentTwo] = useState({})
    useEffect(() => {
        setSegmentOne(ticket.segments[0])
        setSegmentTwo(ticket.segments[1])
    }, []);

    // let t = new Date(ticket.segments[0].date);

    const time1 = ticket.segments[0].duration;
    const hours1 = Math.floor(time1 /60);
    const minutes1 = time1 % 60;
    const time2 = ticket.segments[1].duration;
    const hours2 = Math.floor(time2 /60);
    const minutes2 = time2 % 60;
    const stop2 = segmentTwo.stops || {};
    const {stops = []} = ticket.segments[0];

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
                    <h5>{hours1}ч {minutes1}м</h5>
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
                    <h5>{hours2}ч {minutes2}м</h5>
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
