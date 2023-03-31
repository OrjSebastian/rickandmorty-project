import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class allCharacters implements OnInit {

  allCharacters: any;


  constructor(
    private ramService: RickAndMortyService
    ) { }

    ngOnInit() {
      this.ramService.getAllCharacters().then( (res: any) => {
        this.allCharacters = res;
        console.log (this.allCharacters);
      });
    }
}