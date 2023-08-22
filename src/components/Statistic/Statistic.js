
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
const Statistic = () => {
    const questionAmount = useLoaderData()
    return (
        <div className='m-10 w-2/3 mx-auto'>
            <BarChart
                width={700}
                height={500}
                data={questionAmount?.data}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"name"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='total' fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistic;