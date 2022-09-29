import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import Profile from '../Profile/Profile';
import Details from '../Details/Details';
import Swal from 'sweetalert2'



const Main = () => {
    let [activities,setActivities] = useState([])
    let [totalTime,setTotalTime]=useState([])
    let [addBreak,setAddBreak]=useState(0)


    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])


    //break time set from localstorage
    useEffect(()=>{
        let breakTime=JSON.parse(localStorage.getItem('Break_time'))
        setAddBreak(breakTime)
    },[])


    // add to list button handler
    const addToList=(activity)=>{
        setTotalTime([...totalTime,activity])
    }

    //handle break time button
    const handleBreak=(event)=>{
        let newBreak=event.target.innerText
        setAddBreak(newBreak)
        localStorage.setItem('Break_time',JSON.stringify(newBreak))

        //   event.target.classList.remove('bg-white')
        //   event.target.classList.add('bg-[#5D5FEF]')
        //   event.target.classList.add('text-white')
       
    //     event.target.className='bg-[#5D5FEF] text-white rounded-full p-3 py-2'
    //     setTimeout(() => {
    //     event.target.className='bg-white rounded-full p-3 py-2'
    //    }, 500);
    }

    
    //activity completed button
    const addToast=()=>{
        Swal.fire(
            'Activity Completed!',
            'You clicked the button!',
            'success'
          )
    }

 
    return (
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
               <Profile></Profile>
               <h3 className='font-semibold text-xl'>Add A Break</h3>
                <div onClick={(e)=>handleBreak(e)} className='shadow-md flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg my-5 font-semibold'>
                   <button className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>10</button>
                   <button className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>20</button>
                   <button className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>30</button>
                   <button className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>40</button>
                   <button className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>50</button>
                </div>
                <h3 className='font-semibold text-xl pt-3'>Tree Planting Details</h3>
                <Details addBreak={addBreak} totalTime={totalTime}></Details>
                <button onClick={addToast} className="w-full rounded-lg py-3 font-semibold text-white bg-[#5D5FEF] border-none mt-4">Activity Completed</button>
               </div>
            </div>
        </div>
    );
};

export default Main;