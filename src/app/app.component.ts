import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ContainerComponent} from "./container/container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, ContainerComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
}
