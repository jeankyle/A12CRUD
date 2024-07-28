import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ContainerComponent} from "./container/container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    '../assets/plugins/fontawesome-free/css/all.min.css',
    '../assets/css/adminlte.min.css',
    '../assets/css/custom.css',
    './app.component.css',
  ]
})

export class AppComponent {
}
