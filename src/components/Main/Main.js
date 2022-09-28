import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHandHoldingHeart, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    let [activities,setActivities] = useState([])

    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div className='grid grid-cols-8'>
            <div className='col-span-6 px-20 py-20 bg-[#F2F4FA]'>
                <div className='flex text-2xl text-[#5D5FEF] pb-6'>
                    <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
                <h3 className='pl-3 uppercase font-medium'>ultra-active-club</h3>
                </div>
                <p>Select today's tree planting</p>
             <div className='grid grid-cols-3 gap-6'>
             {
                activities.map(activity=><Activity activity={activity}></Activity>)
             }
             </div>
            </div>
            <div className='col-span-2 bg-slate-500'>
                <h3>Aside</h3>
            </div>
        </div>
    );
};

export default Main;