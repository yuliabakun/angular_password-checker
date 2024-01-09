import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent],
  imports: [BrowserModule, FontAwesomeModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
