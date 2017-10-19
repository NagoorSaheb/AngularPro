import { Component, Output , EventEmitter } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ImagePath: string;
   constructor() {
      this.ImagePath = './assets/images/trailer.jpg';
      }
      @Output() pathSelected = new EventEmitter<string>();
      onSelect(namePath: string) {
        this.pathSelected.emit(namePath);
      }

}
