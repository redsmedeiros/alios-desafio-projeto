import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-passo-a-passo',
  templateUrl: './passo-a-passo.component.html',
  styleUrls: ['./passo-a-passo.component.scss']
})


export class PassoAPassoComponent implements OnInit  {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;


  constructor(private _formBuilder: FormBuilder) {


  }

  ngOnInit(): void {


  }
}
