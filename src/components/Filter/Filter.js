import React, {useContext, useState} from 'react';
import '../../styles/Filter.css'
import {MyContextt} from "../MyContext";

const Filter = ({ch, onChangeTimesStops}) => {
    const value = useContext(MyContextt);
    console.log(value)
    return (
        <div className='filterBar'>
            <div className="containerr">
                <div className="titleFilterBar">
                    <h4>Количество пересадок</h4>
                </div>
                <div className="containerInputs">
                    <div className="filterName">
                        <input id="checkbox-custom1" onChange={onChangeTimesStops} checked={ch} type="checkbox"/>
                        <label for="checkbox-custom1" className="checkbox-custom-label">все</label>
                    </div>
                    <div className="filterName">
                        <input id="checkbox-custom2" type="checkbox"/>
                        <label for="checkbox-custom2">без пересадок</label>
                    </div>
                    <div className="filterName">
                        <input id="checkbox-custom3" type="checkbox"/>
                        <label for="checkbox-custom3">1 пересадка</label>
                    </div>
                    <div className="filterName">
                        <input id="checkbox-custom4" type="checkbox"/>
                        <label for="checkbox-custom4">2 пересадки</label>
                    </div>
                    <div className="filterName">
                        <input id="checkbox-custom5" type="checkbox"/>
                        <label for="checkbox-custom5">3 пересадки</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
