import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {

	static match(controlName: string, matchingControlName: string): ValidatorFn {
		return (group: AbstractControl): ValidationErrors | null => {
			const matchingControl = group.get('confirm_password')
			const control = group.get('password')

			if (!control || !matchingControl) {
				console.error('Form control not found in form group')
				return { controlNotFound: false }
			}

			const error = control.value === matchingControl.value ? null : { noMatch : true }
			matchingControl.setErrors(error)
			return error
		}
	}
}
//factory function
