import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  return (
    <main>
      <ul className="list_day">
        {days.map((day) => (
          <li id={day.id} key={day.id}>
            <Link to={`/day/${day.day}`}>
              <div className="day_num">Day {day.day}</div>
              <div>0%</div>
              <label for={day.id}>작성일자</label>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

//
