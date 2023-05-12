import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='banner  w-full grid grid-cols-2 gap-5 mb-20'>

            <div className=' text-white text-left pl-28 mt-28 mb-52'>
                <h2 className='text-5xl font-semibold '>QUIZ <br></br>Examination</h2>
                <p className='mt-12 text-lg'>Quickly and easily create interactive online quizzes for free! With Quizizz, you can create a quiz that boosts engagement and participation with just a few clicks. Whether you’re looking to create a homework assignment for Math class, or an ice breaker to welcome new faces, there’s something here for everyone.</p>

                <Link to=""><button className="btn btn-secondary text-lg mt-8">Learn More</button></Link>
            </div>

        </div>
    );
};

export default Banner;