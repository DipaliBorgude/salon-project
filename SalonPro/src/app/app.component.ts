import { Component } from '@angular/core';
import { ContainerComponent } from './Container/container.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  imports : [ContainerComponent,DetailsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
 })

export class AppComponent {
  title = 'SalonPro';
}
