import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  david = 'per kaettalla; Billa; David Billa';
  
  onkeyupssss(){
    console.log(this.david);
  }
}
