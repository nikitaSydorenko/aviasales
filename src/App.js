import React, {useCallback, useEffect, useState} from 'react';
import logo from './assets/Logo.png'
import Filter from "./components/Filter/Filter";
import Tickets from "./components/Tickets/Tickets";
import {MyContextt} from "./components/MyContext";
import {getId, getPackTickets} from "./utils/api/requestToTicketsApi";
import './styles.css';

const App = () => {
    const [tickets, setTickets] = useState([]);

    const [ch, setCh] = useState({
        allTickets: true,
        noTransfers: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfers: false
    })

    const getTickets = useCallback(async () => {
        try{
            const id = await getId();
            const res = await getPackTickets(id.data.searchId);
            setTickets([...res.data.tickets])
        }catch (e){
             await getTickets();
             console.log(e)
        }
    }, []);

    const onChangeStops = useCallback((e) => {
        const {name, value, checked} = e.target
        setCh({[name]: value})
    }, [ch]);

    useEffect(async () => {

        if(ch.allTickets) {
            await getTickets()
        }

        if(ch.noTransfers){
           let t = tickets.filter(ticket => {
                for(let i = 0; i < tickets.length; i++){

                    return ticket.segments[i].stops.length === 0;

                    // if(ticket.segments[i].stops.length === 0){
                    //
                    // }
                }
            })
            setTickets([...t.slice(0, 5)])
            console.log(t)

        }
    }, [ch]);

    return (
    <div className="app">
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="container gridApp">
            <MyContextt.Provider value={tickets}>
                <Filter ch={ch} onChangeStops={onChangeStops}/>
                <Tickets/>
            </MyContextt.Provider>
        </div>
    </div>
    )};

export default App;
