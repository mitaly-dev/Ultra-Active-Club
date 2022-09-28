import React from 'react';
import { act } from 'react-dom/test-utils';

const Activity = ({activity,addToList}) => {
let {age,description,picture,time,title}=activity

    return (
        <div className="card w-full bg-white shadow-xl rounded-lg border">
        <figure className='p-3'><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='rounded-xl'/></figure>
        <div className="card-body py-0 px-4">
            <h2 className="card-title">{title}</h2>
            <p>{description.length>50?description.slice(0,50):description}</p>
            <p>Time Required: {time} </p>
            <div className="card-actions justify-end">
            <button onClick={()=>addToList(activity.time)} className="w-full rounded-lg py-2 text-white bg-[#5D5FEF] border-none ">Add to list</button>
            </div>
        </div>
        </div>
    );
};

export default Activity;