import React from 'react';
import '../../styles/Filter.css'

const Filter = () => {
    return (
        <div className='filterBar'>
            <div className="containerr">
                <div className="titleFilterBar">
                    <h4>Количество пересадок</h4>
                </div>
                <div className="containerInputs">
                    <div className="filterName">
                        <input defaultChecked={true} value={true} type="checkbox"/>
                        <span>все</span>
                    </div>
                    <div className="filterName">
                        <input type="checkbox"/>
                        <span>без пересадок</span>
                    </div>
                    <div className="filterName">
                        <input type="checkbox"/>
                        <span>1 пересадка</span>
                    </div>
                    <div className="filterName">
                        <input type="checkbox"/>
                        <span>2 пересадки</span>
                    </div>
                    <div className="filterName">
                        <input type="checkbox"/>
                        <span>3 пересадки</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
