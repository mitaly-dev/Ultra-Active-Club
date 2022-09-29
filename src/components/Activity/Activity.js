import { faTree} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Activity = ({activity,addToList}) => {
let {category,picture,time,title}=activity

    return (
        <div className="card w-full bg-white shadow-lg rounded-lg border mb-4">
        <figure className='p-3 h-[250px] md:h-[220px]'><img src={`${picture}`} alt="Shoes" className='rounded-lg w-full h-full object-cover'/></figure>
        <div className="card-body py-5 px-4">
            <h2 className="card-title">{title}</h2>
            <p className='text-slate-600'>Category: {category} </p>
            <p className='text-slate-600'>Time Required: {time} Min</p>
            <button onClick={()=>addToList(activity.time)} className="w-full rounded-lg py-2 text-white bg-[#5D5FEF] border-none hover:bg-blue-700"><FontAwesomeIcon icon={faTree}></FontAwesomeIcon> Add to list</button>
        </div>
        </div>
    );
};

export default Activity;