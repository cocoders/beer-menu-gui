import { Component } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent {
  beers$ = this.beersService.beers$;

  constructor(private beersService: BeersService) { }
}
