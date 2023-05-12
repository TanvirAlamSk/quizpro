import React from 'react';
import Options from './Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ anyquestion, index }) => {
    const { question, options, correctAnswer } = anyquestion

    return (
        <div className='card py-4'>
            <div className='flex justify-between '>
                <p className='text-left card-title mb-2 mr-5'><span className='mr-2'>{index + 1}.</span>{question} </p>
                <label htmlFor={`${index}`} className="">
                    <EyeIcon className=" h-6 w-6 text-blue-500 " />
                </label>
                <input type="checkbox" id={`${index}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Correct Answer :</h3>
                        <p className="py-4">{correctAnswer}</p>
                        <div className="modal-action">
                            <label htmlFor={`${index}`} className="btn">X</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 text-left px-5'>
                {
                    options.map((option, index) => <Options key={index} option={option} correctAnswer={correctAnswer} ></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;