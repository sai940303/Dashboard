import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: '🎉 Event 1',
      start: new Date(2023, 9, 26, 10, 0), // month is 0-indexed
      end: new Date(2023, 9, 26, 12, 0),
    },
    {
      title: '💼 Event 2',
      start: new Date(2023, 9, 27, 14, 0),
      end: new Date(2023, 9, 27, 16, 0),
    },
  ];

  return (
    <div style={{ height: '100vh', padding: '16px' }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={['month', 'week', 'day']}
        onSelectEvent={(event) => alert(`Event clicked: ${event.title}`)}
        onSelectSlot={(slotInfo) =>
          alert(`Selected date: ${moment(slotInfo.start).format('YYYY-MM-DD')}`)
        }
        selectable
        style={{ height: '90vh' }}
      />
    </div>
  );
};

export default Calendar;
