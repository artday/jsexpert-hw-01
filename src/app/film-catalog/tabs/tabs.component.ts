import { Component, OnInit} from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  films: object[];

  constructor(private filmsService: FilmService) { }

  getFilms(): void {
    this.films = this.filmsService.films;
  }

  ngOnInit() {
    this.getFilms();
  }
}
