import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    initialDate: '2021-07-12',
    eventColor: 'orange',
    themeSystem: 'standard',
    events: [
      {
        title: 'All Day Event',
        start: '2021-07-01',
        description: 'deneme',
      },
      {
        title: 'Long Event',
        start: '2021-07-07',
        end: '2021-07-10',
        color: 'purple', // override!
        description: 'deneme',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-07-09T16:00:00',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-07-16T16:00:00',
      },
      {
        title: 'Conference',
        start: '2021-07-11',
        end: '2021-07-13',
        color: 'purple', // override!
      },
      {
        title: 'Meeting',
        start: '2021-07-12T10:30:00',
        end: '2021-07-12T12:30:00',
      },
      {
        title: 'Lunch',
        start: '2021-07-12T12:00:00',
      },
      {
        title: 'Meeting',
        start: '2021-07-12T14:30:00',
      },
      {
        title: 'Birthday Party',
        start: '2021-07-13T07:00:00',
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-07-28',
      },
    ],
    eventMouseEnter: function (info) {
      if (
        info.event.extendedProps.description != undefined &&
        info.event.extendedProps.description != null
      ) {
        (<any>$(info.el)).tooltip({
          title: info.event.extendedProps.description,
          placement: 'top',
        });
      }
    },
  };

  ngOnInit() {}
}
