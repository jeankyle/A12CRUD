import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styleUrls: ['../assets/plugins/fontawesome-free/css/all.min.css', '../assets/css/adminlte.min.css', '../assets/css/custom.css', './app.component.css',]
})
export class AppComponent {
  title = 'Rahisi Solution';
  language = 'Angular';
}
