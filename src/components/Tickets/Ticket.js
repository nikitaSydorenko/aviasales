import React, {useEffect, useState} from 'react';
import moment from 'moment';
import '../../styles/Tickets.css';
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

    const convertTime = (time) => {

        let hours = Math.floor(time / 60);
        let minutes = time % 60;
        return `${hours}ч ${minutes}м`
    }

    useEffect(() => {
        console.log(ticket.segments)
        const arrivalTime = msToTime();
        const time1 = convertTime(ticket.segments[0].duration);
        const time2 = convertTime(ticket.segments[1].duration);
        const date1 = moment.utc(ticket.segments[0].date).format('HH-mm');
        const date2 = moment.utc(ticket.segments[1].date).format('HH-mm');

        setDataTicket({
            duration: time1,
            durationBack: time2,
            date: date1,
            dateBack: date2,
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
