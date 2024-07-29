import {Component} from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>
        This website uses cookies to provide better user experience
      </p>
    </div>`,
  styles: ["p {color: red; font-size: 1.3em}", "div {background-color: #f1b0b7}"]
})
export class NotificationComponent {

}
