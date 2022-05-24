import React from 'react';

const UserRow = ({ user }) => {

    const { email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    }

    return (
        <tr className='text-center'>
            <th>1</th>
            <td>{user.email}</td>
            <td><button className="btn btn-xs btn-secondary" onClick={makeAdmin}>Make Admin</button></td>
            <td><button className="btn btn-xs btn-primary">Remove User</button></td>
        </tr>
    );
};

export default UserRow;