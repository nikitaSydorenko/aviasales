import React from 'react';
import '../../styles/Filter.css';

const Filter = ({ ch, onChangeStops }) => (
  <div className="filterBar">
    <div className="containerr">
      <div className="titleFilterBar">
        <h4>Количество пересадок</h4>
      </div>
      <div className="containerInputs">
        <div className="filterName">
          <input id="checkbox-custom1" onChange={onChangeStops} name="allTickets" checked={ch.allTickets} type="checkbox" />
          <label htmlFor="checkbox-custom1" className="checkbox-custom-label">все</label>
        </div>
        <div className="filterName">
          <input id="checkbox-custom2" name="noTransfers" onChange={onChangeStops} checked={ch.noTransfers} type="checkbox" />
          <label htmlFor="checkbox-custom2">без пересадок</label>
        </div>
        <div className="filterName">
          <input id="checkbox-custom3" name="oneTransfer" onChange={onChangeStops} checked={ch.oneTransfer} type="checkbox" />
          <label htmlFor="checkbox-custom3">1 пересадка</label>
        </div>
        <div className="filterName">
          <input id="checkbox-custom4" name="twoTransfer" onChange={onChangeStops} checked={ch.twoTransfer} type="checkbox" />
          <label htmlFor="checkbox-custom4">2 пересадки</label>
        </div>
        <div className="filterName">
          <input id="checkbox-custom5" name="threeTransfers" onChange={onChangeStops} checked={ch.threeTransfers} type="checkbox" />
          <label htmlFor="checkbox-custom5">3 пересадки</label>
        </div>
      </div>
    </div>
  </div>
);
export default Filter;
