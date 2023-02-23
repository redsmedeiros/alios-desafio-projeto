import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digito'
})
export class DigitoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let number = value
    let string = number.toString()
    let prefixo = string.substring(0, 5)
    let digito = string.substring(5, 6)
    let conta = prefixo + '-' + digito
    return conta;
  }

}
