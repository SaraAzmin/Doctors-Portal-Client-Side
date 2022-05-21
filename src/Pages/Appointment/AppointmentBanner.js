import backimg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${backimg})`
        }} className="hero md:min-h-screen mr-10 md:mr-0 my-5 md:my-0 px-8 md:px-0">
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chair} className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl" alt='chair' />
                <div className=' mr-0 lg:mr-72'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;