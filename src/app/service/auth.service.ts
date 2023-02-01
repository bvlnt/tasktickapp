import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(false);
  authStatus = this.authSubject.asObservable();
  logoutStatus = this.authSubject.asObservable();

  updateAuthStatus(authstatus: boolean) {
    this.authSubject.next(authstatus);
  }
}
