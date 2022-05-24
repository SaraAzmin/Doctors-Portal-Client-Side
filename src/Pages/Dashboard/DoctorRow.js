import React from 'react';

const DoctorRow = ({ doctor, index }) => {

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
            <td><button className="btn btn-xs btn-primary" onClick={handleDelete}>Delete Doctor</button></td>
        </tr>
    );
};

export default DoctorRow;