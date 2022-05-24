import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://hidden-dusk-12600.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className='pb-5 text-xl text-secondary text-center'>Manage Doctor {doctors.length}</h2>
            <div className="overflow-x-auto py-5">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>SL. NO.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDeletingDoctor={setDeletingDoctor}
                                refetch={refetch}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteModal>}
        </div>
    );
};

export default ManageDoctors;