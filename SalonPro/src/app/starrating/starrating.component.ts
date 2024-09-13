import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-starrating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starrating.component.html',
  styleUrl: './starrating.component.css'
})
export class StarratingComponent {
      
  //  @Input() rating : number | any;
  //  @Input() starCount : number = 5 ;
  //  @Output() ratingUpdate = new EventEmitter<number>();

  //  stars : boolean [] = [];

  //  ngOnInit(){
  //   this.stars = Array(this.starCount).fill(false).map((_,i) => i < this.rating ) ;  
  // }

  //   handleStarClick(index : number){
  //     this.rating = index + 1;
  //     this.stars = Array(this.starCount).fill(false).map((_,i) => i < this.rating ) ;  
  //     this.ratingUpdate.emit(this.rating);
  //   }
  
}


