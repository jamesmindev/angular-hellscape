import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// components
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-hellscape';
}
