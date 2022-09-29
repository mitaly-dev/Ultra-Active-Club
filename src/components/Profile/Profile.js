import React from 'react';
import profileImg from '../../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocation} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
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
            </div>
    );
};

export default Profile;