import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import "./RoomTable.css";

function RoomTable() {

    return (
        <div>
            <div>
                <h1>help</h1>
            </div>
                <div>
                    <TableContainer className="tablePls">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b>Scheduler's Name</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Start Time</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Length of Reservation</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Room Number</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Request Status</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Priority</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        info 1
                                    </TableCell>
                                    <TableCell>
                                        info 2
                                    </TableCell>
                                    <TableCell>
                                        info 3
                                    </TableCell>
                                    <TableCell>
                                        info 4
                                    </TableCell>
                                    <TableCell>
                                        info 5
                                    </TableCell>
                                    <TableCell>
                                        info 6
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
    );
}

export default RoomTable;
