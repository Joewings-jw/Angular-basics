import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  constructor(private router: Router){
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +route.url[1].path;
      if(isNaN(id)|| id < 1){
        console.log("invalid product id ");
        this.router.navigate(['/products']);
        return false;
      }
    return true;
  }
  
}
