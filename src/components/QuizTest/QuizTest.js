import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions/Questions';

const QuizTest = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    const questions = quiz.data.questions
    return (
        <div className='text-center bg-teal-100 mx-20 px-6'>
            <img src={quiz.data.logo} alt='' className='w-60 inline-block'></img>
            <hr className='border-2 border-orange-700'></hr>
            {
                questions.map((anyquestion, index) => <Questions key={anyquestion.id} anyquestion={anyquestion} index={index}></Questions>)
            }
        </div>
    );
};

export default QuizTest;