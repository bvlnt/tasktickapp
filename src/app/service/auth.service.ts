import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('isLoggedIn') || 'false')
  );
  authStatus = this.authSubject.asObservable();

  updateAuthStatus(authstatus: boolean) {
    localStorage.setItem('isLoggedIn', JSON.stringify(authstatus));
    this.authSubject.next(authstatus);
  }

  logout() {
    this.updateAuthStatus(false);
  }

  isLoggedIn() {
    return this.authSubject.getValue();
  }
}
