import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from '@fullcalendar/core'
import './../style/Calender.css'

export default function Calender() {

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(currentEvents));
  }, [currentEvents]);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
      
      calendarApi.addEvent(newEvent);
      setCurrentEvents(prev => [...prev, newEvent]);
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      setCurrentEvents(prev => prev.filter(event => event.id !== clickInfo.event.id));
    }
  }

  function handleEvents(events) {
    // Only update if the events have actually changed
    const plainEvents = events.map(event => event.toPlainObject());
    if (JSON.stringify(plainEvents) !== JSON.stringify(currentEvents)) {
      setCurrentEvents(plainEvents);
    }
  }

   let eventGuid = 0;

        function createEventId() {
         return String(eventGuid++);
       }



  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }


  function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <div className='demo-app-sidebar'>
      <div className='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      
      <div className='demo-app-sidebar-section'>
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  )
}

  return (
    <div style={{
        display: 'flex',

    }} className="demo-app">
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          events={currentEvents}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          eventAdd={(e) => {
            setCurrentEvents(prev => [...prev, e.event.toPlainObject()]);
          }}
          eventChange={(e) => {
            setCurrentEvents(prev => {
              const updated = prev.map(event => 
                event.id === e.event.id ? e.event.toPlainObject() : event
              );
              return updated;
            });
          }}
          eventRemove={(e) => {
            setCurrentEvents(prev => prev.filter(event => event.id !== e.event.id));
          }}
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>
    </div>
  );
};

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

