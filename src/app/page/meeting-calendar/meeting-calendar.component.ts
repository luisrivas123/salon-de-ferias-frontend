import { Component, OnInit, Inject } from '@angular/core';
import { MeetingCalendarService} from '../../services/meeting-calendar.service';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importar FullCalendar

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-meeting-calendar',
    imports: [FullCalendarModule], // Agregar FullCalendarModule aquí
    templateUrl: './meeting-calendar.component.html',
    styleUrls: ['./meeting-calendar.component.scss']
})
export class MeetingCalendarComponent implements OnInit {
  events: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], // Agregar el plugin de día en grilla
    events: this.events, // Usar los eventos obtenidos
  };

  constructor(@Inject(MeetingCalendarService) private meetingCalendarService: MeetingCalendarService) {}

  ngOnInit() {
    this.meetingCalendarService.getEvents().subscribe(events => {
      this.events = events;
      console.log('Eventos obtenidos:', this.events);
      this.calendarOptions.events = this.events; // Asignar eventos al calendario
    });
  }
}
