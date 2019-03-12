import { Component } from '@angular/core';

// Component is typescript class so Angular is able to instantiate
	// Must add component decorator and pass object with information
	// Selector defines the unique HTML selector 
	// templateUrl is file that contains template html code to render
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})
export class ServerComponent {

}