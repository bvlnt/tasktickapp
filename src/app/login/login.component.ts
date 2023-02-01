import { Component, OnInit } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  provider: any;
  user: any;

  constructor() {}

  ngOnInit() {
    const provider = new GoogleAuthProvider();
    this.provider = provider;

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }

  loginWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
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
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}

function auth(auth: any, arg1: (user: any) => void) {
  throw new Error('Function not implemented.');
}
