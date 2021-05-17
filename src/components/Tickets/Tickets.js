import React, {useEffect, useState} from 'react';
import {getId, getPackTickets} from "../../utils/api/requestToTicketsApi";
import logoAirline from '../../assets/logoAirline.png'
import '../../styles/Tickets.css'

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(async () => {

        const id = await getId()
        const res = await getPackTickets(id.data.searchId);
        setTickets(res.data.tickets)
        console.log(res.data)
    }, [tickets]);

    return (
        <div className="containerTickets">
            <div className='tabs'>
                <div className="tabTicket">
                    <h2>Самый дешевый</h2>
                </div>
                <div className="tabTicket">
                    <h2>Самый быстрый</h2>
                </div>
                <div className="tabTicket">
                    <h2>Оптимальный</h2>
                </div>
            </div>


            <div className="tickets">
                <div className="ticket">
                    <div className="headerTicket">
                        <div className="price">
                            <h2>13 200р</h2>
                        </div>
                        <div className="logoAirline">
                            <img src={logoAirline} alt=""/>
                        </div>
                    </div>
                    <div className="flightDuration">
                        <div className="flightTime">
                            <h4>MOW – HKT</h4>
                            <h5>10:45 – 08:00</h5>
                        </div>
                        <div className="flightTime">
                            <h4>В пути</h4>
                            <h5>21ч 15м</h5>
                        </div>
                        <div className="flightTime">
                            <h4>2 пересадки</h4>
                            <h5>HKG, JNB</h5>
                        </div>
                    </div>
                    <div className="flightDuration">
                        <div className="flightTime">
                            <h4>MOW – HKT</h4>
                            <h5>10:45 – 08:00</h5>
                        </div>
                        <div className="flightTime">
                            <h4>В пути</h4>
                            <h5>21ч 15м</h5>
                        </div>
                        <div className="flightTime">
                            <h4>2 пересадки</h4>
                            <h5>HKG, JNB</h5>
                        </div>
                    </div>
                </div>

                <div className="ticket">
                    <div className="headerTicket">
                        <div className="price">
                            <h2>13 200р</h2>
                        </div>
                        <div className="logoAirline">
                            <img src={logoAirline} alt=""/>
                        </div>
                    </div>
                    <div className="flightDuration">
                        <div className="flightTime">
                            <h4>MOW – HKT</h4>
                            <h5>10:45 – 08:00</h5>
                        </div>
                        <div className="flightTime">
                            <h4>В пути</h4>
                            <h5>21ч 15м</h5>
                        </div>
                        <div className="flightTime">
                            <h4>2 пересадки</h4>
                            <h5>HKG, JNB</h5>
                        </div>
                    </div>
                    <div className="flightDuration">
                        <div className="flightTime">
                            <h4>MOW – HKT</h4>
                            <h5>10:45 – 08:00</h5>
                        </div>
                        <div className="flightTime">
                            <h4>В пути</h4>
                            <h5>21ч 15м</h5>
                        </div>
                        <div className="flightTime">
                            <h4>2 пересадки</h4>
                            <h5>HKG, JNB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets;
