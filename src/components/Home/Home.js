import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Tests from '../Tests/Tests';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/UserContext';

const Home = () => {
    const subjects = useLoaderData()
    const { user, setUser } = useContext(authContext)
    return (
        <div>
            <Banner></Banner>
            <Tests subjects={subjects.data}></Tests>
        </div>
    );
};

export default Home;