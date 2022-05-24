import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {

    const handleDelete = email => {


    }

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{doctor.name}</td>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={doctor.img} alt={doctor.name} />
                </div>
            </div></td>
            <td>{doctor.speciality}</td>
            <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label></td>
        </tr>
    );
};

export default DoctorRow;