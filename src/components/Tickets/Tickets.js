import React, {useCallback, useContext, useEffect, useState} from 'react';
import Ticket from "./Ticket";
import {MyContextt} from "../MyContext";
import '../../styles/Tickets.css'

const Tickets = () => {
    const tickets = useContext(MyContextt);
    const [activeTab, setActiveTab] = useState(false);
    const [lowPrice, setLowPrice] = useState([]);

    const onChangeLowPrice = useCallback(() => {
        setActiveTab(true)
        const sortByLowPrice = tickets.sort((a, b) => a.price > b.price ? 1 : -1)
        setLowPrice([...sortByLowPrice.slice(0, 1)]);
    }, [tickets, lowPrice])

    const onChangeQuickest = useCallback(() => {
       const res = tickets.filter(e => console.log(e.segments));
        console.log(res);
    }, [tickets])

    return (
        <div className="containerTickets">
            <div className='tabs'>
                <div onClick={onChangeLowPrice} className={ activeTab ? "active" : "tabTicket"}>
                    <h2>Самый дешевый</h2>
                </div>
                <div onClick={onChangeQuickest} className="tabTicket">
                    <h2>Самый быстрый</h2>
                </div>
                <div className="tabTicket">
                    <h2>Оптимальный</h2>
                </div>
            </div>
            <div className="tickets">
                {tickets.map((ticket, index) => <Ticket key={index} ticket={ticket} /> )}
            </div>
        </div>
    )
}

export default Tickets;
