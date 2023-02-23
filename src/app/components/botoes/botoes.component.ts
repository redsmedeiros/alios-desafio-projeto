import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent implements OnInit {

  btnFlag: boolean = true

  constructor( private eventEmitterService: EventService){}

  ngOnInit(): void {

    this.eventEmitterService.myEventEmitter.subscribe((data) => {
      this.btnFlag = data;

      console.log(this.btnFlag)
    });
  }

}
