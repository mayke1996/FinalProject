import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
