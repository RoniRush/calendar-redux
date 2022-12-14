import React, {useState} from "react";
import TableDaysHeader from "../TableDaysHeader/TableDaysHeader";
import CalendarHeader from "../Header/CalendarHeader";
import {generateDates} from "./helpers/generateDates";
import './Calendar.css';
import SlotsCreator from "../SlotsCreator/SlotsCreator";
import Popup from "../../UI components/PopUp";
import MeetingCreator from "../MeetingCreator/MeetingCreator";
import {getAllMeetings} from "../../localStorage/meetingActions";
import {AllMeetings} from "../../localStorage/types";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(generateDates(date));
    const [meetings, setMeetings] = useState<AllMeetings>(getAllMeetings());
    const [isOpen, setIsOpen] = useState(false);

    const toggleAddMeetingPopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="calendarAndPupUp">
            <div className="calendar">
                <header className="mainHeader">
                    <button className="addMeetingButton" onClick={() => {
                        toggleAddMeetingPopUp();
                    }}>Add Meeting
                    </button>
                    <CalendarHeader date={date} setDate={setDate} setDays={setDays}/>
                </header>
                <TableDaysHeader/>
                <SlotsCreator days={days}
                              meetings={meetings}
                              setMeetings={setMeetings}
                />
            </div>
            <div>
                {isOpen && <Popup
                    content={<MeetingCreator setMeetings={setMeetings} togglePopUp={toggleAddMeetingPopUp}/>}
                    handleClose={toggleAddMeetingPopUp}/>}
            </div>
        </div>
    )
}

export default Calendar;
