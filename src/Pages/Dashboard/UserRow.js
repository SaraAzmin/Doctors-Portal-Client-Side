import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://hidden-dusk-12600.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You cannot make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Admin added');
                }
            })
    }

    return (
        <tr className='text-center'>
            <th>1</th>
            <td>{email}</td>
            <td>{role == 'admin' ? <span className='font-bold'>ADMIN</span> : <button className="btn btn-xs btn-secondary" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button className="btn btn-xs btn-primary">Remove User</button></td>
        </tr>
    );
};

export default UserRow;