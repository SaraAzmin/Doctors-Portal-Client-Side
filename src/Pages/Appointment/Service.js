import React from 'react';

const service = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body flex items-center">
                <h2 class="card-title text-secondary text-center">{name}</h2>
                <p>{
                    slots.length ?
                        <span>{slots[0]}</span> :
                        <span className='text-red-600'>No slots on this day</span>
                }</p>
                <p>{slots.length} spaces Available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default service;