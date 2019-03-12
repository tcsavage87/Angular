import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

// App Module is bundle of functionalities within application and gives Angular info about features about app
	// JS object containing properties
		// boostrap defines which component should be recognized on render
		// any new files must be registered in declarations []
		// imports - add other modules

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
