import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films/films.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { TabsComponent } from './tabs/tabs.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {FilmService} from './film.service';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule
  ],
  declarations: [
    MainComponent,
      FilmsComponent,
      DetailsComponent,
      TabsComponent,
      TestComponent
  ],
  providers: [
      FilmService
  ]
})
export class FilmCatalogModule { }
