import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Main = () => {
    let [activities,setActivities] = useState([])

    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div className='grid grid-cols-8'>
            <div className='col-span-6'>
             <div className='grid grid-cols-3 gap-8'>
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