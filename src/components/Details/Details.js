import React from 'react';

const Details = ({addBreak,totalTime}) => {
    let plantingTime=totalTime.reduce((prev,current)=>{
        return prev+current
    },0)
    return (
        <div>
             <div className='flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg mt-5 mb-3'>
                 <h3 className='font-semibold'>Planting Time</h3>
                 <span className='text-slate-500 font-semibold'>{plantingTime} Min</span>
            </div>
             <div className='flex justify-between bg-[#F2F4FA] px-5 py-3 rounded-lg mb-5'>
                 <h3 className='font-semibold'>Break Time</h3>
                 <span className='text-slate-500 font-semibold'>{addBreak} Min</span>
            </div>
        </div>
    );
};

export default Details;