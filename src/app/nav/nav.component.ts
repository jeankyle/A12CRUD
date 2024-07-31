import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrls: [
    '../../assets/plugins/fontawesome-free/css/all.min.css',
    '../../assets/css/adminlte.min.css',
    '../../assets/css/custom.css',
    '.././app.component.css',
  ]
})
export class NavComponent {

}
