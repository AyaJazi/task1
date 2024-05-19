import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { GetApiService } from './get-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
