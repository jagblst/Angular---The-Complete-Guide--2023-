import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthresponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthresponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrYhf6mg9DD6SEDvtyecwiqXoJzF5vL_c',
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
