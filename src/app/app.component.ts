import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './PasswordValidation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  passwordForm: FormGroup;
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private passwordValidation: PasswordValidation
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  updatePassword(newPassword: string) {
    this.password = newPassword;
  }

  getValidationBarClass() {
    const strength = this.passwordValidation.validate(this.password);

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
