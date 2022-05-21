import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Appointment/Service';

const AvailableAppointments = ({ date, setDate }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='px-8 md:px-12'>
            <p className='ml-5 text-xl py-5 text-center font-semibold text-primary'>Available Appointments on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;