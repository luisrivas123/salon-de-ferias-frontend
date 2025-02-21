import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingCalendarService {
  constructor(@Inject(AngularFirestore) private firestore: AngularFirestore) {}

  // Método para obtener todos los eventos de todas las empresas
  getEvents(): Observable<any[]> {
    return this.firestore.collection('company').valueChanges(); // Si los eventos están dentro de cada empresa
  }

  // Método para obtener los eventos de una empresa específica, si lo necesitas
  getEventsByCompany(companyId: string): Observable<any[]> {
    return this.firestore
      .collection('company')
      .doc(companyId)
      .collection('events') // Ajusta esto según tu estructura en Firestore
      .valueChanges();
  }
}
