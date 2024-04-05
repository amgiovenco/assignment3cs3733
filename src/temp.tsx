import React, {FormEvent, useState} from "react";

function Temp() {
    const initialFormState = {
        employName: "",
        startTime: "",
        lengthRes: "",
        roomNum: "",
        reqStatus: "",
        priority: ""
    };


    const [formState, setFormState] = useState(initialFormState);
    const [submittedData, setSubmittedData] = useState([]);

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
            <div>
                <h1>Schedule A Room:</h1>
            </div>
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
                {submittedData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.employName}</td>
                        <td>{data.startTime}</td>
                        <td>{data.lengthRes}</td>
                        <td>{data.roomNum}</td>
                        <td>{data.reqStatus}</td>
                        <td>{data.priority}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Temp;