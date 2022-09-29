import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import profileImg from '../../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocation} from '@fortawesome/free-solid-svg-icons'

const Details = ({totalTime}) => {
    let [addBreak,setAddBreak]=useState(0)

    //handle break time button
    const handleBreak=(event)=>{
        let newBreak=event.target.innerText
        setAddBreak(newBreak)
        localStorage.setItem('break_time',JSON.stringify(newBreak))
    }


    //break time set in display from localstorage
    useEffect(()=>{
        let breakTime=JSON.parse(localStorage.getItem('break_time'))
        setAddBreak(breakTime)
    },[])

     //activity completed button
     const addToast=()=>{
        Swal.fire(
            'Activity Completed!',
            'You clicked the button!',
            'success'
          )
    }

    //total planting time
    let plantingTime=totalTime.reduce((prev,current)=>{
        return prev+current
    },0)

    return (
            <div>
                <div className='flex items-center'>
                    <div className='w-[60px] h-[60px] mr-4'><img src={profileImg} alt="profile_picture" className='object-cover w-full h-full rounded-full' /></div>
                    <div>
                        <h3 className='font-semibold text-xl'>Mukta Akter Mitaly</h3>
                        <div className='text-slate-400'>
                            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                            <span className='pl-3'>Faridpur,Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className='shadow-md flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg my-8'>
                    <div className='text-center text-slate-500'>
                        <span className='text-2xl font-semibold text-black'>52</span><small>kg</small>
                        <p>Weight</p>
                    </div>
                    <div className='text-center text-slate-500'>
                        <span className='text-2xl font-semibold text-black'>5.4</span>
                        <p>Height</p>
                    </div>
                    <div className='text-center text-slate-500'>
                        <span className='text-2xl font-semibold text-black'>20</span><small>yrs</small>
                        <p>Age</p>
                    </div>
                </div>
                <h3 className='font-semibold text-xl'>Add A Break</h3>
                <div className='shadow-md flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg my-5 font-semibold'>
                   <button onClick={(e)=>handleBreak(e)} className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>10</button>
                   <button onClick={(e)=>handleBreak(e)} className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>20</button>
                   <button onClick={(e)=>handleBreak(e)} className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>30</button>
                   <button onClick={(e)=>handleBreak(e)} className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>40</button>
                   <button onClick={(e)=>handleBreak(e)} className='bg-white rounded-full p-3 py-2 shadow-md hover:bg-[#5D5FEF] hover:text-white'>50</button>
                </div>
                <h3 className='font-semibold text-xl pt-3'>Tree Planting Details</h3>
                <div className='shadow-md flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg mt-5 mb-3'>
                    <h3 className='font-semibold'>Planting Time</h3>
                    <span className='text-slate-500 font-semibold'>{plantingTime} Min</span>
                </div>
                <div className='shadow-md flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg mb-5'>
                    <h3 className='font-semibold'>Break Time</h3>
                    <span className='text-slate-500 font-semibold'>{addBreak} Min</span>
                </div>
                <button onClick={addToast} className="w-full rounded-lg py-3 font-semibold text-white bg-[#5D5FEF] border-none mt-4">Activity Completed</button>
            </div>
    );
};

export default Details;