import React, {useEffect, useState} from 'react';
import '../../styles/Tickets.css'
const Ticket = ({ticket = {}}) => {

    const [dataTicket, setDataTicket] = useState({})

    console.log(ticket)

    useEffect(() => {
        // const timeOfArrivalHours = new Date(ticket.segments[0].date).getUTCHours();
        //
        //
        // const h = timeOfArrivalHours + ticket.segments[0].duration;
        //
        //
        // const timeOfArrivalMinutes = ticket.segments[0].duration + ticket.segments[1].duration
        // let l = 1343 + ticket.segments[0].duration; //dur
        // let mib = l % 60
        // let hr = Math.floor(l / 60)
        // console.log( hr + ':' + mib);


        const hours1 = Math.floor(ticket.segments[0].duration / 60);
        const minutes1 = ticket.segments[0].duration % 60;

        const hours2 = Math.floor(ticket.segments[1].duration / 60);
        const minutes2 = ticket.segments[1].duration % 60;

        const dateH = new Date(ticket.segments[0].date).getUTCHours();
        const dateMin = new Date(ticket.segments[0].date).getUTCMinutes();
        const createHours = dateH < 10 ? `0${dateH}` : dateH;
        const createMinutes = dateMin < 10 ? `0${dateMin}` : dateMin;

        const dateHBack = new Date(ticket.segments[1].date).getUTCHours();
        const dateMinBack = new Date(ticket.segments[1].date).getUTCMinutes();
        const createHoursBack = dateHBack < 10 ? `0${dateHBack}` : dateHBack;
        const createMinutesBack = dateMinBack < 10 ? `0${dateMinBack}` : dateMinBack;

        setDataTicket({
            duration: `${hours1}ч ${minutes1}м`,
            durationBack: `${hours2}ч ${minutes2}м`,
            date: `${createHours}:${createMinutes}`,
            dateBack: `${createHoursBack}:${createMinutesBack}`

        })

    }, [ticket])

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
                    <h5>{dataTicket.date } – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>{dataTicket.duration}</h5>
                </div>
                <div className="flightTime">
                    <h4> {ticket.segments[0].stops.length ? ticket.segments[0].stops.length : 'без'}  пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
            <div className="flightDuration">
                <div className="flightTime">
                    <h4>{ticket.segments[1].origin} – {ticket.segments[1].destination}</h4>
                    <h5>{dataTicket.dateBack} – 08:00</h5>
                </div>
                <div className="flightTime">
                    <h4>В пути</h4>
                    <h5>{dataTicket.durationBack}</h5>
                </div>
                <div className="flightTime">
                    <h4>{ticket.segments[1].stops.length ? ticket.segments[1].stops.length : 'без'} пересадки</h4>
                    <h5>HKG, JNB</h5>
                </div>
            </div>
        </div>
    )
}
export default Ticket;
