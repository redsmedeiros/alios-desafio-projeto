import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public myEventEmitter = new EventEmitter();

  constructor() { }
}
