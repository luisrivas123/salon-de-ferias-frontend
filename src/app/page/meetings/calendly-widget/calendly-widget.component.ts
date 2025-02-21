import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var Calendly: any;

@Component({
    selector: 'app-calendly-widget',
    imports: [],
    templateUrl: './calendly-widget.component.html',
    styleUrl: './calendly-widget.component.scss'
})
export class CalendlyWidgetComponent implements OnInit, AfterViewInit {
  @Input() calendlyUrl!: string; // URL de la página de Calendly
  @Input() themeColor: string = '#00a2ff'; // Color del tema de Calendly
  @Input() textColor: string = '#ffffff'; // Color del texto de Calendly

  @ViewChild('calendlyContainer') calendlyContainer!: ElementRef;

  
  ngOnInit(): void {
    if (typeof window !== 'undefined' && !(window as any).Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => console.log('Calendly script cargado');
      document.body.appendChild(script);
    }
  }
  

  ngAfterViewInit(): void {
    console.log('Calendly:', Calendly); // Verifica si Calendly está disponible
  
    if (!Calendly) {
      console.error('Calendly no está definido. El script no se ha cargado correctamente.');
      return;
    }
  
    if (this.calendlyUrl && this.calendlyContainer) {
      Calendly.initInlineWidget({
        url: this.calendlyUrl,
        parentElement: this.calendlyContainer.nativeElement,
        prefill: {
          textColor: this.textColor,
          themeColor: this.themeColor,
        },
      });
    }
  }
}
