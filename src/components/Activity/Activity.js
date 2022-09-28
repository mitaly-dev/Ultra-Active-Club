import React from 'react';

const Activity = ({activity}) => {
    return (
        <div className="card w-full bg-white shadow-xl rounded-lg">
        <figure className='p-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='rounded-lg'/></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;