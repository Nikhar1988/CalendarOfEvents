import { Calendar } from 'antd'
import { Moment } from 'moment'
import React, { FC } from 'react'
import { formatDate } from '../models/data'
import { IEvent } from '../models/IEvent'

interface EventCalendarProps {
    events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
    
    
    const dateCellRender = (value: Moment) => {
       const formatedDate = formatDate(value.toDate());
       const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
          <div>
            {currentDayEvents.map((ev,index) => 
                <div key={index}>{ev.description}</div>)}
          </div>
        );
      }
    
    return (
        <div>
            <Calendar
            dateCellRender={dateCellRender}/>
        </div>
    )
}
