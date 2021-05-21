import React, {useEffect, useState} from 'react';
import '../../styles/Tickets.css'
const Ticket = ({ticket = {}}) => {

    const [dataTicket, setDataTicket] = useState({})

    const msToTime = (duration) => {
        const durationArrivalTime = new Date(ticket.segments[0].date).getTime() + ticket.segments[0].duration * 60 * 1000;
        let minutes = Math.floor((durationArrivalTime / (1000 * 60)) % 60),
            hours = Math.floor((durationArrivalTime / (1000 * 60 * 60)) % 24);
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
        return hours + ":" + minutes
    }

    useEffect(() => {
        console.log(ticket.segments)
        const arrivalTime = msToTime();

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
            dateBack: `${createHoursBack}:${createMinutesBack}`,
            arrivalTime: arrivalTime
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
                    <h5>{dataTicket.date } – {dataTicket.arrivalTime}</h5>
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
