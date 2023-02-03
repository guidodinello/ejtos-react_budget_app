
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const allocate10 = (name, type) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: type,
            payload: expense
        });
    }
    const increaseAllocation = (name) => { allocate10(name, 'ADD_EXPENSE'); }
    // decrease allocation by 10
    const decreaseAllocation = (name) => { allocate10(name, 'RED_EXPENSE'); }
    
    const icon_size = '1.5em' 

    const btnStyle = {
        background: 'transparent',
        borderRadius: '50%',
        borderColor: 'transparent',
        boxShadow: '0 0 2px 1px gray',
        transition: "all .1s ease-in-out",
    }
    const btnClass = "btn btn-primary p-0 d-flex align-items-center justify-content-center"

    const scaleUp = (element) => { element.style.transform = "scale(1.1)"; }
    const scaleDown = (element) => { element.style.transform = "scale(1.0)"; }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.symbol}{props.cost}</td>
            <td>
                <FaPlusCircle size={icon_size} color="green" onClick={event => increaseAllocation(props.name)}
                    className={btnClass} style={btnStyle}
                    onMouseOver={event => scaleUp(event.currentTarget)} 
                    onMouseOut={event => scaleDown(event.currentTarget)}
                >+</FaPlusCircle>
            </td>
            {/* decrease allocation column */}
            <td>
                <span>
                <FaMinusCircle size={icon_size} color="#ae2419" onClick={event => decreaseAllocation(props.name)}
                    className={btnClass} style={btnStyle} 
                    onMouseOver={event => scaleUp(event.currentTarget)} 
                    onMouseOut={event => scaleDown(event.currentTarget)}
                >-</FaMinusCircle>
                </span>
            </td>
            <td>
                <TiDelete size={icon_size} color="black" onClick={handleDeleteExpense}
                    className={btnClass} style={btnStyle}
                    onMouseOver={event => scaleUp(event.currentTarget)} 
                    onMouseOut={event => scaleDown(event.currentTarget)}
                ></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;