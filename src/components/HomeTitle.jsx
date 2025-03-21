import React from 'react';

const HomeTitle = ({title, heading, description}) => {
    return (
        <div className='text-center max-w-[70%] mx-auto py-5'>
            <h4 className='text-[#FF3811] font-bold'>{title}</h4>
            <h2 className='text-3xl font-semibold'>{heading}</h2>
            <p>{description}</p>
        </div>
    );
};

export default HomeTitle;