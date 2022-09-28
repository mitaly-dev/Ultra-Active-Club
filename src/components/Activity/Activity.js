import React from 'react';
import { act } from 'react-dom/test-utils';

const Activity = ({activity,addToList}) => {
let {category,picture,time,title}=activity
console.log(picture)

    return (
        <div className="card w-full bg-white shadow-xl rounded-lg border">
        <figure className='p-3 h-[220px]'><img src={`${picture}`} alt="Shoes" className='rounded-xl h-full object-cover'/></figure>
        <div className="card-body py-0 px-4">
            <h2 className="card-title">{title}</h2>
            <p>Category: {category} </p>
            <p>Time Required: {time} Min</p>
            <div className="card-actions justify-end">
            <button onClick={()=>addToList(activity.time)} className="w-full rounded-lg py-2 text-white bg-[#5D5FEF] border-none ">Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;