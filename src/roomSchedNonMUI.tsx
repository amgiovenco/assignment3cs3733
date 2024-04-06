import React, {FormEvent, useState} from "react";
import "./main.css";

function RoomSchedNonMUI() {
    const initialFormState = {
        employName: "",
        startTime: "",
        lengthRes: "",
        roomNum: "",
        reqStatus: "",
        priority: ""
    };


    const [submittedData, setSubmittedData] = useState<any[]>([]);
    const [formState, setFormState] = useState<typeof initialFormState>(initialFormState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Save the current form state
        setSubmittedData([...submittedData, formState]);
        // Clear the form fields
        setFormState(initialFormState);
    };

    return (
        <div>

            {/*Header for Page*/}
            <div>
                <h1>
                    Room Request Form
                </h1>
            </div>


            {/*Request Form*/}
            <div>
                <form>
                    <div>
                        <label>Employee Name:
                            <input type="text" name="employName" value={formState.employName} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Starting Time:
                            <select name="startTime" value={formState.startTime} onChange={handleChange}>
                                <option>Not Selected</option>
                                <option>9:00AM</option>
                                <option>10:00AM</option>
                                <option>11:00AM</option>
                                <option>12:00PM</option>
                                <option>1:00PM</option>
                                <option>2:00PM</option>
                                <option>3:00PM</option>
                                <option>4:00PM</option>
                                <option>5:00PM</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Length of Reservation:
                            <select name="lengthRes" value={formState.lengthRes} onChange={handleChange}>
                                <option>Not Selected</option>
                                <option>30 Minutes</option>
                                <option>60 Minutes</option>
                                <option>90 Minutes</option>
                                <option>120 Minutes</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Room Number:
                            <input type="number" name="roomNum" value={formState.roomNum} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Request Status:
                            <select name="reqStatus" value={formState.reqStatus} onChange={handleChange}>
                                <option>Not Selected</option>
                                <option>Unassigned</option>
                                <option>Assigned</option>
                                <option>In Progress</option>
                                <option>Closed</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Priority:
                            <select name="priority" value={formState.priority} onChange={handleChange}>
                                <option>Not Selected</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Emergency</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button type="button" name="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>

            <br/>

            {/*Header for Table*/}
            <div>
                <h2>Submitted Room Reservations:</h2>
            </div>


            {/*Table of submitted requests*/}
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Start Time</th>
                        <th>Length of Reservation</th>
                        <th>Room Number</th>
                        <th>Request Status</th>
                        <th>Priority</th>
                    </tr>
                    </thead>
                    <tbody>
                    {submittedData.map(({employName, lengthRes, priority, reqStatus, roomNum, startTime}, index) => (
                        <tr key={index}>
                            <td>{employName}</td>
                            <td>{startTime}</td>
                            <td>{lengthRes}</td>
                            <td>{roomNum}</td>
                            <td>{reqStatus}</td>
                            <td>{priority}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RoomSchedNonMUI;