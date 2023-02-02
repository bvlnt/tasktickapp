import { Component, OnInit } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  provider: any;
  user: any;
  // alert-hez változó
  authSuccess!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const provider = new GoogleAuthProvider();
    this.provider = provider;

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }

  loginWithGoogle() {
    this.authSuccess = false;

    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        this.authSuccess = true;
        this.authService.updateAuthStatus(true);
      })
      .catch((error) => {
        this.authSuccess = false;
        this.authService.updateAuthStatus(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.authService.logout();
      })
      .catch((error) => {
        // An error happened.
      });
  }
}

function auth(auth: any, arg1: (user: any) => void) {
  throw new Error('Function not implemented.');
}
