import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {NotificationComponent} from "../notification/notification.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NotificationComponent],
  templateUrl: './container.component.html',
  styleUrls: [
    '../../assets/plugins/fontawesome-free/css/all.min.css',
    '../../assets/css/adminlte.min.css',
    '../../assets/css/custom.css',
    '.././app.component.css',
  ]
})

export class ContainerComponent {}
