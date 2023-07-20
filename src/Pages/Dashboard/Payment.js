import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3Q5MChR64wzhkKSbLssex9K6cpixSCzi3xlduqQpyWAYPDHOQoYCm0xjIHnnv5oqlRF7BqPAUCLQ3ls4M2iZzJ00scpTTpVz');


const Payment = () => {

    const { id } = useParams();
    const url = `https://doctors-portal-server-side-seven.vercel.app/booking/${id}`;

    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }



    return (
        <div className='flex flex-col'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <p className='font-bold'> Hello <span className='text-success'>{appointment.patiantName}</span>,</p>
                    <h2 className="card-title">Pay for {appointment.treatment}</h2>
                    <p>We look forward to meet you on <span className='text-red-600'>{appointment.date}</span> on <span className='text-red-600'>{appointment.slot}</span> </p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card shadow-2xl w-50 max-w-md bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;