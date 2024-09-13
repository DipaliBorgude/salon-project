import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { StarratingComponent } from '../../starrating/starrating.component';

@Component({
  selector: 'app-maincontainer',
  standalone: true,
  imports: [CommonModule,StarratingComponent],
  templateUrl: './maincontainer.component.html',
  styleUrl: './maincontainer.component.css'
})
export class MaincontainerComponent 
{
     Maincontainer  = [
      {
       name     :  'Dharsh Salon',
       type     :  'Unisex Salon',
       timing   :  'Open ` closes 10pm',
       address :  'Hadapsar,Pune',
        },
      {
        name     :  'Shaurya Salon',
        type     :  'Mens Salon',
        timing   :  'Open ` closes 10pm',
        address :   'Aundh,Pune',
        },
      {
          name     :  'Niki Salon',
          type     :  'Beauty Salon',
          timing   :  'Open ` closes 10pm',
          address :  'Mundhwa,Pune',
        }
      ];

    // onRatingUpdated(newRating : number | any) {
    //   console.log('The new rating is:  ', newRating);
    // }
}

 




