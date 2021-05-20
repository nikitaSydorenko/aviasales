import React, { useEffect, useState} from 'react';
import '../../styles/Tickets.css'
const Ticket = ({ticket = {}}) => {

    const hours1 = Math.floor(ticket.segments[0].duration / 60);
    const minutes1 = ticket.segments[0].duration % 60;

    const hours2 = Math.floor(ticket.segments[1].duration / 60);
    const minutes2 = ticket.segments[1].duration % 60;

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
                    <h4>{ticket.segments[0].origin} – {ticket.segments[0].destination}</h4>
                    <h5>10:45 – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>{hours1}ч {minutes1}м</h5>
                </div>
                <div className="flightTime">
                    <h4> {ticket.segments[0].stops.length ? ticket.segments[0].stops.length : 'без'}  пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
            <div className="flightDuration">
                <div className="flightTime">
                    <h4>{ticket.segments[1].origin} – {ticket.segments[1].destination}</h4>
                    <h5>10:45 – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>{hours2}ч {minutes2}м</h5>
                </div>
                <div className="flightTime">
                    <h4>{ticket.segments[0].stops.length ? ticket.segments[1].stops.length : 'без'} пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
        </div>
    )
}
export default Ticket;
