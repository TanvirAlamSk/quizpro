import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {
    const handelCurrectAnswer = (answer) => {
        if (correctAnswer == answer) {
            toast("You Are Correct");
        } else {
            toast("Oh! It is Wrong")

        }

    }
    return (
        <div>
            <p className='flex items-center'>
                <input className='mr-2 w-5 h-5' type="radio" name="answer" value={`${option}`} onClick={() => handelCurrectAnswer(`${option}`)}></input>
                <span>{option}</span>
            </p>
            <ToastContainer />
        </div>
    );
};

export default Options;