import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Appointment/Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {

    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='px-8 md:px-12 my-10'>
            <p className='ml-5 text-2xl py-5 text-center font-semibold text-secondary'>Available Appointments on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;