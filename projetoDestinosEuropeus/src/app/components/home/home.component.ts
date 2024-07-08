import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Aparecer:boolean = false

  mostrar(){
    if(this.Aparecer === false){
      this.Aparecer = true
    }else{
      this.Aparecer = false
    }
  }
  
}
