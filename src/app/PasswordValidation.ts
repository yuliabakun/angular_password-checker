import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PasswordValidation {
  validate(password: string): number {
    const hasLetters = /[a-zA-Z]/;
    const hasNumbers = /\d/;
    const hasSpecialCharacters = /[^a-zA-Z\d\s]/;
    const minPassLength = 8;
    const emptyField = -1;
    let counter = 0;

    [hasLetters, hasNumbers, hasSpecialCharacters].forEach((rule) => {
      if (rule.test(password)) {
        counter++;
      }
    });

    if (password.length === 0) {
      return emptyField;
    } else if (password.length < minPassLength) {
      return 0;
    } else {
      return counter;
    }
  }
}
