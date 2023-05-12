import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { name, logo, id } = subject
    return (
        <div className="card card-side border-sky-600 border shadow-xl m-4 p-0">
            <figure>
                <img src={logo} className='w-1/3 lg:w-4/5 bg-emerald-600 border-pink-400 rounded-md' alt="Movie" />
            </figure>
            <div className="card-body card-end">
                <h2 className="card-title justify-end">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/quiz/${id}`}> <button className="btn btn-primary ">attempt</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Subject;