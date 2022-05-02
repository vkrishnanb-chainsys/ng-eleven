import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( args > 0) { return (value * (1- args))}
    return value;
  }

}
