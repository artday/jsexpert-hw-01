import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  description: string = 'Middle card description';

  films: object[];
  
  constructor(private filmsService: FilmService) {}

  getFilms(): void {
    this.films = this.filmsService.films;
  }
  
  ngOnInit() {
    this.getFilms();
  }
  
}
