import React from 'react';
import Banner from '../Banner/Banner';
import Tests from '../Tests/Tests';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const subjects = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Tests subjects={subjects.data}></Tests>
        </div>
    );
};

export default Home;