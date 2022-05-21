import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date, setDate }) => {

    return (
        <div>
            <p className='ml-5 text-xl py-2 text-center font-semibold text-primary'>Available Appointments on: {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;