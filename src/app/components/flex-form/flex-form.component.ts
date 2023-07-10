import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/form';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.css'],
})
export class FlexFormComponent {
  formData: RegisterForm = { username: '', password: '', email: '' };
  constructor(private http: HttpClient, private formService: FormService) {}
  onSubmit(): void {
    this.formService.addUser(this.formData).subscribe(() => {
      console.log(Response);
    });
  }
}
