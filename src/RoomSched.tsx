import React, {FormEvent, useState} from 'react';
import './RoomSched.css';

const RoomSched: React.FC<{handleSubmit: (event: FormEvent) => void}> = ({handleSubmit}) => {
    const [formState, setFormState] = useState({
        schedName: '',  //text box
        startTime: '', //drop down
        lengthOfRes: '', //drop down
        roomNumber: '', //input box
        requestStatus: '', //drop down
        priority: '', //drop down
    });

    const [isSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    return isSubmitted ? (
        <div>
            <h2>Order Received</h2>
            <p>Scheduler's Name: {formState.schedName}</p>
            <p>Starting Time: {formState.startTime}</p>
            <p>Length Of Reservation: {formState.lengthOfRes}</p>
            <p>Room Number: {formState.roomNumber}</p>
            <p>Request Status: {formState.requestStatus}</p>
            <p>Priority: {formState.priority}</p>
        </div>

    ) : (
        <div>
            <h1>Order Flowers For A Loved One</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Scheduler's Name:
                        <input type="text" name="schedName" value={formState.schedName} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Starting Time:
                        <input type="text" name="startTime" value={formState.startTime} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Length of Registration:
                        <input type="text" name="lengthOfRes" value={formState.lengthOfRes} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Room Number:
                        <input type="text" name="roomNumber" value={formState.roomNumber} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Request Status:
                        <input type="text" name="requestStatus" value={formState.requestStatus} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Priority:
                        <input type="text" name="priority" value={formState.priority} onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
        ;
};

export default RoomSched;
