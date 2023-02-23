import { Admissao } from './../../models/Admissao';
import { CardsService } from './cards.service';
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  faUser = faUser
  faCheckCircle = faCheckCircle
  faCreditCard = faCreditCard
  cards!: Admissao

  constructor(private cardsService: CardsService){}

  ngOnInit(): void {

    this.cards = this.cardsService.list()
  }



}
