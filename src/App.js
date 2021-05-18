import React, {useCallback, useEffect, useState} from 'react';
import logo from './assets/Logo.png'
import Filter from "./components/Filter/Filter";
import Tickets from "./components/Tickets/Tickets";
import {MyContextt} from "./components/MyContext";
import {getId, getPackTickets} from "./utils/api/requestToTicketsApi";
import './styles.css';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [ch, setCh] = useState(true)

    const getTickets = useCallback(async () => {
        try{
            const id = await getId();
            const res = await getPackTickets(id.data.searchId);
            setTickets(res.data.tickets.slice(0, 5))
            console.log(res.data.stop)
        }catch (e){
            console.log(e)
        }
    }, [])


    const onChangeTimesStops = useCallback((e) => {
        setCh(!ch)

    }, [ch])
    useEffect(() => {
        if(ch) {
            getTickets()
        }

    }, [ch]);

    return (
    <div className="app">
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="container gridApp">
            <MyContextt.Provider value={tickets}>
                <Filter ch={ch} onChangeTimesStops={onChangeTimesStops}/>
                <Tickets/>
            </MyContextt.Provider>
        </div>
    </div>
    )};

export default App;
