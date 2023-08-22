import React, { useContext } from 'react';
import { authContext } from '../../../context/UserContext';
import { Navigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(authContext)
    // const navigate = useNavigate()
    // console.log(children)
    if (loader) {
        return <Loader ></Loader>
    }
    if (user?.uid) {
        console.log(user.uid)
        return children;
    }
    else {
        return (
            <Navigate to="/login"></Navigate>
        );
    }

};

export default PrivateRoute;