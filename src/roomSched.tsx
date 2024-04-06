import React, { FormEvent, useState } from "react";
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    SelectChangeEvent,
} from '@mui/material';

function RoomSched() {
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


    const handleChange = (event: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            {/* Header for Page */}
            <div>
                <h1>Schedule A Room:</h1>
            </div>

            {/* Request Form */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField label="Employee Name" type="text" name="employName" value={formState.employName} onChange={handleChange} />
                    </div>
                    <div>
                        <Select label="Starting Time" name="startTime" value={formState.startTime} onChange={handleChange}>
                            <MenuItem value="">Not Selected</MenuItem>
                            <MenuItem value="9:00AM">9:00AM</MenuItem>
                            <MenuItem value="10:00AM">10:00AM</MenuItem>
                            <MenuItem value="11:00AM">11:00AM</MenuItem>
                            <MenuItem value="12:00PM">12:00PM</MenuItem>
                            <MenuItem value="1:00PM">1:00PM</MenuItem>
                            <MenuItem value="2:00PM">2:00PM</MenuItem>
                            <MenuItem value="3:00PM">3:00PM</MenuItem>
                            <MenuItem value="4:00PM">4:00PM</MenuItem>
                            <MenuItem value="5:00PM">5:00PM</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <Select label="Length of Reservation" name="lengthRes" value={formState.lengthRes} onChange={handleChange}>
                            <MenuItem value="">Not Selected</MenuItem>
                            <MenuItem value="30 Minutes">30 Minutes</MenuItem>
                            <MenuItem value="60 Minutes">60 Minutes</MenuItem>
                            <MenuItem value="90 Minutes">90 Minutes</MenuItem>
                            <MenuItem value="120 Minutes">120 Minutes</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <TextField label="Room Number" type="number" name="roomNum" value={formState.roomNum} onChange={handleChange} />
                    </div>
                    <div>
                        <Select label="Request Status" name="reqStatus" value={formState.reqStatus} onChange={handleChange}>
                            <MenuItem value="">Not Selected</MenuItem>
                            <MenuItem value="Unassigned">Unassigned</MenuItem>
                            <MenuItem value="Assigned">Assigned</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <Select label="Priority" name="priority" value={formState.priority} onChange={handleChange}>
                            <MenuItem value="">Not Selected</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Emergency">Emergency</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </form>
            </div>

            <br />

            {/* Header for Table */}
            <div>
                <h2>Submitted Room Reservations:</h2>
            </div>

            {/* Table of submitted requests */}
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>Length of Reservation</TableCell>
                            <TableCell>Room Number</TableCell>
                            <TableCell>Request Status</TableCell>
                            <TableCell>Priority</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {submittedData.map(({employName, lengthRes, priority, reqStatus, roomNum, startTime}, index) => (
                            <TableRow key={index}>
                                <TableCell>{employName}</TableCell>
                                <TableCell>{startTime}</TableCell>
                                <TableCell>{lengthRes}</TableCell>
                                <TableCell>{roomNum}</TableCell>
                                <TableCell>{reqStatus}</TableCell>
                                <TableCell>{priority}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default RoomSched;
