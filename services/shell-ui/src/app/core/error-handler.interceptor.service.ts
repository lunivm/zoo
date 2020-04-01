import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
// import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    // private authService: AuthService,
    private router: Router
    // private snackBar: MatSnackBar
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err: any, caught: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            // this.authService.setToken(null);
            this.router.navigate(['/login']);
          }

          if (err) {
            // this.snackBar.open(`Помилка!`, null, {duration: 1000});
            // todo: remove temp solution
            alert(`Request error: ${err.message || err}`);
            throw err;
          } else {
            return caught;
          }
        })
      );
  }
}
