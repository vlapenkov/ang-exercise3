import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer, Subject, of, forkJoin } from 'rxjs';
import { s } from '@angular/core/src/render3';
import { pipe } from '@angular/core/src/render3/pipe';
import { map, tap, first, merge, flatMap, every, filter, last, concat, mergeAll, zip, concatMap } from 'rxjs/operators';

public interface ITest {
  a:number;
  b:string;
}

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})

export class ObservableTestComponent implements OnInit {

 test:ITest={a:10,b:"asdasd"};
 

  obsArray$= of([1,2,3]);
  obsArray2$= of([-4,5,6]);
  //@ViewChild('someVar') el:ElementRef;
  constructor() { }


  ngOnInit() {
   let y= {a:10,b:"test"} as ITest;

   // преобразуем массив Observables to Observable elements  of([1,2,3]) => of(1,2,3)
    const sequense1$ =this.obsArray$.pipe(flatMap(x=>x));
    const sequense2$ =this.obsArray2$.pipe(flatMap(x=>x));
    
    let valueToCheck=3;
    let sequense3$= sequense1$.pipe(
      merge(sequense2$),
      filter(x=>x<valueToCheck),
      
      ) ;

    

    
    //sequense3$
    sequense3$.subscribe(console.log);
    /* Observable.create((observer : Observer) =>
   {
    let res=[];
     let counter=0;
     setInterval(()=> { 
      counter++;       
      
       observer.next(counter);
     //  if (counter==3) observer.error(new Error('bug'));
       if(counter>5) observer.complete(); 
     }
       ,1000);
     
   );

   
   
   let trsequence$=sequense$.pipe(
    map(x=> ({a:x,b:"test"} as ITest)),
   merge(this.obsArray$)
    ); 
   trsequence$.subscribe(value=>console.log(value));
   */

  



  /*
   const sequense$ = Observable.create((observer : Observer) =>
   {
     let counter=0;
     setInterval(()=> { 
       observer.next(counter++)
     //  if (counter==3) observer.error(new Error('bug'));
       if(counter>5) observer.complete(); 
     }
       ,1000);
       

   
   );

   sequense$.subscribe(value=>console.log(value),
   error=>  console.log(error)
   ,
   complete=> console.log('complete')
   );

   setTimeout(()=>sequense$.subscribe(value=>console.log(value)),2000)

  }*/

}
