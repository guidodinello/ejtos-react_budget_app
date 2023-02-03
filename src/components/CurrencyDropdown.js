import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import Dropdown from 'react-bootstrap/Dropdown';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const updateCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    const currencies = [
        { symbol: '$', name: 'Dollar' },
        { symbol: '£', name: 'Pound' },
        { symbol: '€', name: 'Euro' },
        { symbol: '₹', name: 'Ruppee' },
    ]

    return (
        <Dropdown className="d-flex justify-content-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Currency ({currency.symbol} {currency.name})
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {currencies.map((curr) => (
                    <Dropdown.Item key={curr.name}
                        onClick={() => updateCurrency(curr)}>
                        {curr.symbol} {curr.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrencyDropdown;