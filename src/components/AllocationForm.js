import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);


    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');


    // const validationPipeline = (validateArr) => {
    //     const validator = (condition, msg, cleanup) => {
    //         if (condition) {
    //             alert(msg);
    //             cleanup();
    //             return true;
    //         }
    //         return false;
    //     }
    //     for (const { condition, msg, cleanup } of validateArr) {
    //         if (validator(condition, msg, cleanup)) return true;
    //     }
    //     return false;
    // }

    const submitEvent = () => {

        // validate only numbers
        const numbers = /^[0-9]+$/;
        if (!cost.match(numbers)) {
            alert("This must be a number!");
            setCost("");
            return;
        }

        if (cost > remaining) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        // alternative validation
        // if (validationPipeline([
        //     {
        //         condition: !cost.match(/^[0-9]+$/),
        //         msg: "This must be a number!",
        //         cleanup: () => setCost(''),
        //     },
        //     {
        //         condition: cost > remaining,
        //         msg: "The value cannot exceed remaining funds  £" + remaining,
        //         cleanup: () => setCost(''),
        //     },
        // ])) return;

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div className='row'>

            <div className='col-sm-3'>
                <div className="input-group justify-content-center">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    <select className="custom-select rounded-end" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>
                </div>
            </div>

            <div className='col-sm-3'>
                <div className="input-group justify-content-center">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    <select className="custom-select rounded-end" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="input-group justify-content-center">
                    <span className='align-self-center'>{currency.symbol}</span>
                    <input
                        required='required'
                        // type='range'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '0.5rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>
                <button className="btn btn-primary" onClick={submitEvent}>Save</button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;