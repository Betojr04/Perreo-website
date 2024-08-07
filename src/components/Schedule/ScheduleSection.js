import React from "react";
import "./ScheduleSection.css";

export const ScheduleSection = () => {
  const classes = [
    {
      date: "2024-08-12",
      time: "10:00 AM",
      classType: "Beginner Class",
      location: "Dance Studio A",
      teacher: "Instructor Jane Doe",
      price: "$20"
    },
    {
      date: "2024-08-13",
      time: "1:00 PM",
      classType: "Intermediate Class",
      location: "Dance Studio B",
      teacher: "Instructor John Smith",
      price: "$25"
    },
    {
      date: "2024-08-14",
      time: "5:00 PM",
      classType: "Advanced Class",
      location: "Dance Studio C",
      teacher: "Instructor Emily Clark",
      price: "$30"
    }
    // Add more class details here
  ];

  return (
    <section className="schedule-section">
      <h2>Upcoming Classes</h2>
      <div className="calendar">
        {classes.map((classItem, index) => (
          <div key={index} className="calendar-item">
            <div className="calendar-date">{classItem.date}</div>
            <div className="calendar-details">
              <div className="calendar-time">{classItem.time}</div>
              <div className="calendar-class">{classItem.classType}</div>
              <div className="calendar-location">{classItem.location}</div>
              <div className="calendar-teacher">{classItem.teacher}</div>
              <div className="calendar-price">{classItem.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
