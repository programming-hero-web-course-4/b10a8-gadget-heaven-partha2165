import React from 'react';

const Article = ({article}) => {
    return (
        <div className='flex md:flex-row flex-col gap-4 shadow-xl px-8 py-6 rounded-xl'>
            <div className='md:w-1/5'>
                <img src={article.image} className='rounded-xl'/>
            </div>
            <div className='md:w-4/5 space-y-6'>
                <h3 className='text-black text-xl font-bold'>{article.title}</h3>
                
                <a href={`${article.link}`} target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                    Read Here
                </a>

            </div>
        </div>
    );
};

export default Article;