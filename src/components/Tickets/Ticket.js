import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import '../../styles/Tickets.css';

const Ticket = ({ ticket }) => {
  const [dataTicket, setDataTicket] = useState({});

  const checkLengthTransplants = useCallback((transplants) => {
    if (transplants === 0) {
      return 'без пересадок';
    }
    if (transplants === 1) {
      return 'пересадка';
    }
    if (transplants >= 2) {
      return 'пересадки';
    }
  }, []);

  const msToTime = (date, duration) => {
    const durationArrivalTime = new Date(date).getTime() + duration * 60 * 1000;
    let minutes = Math.floor((durationArrivalTime / (1000 * 60)) % 60);
    let hours = Math.floor((durationArrivalTime / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  };

  const convertTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  useEffect(() => {
    const numbFmt = new Intl.NumberFormat('ru-RU').format(ticket.price);
    const arrivalTime = msToTime(ticket.segments[0].date, ticket.segments[0].duration);
    const arrivalTimeBack = msToTime(ticket.segments[1].date, ticket.segments[1].duration);
    const time1 = convertTime(ticket.segments[0].duration);
    const time2 = convertTime(ticket.segments[1].duration);
    const date1 = moment.utc(ticket.segments[0].date).format('HH:mm');
    const date2 = moment.utc(ticket.segments[1].date).format('HH:mm');

    setDataTicket({
      duration: time1,
      durationBack: time2,
      date: date1,
      dateBack: date2,
      arrivalTime,
      arrivalTimeBack,
      price: numbFmt,
    });
  }, [ticket]);

  return (
    <div className="ticket">
      <div className="headerTicket">
        <div className="price">
          <h2>
            {dataTicket.price}
            Р
          </h2>
        </div>
        <div className="logoAirline">
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
        </div>
      </div>
      <div className="flightDuration">
        <div className="flightTime">
          <h4>
            {ticket.segments[0].origin}
            {' '}
            –
            {' '}
            {ticket.segments[0].destination}
          </h4>
          <h5>
            {dataTicket.date }
            {' '}
            –
            {' '}
            {dataTicket.arrivalTime}
          </h5>
        </div>
        <div className="flightTime">
          <h4>В пути</h4>
          <h5>{dataTicket.duration}</h5>
        </div>
        <div className="flightTime">
          <h4>
            {ticket.segments[0].stops.length ? ticket.segments[0].stops.length : null}
            {' '}
            {checkLengthTransplants(ticket.segments[0].stops.length)}
            {' '}
          </h4>
          <h5>{`${ticket.segments[0].stops}`}</h5>
        </div>
      </div>
      <div className="flightDuration">
        <div className="flightTime">
          <h4>
            {ticket.segments[1].origin}
            {' '}
            –
            {' '}
            {ticket.segments[1].destination}
          </h4>
          <h5>
            {dataTicket.dateBack}
            {' '}
            –
            {' '}
            {dataTicket.arrivalTimeBack}
          </h5>
        </div>
        <div className="flightTime">
          <h4>В пути</h4>
          <h5>{dataTicket.durationBack}</h5>
        </div>
        <div className="flightTime">
          <h4>
            {ticket.segments[1].stops.length ? ticket.segments[1].stops.length : null}
            {' '}
            {checkLengthTransplants(ticket.segments[1].stops.length)}
            {' '}
          </h4>
          <h5>{`${ticket.segments[1].stops}`}</h5>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
