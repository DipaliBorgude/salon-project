import { Component  } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';



@Component ({
    selector    : 'app-container',
    imports     : [HeaderComponent,MaincontainerComponent,],
    standalone  :  true,
    templateUrl : './container.component.html',
    styleUrls   :  ['./container.component.css'],
   
 })

export class ContainerComponent {
    

}