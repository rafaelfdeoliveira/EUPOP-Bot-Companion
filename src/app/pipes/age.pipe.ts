import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(ageNumber: number) {
    switch (ageNumber) {
      case 1:
        return 'I'
      case 2:
        return 'II'
      case 3:
        return 'III'
      case 4:
        return 'IV'
      default:
        return ageNumber.toString()
    }
  }

}
