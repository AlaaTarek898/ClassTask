import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbarst from "../student-nav/index";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sidemenust from "../Sidemenustd/Sidebar";
import './index.css'
// bars
import {useParams} from "react-router-dom";
import { useEffect } from "react";


export default function Calenderstd() {

  const [data, setData] = useState([]);

  const param = useParams();

  useEffect(() => {
    return () => {
      userDetails();
    };
  }, []);

  const userDetails = () => {
    try {
      fetch(`http://localhost:3000/users/${param.id}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch {
      throw Error;
    }
  };


  const [show, setShow] = useState(false);

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    locales,
    getDay,
  });

  const events = [];

  const [allEvents, setAllEvents] = useState(events);



  return (
    <>
<<<<<<< HEAD
      <div className=" ">
        <Navbarst/>
=======
      <div className="">
        <Navbarst title={`${data.Fname} ${data.Lname}`}/>
>>>>>>> 04d58691a4ae62325a8d25ac72839fce86df05be
      <Sidemenust>
         

            <div className="row ">
              <div className="col-md-5 m-auto ">
            <h1 className="text-center mt-4">Calendar</h1>
  

              </div>

              <div className="col-md-11 m-auto calender-body">
                <Calendar
                  localizer={localizer}
                  events={allEvents}
                  startAccessor="start"
                  endAccessor="end"
                  className="w-100"
                  style={{ height: 450 }}
                />
              </div>
            </div>

       
         
            </Sidemenust>
      </div>
    </>
  );
}
