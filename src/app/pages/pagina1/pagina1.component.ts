import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
             AfterViewInit, OnDestroy, AfterViewChecked {

  public nombre: string = 'Fernando';
  public segundos: number = 0;
  public timerSubscription!: Subscription;

  constructor() {
    console.log('constuctor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000)
      .subscribe( i => {
        this.segundos = i;
      })
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  guardar() {

  }

}
