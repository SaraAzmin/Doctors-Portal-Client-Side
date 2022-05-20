import React from 'react';
import Doctor from '../../assets/images/doctor.png';
import SharedButton from '../Shared/SharedButton';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={Doctor} alt="" />
            </div>
            <div className='flex-1 p-10 '>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white my-5'>Make an Appointment Today</h2>
                <p className='text-white mb-5 lg:mr-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <SharedButton>Get Started</SharedButton>
            </div>
        </div >
    );
};

export default MakeAppointment;