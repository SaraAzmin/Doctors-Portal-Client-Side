import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }



    return (
        <div>
            <h1>payment for: {id}</h1>
        </div>
    );
};

export default Payment;