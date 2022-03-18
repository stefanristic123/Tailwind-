import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent implements OnInit, AfterViewInit {

  @Input('inputCards') inputCards: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    console.log('Dolse u top ', this.inputCards)

  }

}
