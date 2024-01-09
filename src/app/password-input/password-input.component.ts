import { Component, Output, EventEmitter } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})

export class PasswordInputComponent {
  @Output() passwordChanged = new EventEmitter<string>();
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  visible: boolean = false;

  changePassVisibility() {
    this.visible = !this.visible;
  }

  updatePassword(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    element.value = this.removeSpaces(element.value);
    const value = this.removeSpaces(element.value);

    this.passwordChanged.emit(value);
  }

  removeSpaces(password: string) {
    return password.replace(/\s/g, '');
  }
}
