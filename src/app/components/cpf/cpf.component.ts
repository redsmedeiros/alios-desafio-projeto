import { EventService } from './../../event.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss']
})
export class CpfComponent implements OnInit {

  formCPF: FormGroup
  habilitaErro: boolean = false
  btnFlag: boolean = false


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventEmitterService: EventService

  ){

    this.formCPF = this.formBuilder.group({
      cpf: ['', Validators.compose([Validators.required])]
    })

    this.activatedRoute.params.subscribe((params)=>{

      if(params['cpf']){

        this.btnFlag = true

      }
    })
  }

  ngOnInit(): void {}

  submit(campo:any): void {

    let validacao = this.cpfValido(campo)

    if(validacao !== null){

      this.habilitaErro = true

    }else{

      const cpf = this.formCPF.get('cpf')?.value

      this.router.navigateByUrl('/admissao/' + cpf)

      this.emitEvent()
    }



  }


  cpfValido = (campo: any): any => {
    let cpf = campo.value

    const cpfString = cpf.cpf
    // Para verificar o digito do cpf
    let rev = 0;
    let add = 0;
    // Verifica tamanho digitado e alguns cpfs que passam na verificação do digito, mas são inválidos
    if (
      cpfString.length !== 11 ||
      cpfString === '00000000000' ||
      cpfString === '11111111111' ||
      cpfString === '22222222222' ||
      cpfString === '33333333333' ||
      cpfString === '44444444444' ||
      cpfString === '55555555555' ||
      cpfString === '66666666666' ||
      cpfString === '77777777777' ||
      cpfString === '88888888888' ||
      cpfString === '99999999999'
    ) {
      // Retorna um objeto contendo uma propriedade para identificar o erro e um valor.
      // esse valor pode ser pego e adicionado a mensagem, porém para esse caso não precisamos.

      return {
        invalido: true,
      };
    }

    // Valida o primeiro digito do CPF
    add = 0;
    for (let i = 1; i <= 9; i++) {
      add += Number(cpfString.substring(i - 1, i)) * (11 - i);
    }
    rev = (add * 10) % 11;

    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== Number(cpfString.charAt(9))) {
      return {
        invalido: true,
      };
    }

    // Valida o segundo digito do CPF
    add = 0;
    for (let i = 1; i <= 10; i++) {
      add += Number(cpfString.substring(i - 1, i)) * (12 - i);
    }

    rev = (add * 10) % 11;
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== Number(cpfString.charAt(10))) {
      return {
        invalido: true,
      };
    }

    // Se tudo der certo e passou nas verificações returna null, ou seja, não possui erros nesse controlador
    return null;
  };

  emitEvent() {
    this.eventEmitterService.myEventEmitter.emit(false);
  }
}





