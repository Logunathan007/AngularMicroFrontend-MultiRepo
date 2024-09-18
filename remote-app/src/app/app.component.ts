import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterModule } from './counter/counter.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote-app';
}
