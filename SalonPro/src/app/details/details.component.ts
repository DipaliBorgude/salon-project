import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  Details = [
    
  { name       :  'Dharsh Salon',
    amenities  :  ' Free Wifi , TV , AC ,  Geyser, Power backup , Parking facility , complimentry treat ',
    about      :  '',
    services   :  '',
    ratings    :  '',
    reviews    :  '',
    location   :  '',
  }]

}
