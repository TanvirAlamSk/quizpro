import React from 'react';

const Modal = ({ correctAnswer }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Correct Answer :</h3>
                    <p className="py-4">{correctAnswer}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;