import React, { useState } from 'react';
import RoomSched from "./RoomSched.tsx";
//import RoomTable from "./RoomTable.tsx";


function RoomSchedCaller(){
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
        // Handle form submission here
    };

    return isSubmitted ? (
        <div>
            <div>
                <RoomSched handleSubmit={handleSubmit}/>
            </div>
        </div>


    ) : (
        <div>
            <RoomSched handleSubmit={handleSubmit}/>
        </div>
    );
}

export default RoomSchedCaller;
