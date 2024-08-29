import { Component, DoCheck, signal,computed,effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck {
   counter= signal(0);
   message= signal<string[]>([]);
   doubleCounter = computed( () => this.counter() * 2 );

   constructor(){
            effect( () => console.log('NEW COUNTER VALUE IS: ' + this.counter()) )
   }

   increment(){
    //this.counter.set(this.counter() + 1);
    this.counter.update((prevValue) => prevValue + 1);
    //this.message.update((prevMessage) => [...prevMessage,'CURRENT VALUE OF COUNTER IS: ' + this.counter()])
   this.message.mutate( (prevMessage) =>  prevMessage.push('CURRENT VALUE OF COUNTER IS: ' + this.counter()));
   }

   decrement(){
      this.counter.update((prevValue) => prevValue - 1);
      this.message.mutate( (prevMessage) =>  prevMessage.pop());
   }

   ngDoCheck(){
      console.log("ANGULAR CHANGE DETECTION CALLED");
   }
}
