
import { Admissao } from './../../models/Admissao';
import { Injectable } from '@angular/core';
import sample_data from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  list(): Admissao{
    return sample_data;
  }
}
