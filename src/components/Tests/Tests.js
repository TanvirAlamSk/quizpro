import React from 'react';
import './Tests.css'
import QuizPhoto from '../../image/quiz.jpg'
import Subject from './Subject/Subject';

const Tests = ({ subjects }) => {
    return (
        <div>
            <div className='test-banner mt-48 lg:grid grid-cols-2'>
                <div className=' lg:relative'>
                    <img src={QuizPhoto} alt='' className='w-full lg:p-20 lg:pt-0 quiz-photo lg:ml-20 lg:absolute lg:-mt-20'></img>
                </div>
                <div className='subject'>
                    <h3 className='mt-16 text-white text-3xl font-semibold'>Subjects</h3>
                    <div className='my-4 lg:grid grid-cols-2 gap-4'>
                        {
                            subjects.map((subject) => <Subject key={subject.id} subject={subject}></Subject>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tests;