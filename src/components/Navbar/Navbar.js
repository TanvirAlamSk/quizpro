import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.png"


const Navbar = () => {
    return (
        <div className="navbar bg-teal-500 x-6 rounded">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt='' className='rounded-lg w-40 h-10'></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mr-2 text-lg text-white btn btn-outline rounded-md p-0'>
                        <Link to="/topic" >Topic</Link>
                    </li>
                    <li className='mr-2 text-lg text-white btn btn-outline rounded-md p-0'>
                        <Link to="/statistic">Statistic</Link>
                    </li>
                    <li className='mr-2 text-lg text-white btn btn-outline rounded-md p-0'>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end pr-6">
                <div className="dropdown pr-8">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28">
                        <li className='mr-2'><Link to="/topic" >Topic</Link></li>
                        <li className='mr-2'><Link to="/statistic">Statistic </Link></li>
                        <li className='mr-2'><Link to="/blog">Blog </Link></li>
                    </ul>
                </div>
                <Link to="" className="btn btn-info text-white hidden lg:flex">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;