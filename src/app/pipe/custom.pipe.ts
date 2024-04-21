import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.warn(value);
    console.warn(args);
    
    if (args[0]<10){
return 'good '+ value
    }
    else{
    return  'bad '+ value
    }
  }

}
