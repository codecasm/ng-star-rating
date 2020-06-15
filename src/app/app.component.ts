import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-starrating-demo';

  defaultStar: number;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.defaultStar = 0;
    this.form = this.fb.group({
      rating1: [0, Validators.required],
      rating2: [4],
    });
  }
}
