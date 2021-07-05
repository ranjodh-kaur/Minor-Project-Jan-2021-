import { Injectable,NgZone } from '@angular/core';
import { UserInfo } from "./user/user_info";
import Firebase from 'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth:  AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
    ) { 
      /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user_info', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  // Sign in with email/password
  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          alert("Successfully Logged In!")
          this.router.navigateByUrl('/product-list');
        });
        this.SetUserData(result.user!);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        //this.SendVerificationMail();
        
        this.SetUserData(result.user!);
        alert("Successfully Registered")
      }).catch((error) => {
        window.alert(error.message)
      })
  }
/*
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  } */

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user!);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user_info: Firebase.User ) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user_info.uid}`);
    const userData: UserInfo = {
      uid: user_info.uid,
      email: user_info.email,
      
      displayName: user_info.displayName,
      photoURL: user_info.photoURL,
      emailVerified: user_info.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}

