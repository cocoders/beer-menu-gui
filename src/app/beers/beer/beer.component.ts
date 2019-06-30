import { Component, Input } from '@angular/core';
import { Beer } from '../../beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {
  @Input() beer: Beer;

  photoName(name: string): string {
    return name.replace(' ', '_').toLowerCase();
  }
}
