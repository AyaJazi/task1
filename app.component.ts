import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private api:GetApiService){

  }
  ngOnInit(){
  }
}