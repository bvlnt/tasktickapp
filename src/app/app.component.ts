import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  authSuccess = false;
  closeAlert = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    //login status, alert box closing
    this.authService.authStatus.subscribe((authstatus) => {
      this.authSuccess = authstatus;
      if (this.authSuccess) {
        this.closeAlert = false;
        setTimeout(() => {
          this.closeAlert = true;
        }, 3000);
      }
    });
  }
  title = 'tasktickapp';
}
