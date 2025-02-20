import { Component } from '@angular/core';
import { CalendlyWidgetComponent } from './calendly-widget/calendly-widget.component';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [CalendlyWidgetComponent],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss'
})
export class MeetingsComponent {

}
