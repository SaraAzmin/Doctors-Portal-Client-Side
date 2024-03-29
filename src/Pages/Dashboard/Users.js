import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://doctors-portal-server-side-seven.vercel.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="overflow-x-auto py-5">
            <table className="table w-full">
                <thead>
                    <tr className='text-center'>
                        <th>SL. NO.</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;