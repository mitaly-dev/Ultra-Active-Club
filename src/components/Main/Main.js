import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import Details from '../Details/Details';
import Blog from '../Blog/Blog';



const Main = () => {
    let [activities,setActivities] = useState([])
    let [totalTime,setTotalTime]=useState([])

    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    // add to list button handler
    const addToList=(activity)=>{
        setTotalTime([...totalTime,activity])
    }
 
    return (
    <div>
        <div className='sm:grid grid-cols-8'>
            <div className='sm:col-span-4 md:col-span-5 lg:col-span-6 px-6 md:px-8 py-10 md:py-20 bg-[#F2F4FA]'>
                <div className='flex text-xl sm:text-2xl text-[#5D5FEF] pb-6'>
                    <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
                    <h3 className='pl-3 uppercase font-medium'>Plant for the Planet</h3>
                </div>
                <p className='text-xl font-medium pb-6'>Select today's tree</p>
                <div className='sm:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    activities.map(activity=><Activity activity={activity} key={activity.id} addToList={addToList}></Activity>)
                }
                </div>
            </div>
            <div className='sm:col-span-4 md:col-span-3 lg:col-span-2 '>
               <div className=' bg-white px-8 md:px-5 py-10 sticky top-0'>
                <Details totalTime={totalTime}></Details>
                </div>
            </div>
        </div>
        <Blog></Blog>
    </div>
    );
};

export default Main;