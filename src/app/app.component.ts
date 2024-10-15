import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, SliderComponent]
})
export class AppComponent {
}
