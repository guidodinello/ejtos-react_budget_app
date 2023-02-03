
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const inputStyle = { width: '65%', marginLeft: '0.5rem' }
    return (
        <div className='alert alert-secondary m-0'>
            <span>Budget: {currency.symbol}
                <input
                    required='required'
                    type='number'
                    step='10'
                    min='0'
                    max='20000'
                    value={budget}
                    onChange={ (event) =>  dispatch({ 
                        type: 'SET_BUDGET', 
                        payload: event.target.value,
                    }) }
                    style={inputStyle}>
                </input>
            </span>
        </div>
    );
};

export default Budget;