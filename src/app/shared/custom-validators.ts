import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
	const password = control.get('password')
	const confirm_password = control.get('confirm_password')

	return password && confirm_password && password.value !== confirm_password.value ? { 'passwordMatch': true } : null
  }
}
