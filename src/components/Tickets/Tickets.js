import React, {useCallback, useContext, useState} from 'react';
import Ticket from "./Ticket";
import {MyContextt} from "../MyContext";
import '../../styles/Tickets.css';

const Tickets = () => {

    const tickets = useContext(MyContextt);
    const [activeTab, setActiveTab] = useState(false);
    const [lowPrice, setLowPrice] = useState([]);
    const [quickTicket, setQuickTicket] = useState([]);
    const [optimal, setOptimal] = useState([]);
    const [tabs, setTabs] = useState(['Самый дешевый', 'Самый быстрый', 'Оптимальный'])

    const onChangeTabFilter = useCallback((tab) => () => {
        setActiveTab(tab);
        if(tab === 'Самый дешевый'){
            const sortByLowPrice = tickets.sort((a, b) => a.price > b.price ? 1 : -1);
            setLowPrice([...sortByLowPrice.slice(0, 1)]);
        }

        if(tab === 'Самый быстрый'){
            const sortByQuickest = tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1);
            setQuickTicket([...sortByQuickest.slice(0, 1)]);
        }

        if(tab === 'Оптимальный'){
            const sortArrayOptimal = tickets.sort((a, b) => {
                return (
                    a.segments[0].duration / b.price
                    >
                    b.segments[0].duration / a.price
                ) ? 1 : -1
            })
            setOptimal([...sortArrayOptimal.slice(0, 1)])
        }

    }, [tickets, quickTicket, lowPrice, optimal, tabs]);

    return (
        <div className="containerTickets">
            <div className='tabs'>
                {tabs.map((tab, index) => {
                    return(
                        <div key={index} onClick={onChangeTabFilter(tab)} className={activeTab === tab ? "tabTicket active" : "tabTicket"}>
                            <h2>{tab}</h2>
                        </div>
                    )
                })}
            </div>
            <div className="tickets">
                {tickets.slice(0, 10).map((ticket, index) => <Ticket key={index} ticket={ticket} /> )}
            </div>
        </div>
    )
};

export default Tickets;
