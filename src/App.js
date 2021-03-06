import React, { useCallback, useEffect, useState } from 'react';
import logo from './assets/Logo.png';
import Filter from './components/Filter/Filter';
import Tickets from './components/Tickets/Tickets';
import { MyContextt } from './components/MyContext';
import { getId, getPackTickets } from './utils/api/requestToTicketsApi';
import './styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [ch, setCh] = useState({
    allTickets: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfers: false,
  });

  const getTickets = useCallback(async () => {
    try {
      const id = await getId();
      const res = await getPackTickets(id.data.searchId);
      if (res.status === 502) {
        await getTickets();
      } else if (res.status !== 200) {
        console.log(res.statusText);
        await getTickets();
      }
      return res.data.tickets;
    } catch (e) {
      setTimeout(() => {
        getTickets();
      }, 500);
      console.error('ERROR!', e);
    }
  }, []);

  const onChangeStops = useCallback((e) => {
    const { name } = e.target;
    setCh({ ...ch, [name]: !ch[name] });
  }, [ch]);

  const checkIfAnyFilters = () => {
    const newData = { ...ch };
    delete newData.allTickets;
    return Object.values(newData).some((val) => val === true);
  };

  const checkIsUnique = (ticket, listOfTickets) => listOfTickets.indexOf(ticket) < 0;
  useEffect(async () => {
    const allTickets = [];
    const clearData = [];
    const allTicks = await getTickets();
    if (ch.allTickets) {
      allTickets.push(...allTicks);
    } else {
      allTickets.push(...tickets);
    }

    if (ch.noTransfers) {
      allTickets.push(...allTicks);
      const temp = allTickets.filter((ticket) => {
        const vals = ticket.segments.map((segment) => segment.stops.length === 0);
        return vals.every((val) => val === true);
      });
      clearData.push(...temp);
    }

    if (ch.oneTransfer) {
      allTickets.push(...allTicks);
      const temp = allTickets.filter((ticket) => {
        const vals = ticket.segments.map((segment) => segment.stops.length === 1);
        return vals.every((val) => val === true) && checkIsUnique(ticket, clearData);
      });
      clearData.push(...temp);
    }

    if (ch.twoTransfer) {
      allTickets.push(...allTicks);
      const t = allTickets.filter((ticket) => {
        const vals = ticket.segments.map((segment) => segment.stops.length === 2);
        return vals.every((val) => val === true) && checkIsUnique(ticket, clearData);
      });
      clearData.push(...t);
    }

    if (ch.threeTransfers) {
      allTickets.push(...allTicks);
      const t = allTickets.filter((ticket) => {
        const vals = ticket.segments.map((segment) => segment.stops.length === 3);
        return vals.every((val) => val === true) && checkIsUnique(ticket, clearData);
      });
      clearData.push(...t);
    }

    if (clearData.length) {
      setTickets(clearData.sort(() => Math.random() - 0.5));
    } else if (!checkIfAnyFilters() && ch.allTickets) {
      setTickets(allTickets);
    } else {
      setTickets([]);
    }
  }, [ch]);

  console.log(checkIfAnyFilters());

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="container gridApp">
        <MyContextt.Provider value={tickets}>
          <Filter ch={ch} onChangeStops={onChangeStops} />
          {checkIfAnyFilters() || ch.allTickets ? <Tickets /> : (
            <div className="changeFilter">
              <h5>???????????????? ???????????? ?????? ????????????</h5>
            </div>
          ) }
        </MyContextt.Provider>
      </div>
    </div>
  );
};

export default App;
