import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { ContainerComponent} from './Container/container.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations : [
        AppComponent,
        ContainerComponent,
        DetailsComponent,
         ],

    imports : [
        BrowserModule,

    ],

    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule { }
