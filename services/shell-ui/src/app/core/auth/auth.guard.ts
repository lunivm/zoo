// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot
// } from '@angular/router';
// import { tap } from 'rxjs/operators';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//
//   public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return this.checkToken();
//   }
//
//   private checkToken(): Observable<boolean> {
//     return this.authService.loggedIn$
//       .pipe(
//         tap((loggedIn: boolean) => {
//           if (!loggedIn) {
//             this.router.navigate(['/login']);
//           }
//         })
//       );
//   }
// }
