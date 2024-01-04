import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  visible: boolean = false;
  password: string = '';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
  }

  changePassVisibility() {
    this.visible = !this.visible;
  }

  updatePassword(event: any) {
    this.password = event.target.value;
  }

  getPasswordStrength() {
    const hasLetters = /[a-zA-Z]/;
    const hasNumbers = /\d/;
    const hasSpecialCharacters = /[^a-zA-Z\d\s]/;
    const minPassLength = 8;
    const emptyField = -1;
    let counter = 0;

    [hasLetters, hasNumbers, hasSpecialCharacters].forEach(rule => {
      if (rule.test(this.password)) {
        counter++;
      }
    })

    if (this.password.length === 0) {
      return emptyField;
    } else if (this.password.length < minPassLength) {
      return 0;
    } else {
      return counter;
    }
  }

  getValidationBarClass() {
    const strength = this.getPasswordStrength();

    if (strength === 0) {
      return 'weak';
    } else if (strength === 1) {
      return 'easy';
    } else if (strength === 2) {
      return 'medium';
    } else if (strength === 3) {
      return 'strong';
    } else {
      return '';
    }
  }
}
