import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import Profile from '../Profile/Profile';
import Details from '../Details/Details';



const Main = () => {
    let [activities,setActivities] = useState([])
    let [addActivity,setAddActivity]=useState([])
    let [addBreak,setAddBreak]=useState(0)

    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    const addToList=(activity)=>{
        setAddActivity([...addActivity,activity])
    }

    const handleBreak=(event)=>{
        setAddBreak(event.target.innerText)
    }

 
    return (
        <div className='grid grid-cols-8'>
            <div className='col-span-6 px-16 py-20 bg-[#F2F4FA]'>
                <div className='flex text-2xl text-[#5D5FEF] pb-6'>
                    <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
                <h3 className='pl-3 uppercase font-medium'>ultra-active-club</h3>
                </div>
                <p className='text-xl font-medium pb-6'>Select today's tree planting</p>
             <div className='grid grid-cols-3 gap-5'>
             {
                activities.map(activity=><Activity activity={activity} key={activity.id} addToList={addToList}></Activity>)
             }
             </div>
            </div>
            <div className='col-span-2'>
               <div className=' bg-white px-6 py-10 sticky top-0'>
               <Profile></Profile>
               <h3 className='font-semibold text-xl'>Add A Break</h3>
                <div onClick={(e)=>handleBreak(e)} className='flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg my-5 font-semibold'>
                   <button className='bg-white rounded-full p-3 py-2'>10</button>
                   <button className='bg-white rounded-full p-3 py-2'>20</button>
                   <button className='bg-white rounded-full p-3 py-2'>30</button>
                   <button className='bg-white rounded-full p-3 py-2'>40</button>
                   <button className='bg-white rounded-full p-3 py-2'>50</button>
                </div>
                <h3 className='font-semibold text-xl'>Tree Planting Details</h3>
                <Details></Details>
               </div>
            </div>
        </div>
    );
};

export default Main;