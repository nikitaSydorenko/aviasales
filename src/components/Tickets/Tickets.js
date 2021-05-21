import React, {useCallback, useContext, useState} from 'react';
import Ticket from "./Ticket";
import {MyContextt} from "../MyContext";
import '../../styles/Tickets.css';

const Tickets = () => {

    const tickets = useContext(MyContextt);
    const [activeTab, setActiveTab] = useState(false);
    const [lowPrice, setLowPrice] = useState([]);
    const [quickTicket, setQuickTicket] = useState([]);
    const [optimal, setOptimal] = useState([])

    const onChangeLowPrice = useCallback(() => {

        setActiveTab(!activeTab);
        const sortByLowPrice = tickets.sort((a, b) => a.price > b.price ? 1 : -1);
        setLowPrice([...sortByLowPrice.slice(0, 1)]);

    }, [tickets, lowPrice, activeTab]);

    const onChangeQuickest = useCallback(() => {

        const sortByQuickest = tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1);

        setQuickTicket([...sortByQuickest.slice(0, 1)]);

    }, [tickets, quickTicket]);

    const onChangeOptimal = useCallback(() => {

        const sortArrayOptimal = tickets.sort((a, b) => {

            return (
                a.segments[0].duration / b.price
                >
                b.segments[0].duration / a.price
            ) ? 1 : -1
        });

        setOptimal([...sortArrayOptimal.slice(0, 1)])

    }, [tickets, optimal])

    return (
        <div className="containerTickets">
            <div className='tabs'>
                <div onClick={onChangeLowPrice} className={ activeTab ? "active" : "tabTicket"}>
                    <h2>Самый дешевый</h2>
                </div>
                <div onClick={onChangeQuickest} className="tabTicket">
                    <h2>Самый быстрый</h2>
                </div>
                <div className="tabTicket" onClick={onChangeOptimal}>
                    <h2>Оптимальный</h2>
                </div>
            </div>
            <div className="tickets">
                {tickets.slice(0, 10).map((ticket, index) => <Ticket key={index} ticket={ticket} /> )}
            </div>
        </div>
    )
};

export default Tickets;
