import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    // private auth: AuthService
    private router: Router
  ) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ` //${this.auth.getToken()}`
      }
    });

    return next.handle(request)
      .pipe(
        catchError((err: any, caught: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            // this.authService.setToken(null);
            this.router.navigate(['/login']);
          }

          return caught;
        })
      );
  }
}
