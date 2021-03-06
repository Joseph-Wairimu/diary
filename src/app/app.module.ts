import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DiaryContentComponent } from './diary-content/diary-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiaryFormComponent,
    DiaryContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
