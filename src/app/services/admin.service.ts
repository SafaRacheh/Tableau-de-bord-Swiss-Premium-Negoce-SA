import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private isAdmin = false;
  // private isAdminSubject = new BehaviorSubject<boolean>(this.isAdmin);
  // isAdmin$ = this.isAdminSubject.asObservable();

  // constructor() { }

  // setAdminStatus(status: boolean) {
  //   this.isAdmin = status;
  //   // Notify subscribers about the change
  //   this.isAdminSubject.next(this.isAdmin);
  // }

  // isAdminUser(): boolean {
  //   return this.isAdmin;
  // }
  // setVehicleStatus(status: boolean) {
  //   this.isAdmin = status;
  //   // Notify subscribers about the change
  //   this.isAdminSubject.next(this.isAdmin);
  // }


//   isVehicleUser(): boolean {
//     return this.isAdmin;
//   }
private userRole: string = ''; // Initialize with an empty string
private userRoleSubject = new BehaviorSubject<string>(this.userRole);
userRole$ = this.userRoleSubject.asObservable();

constructor() { }

setUserRole(role: string) {
  this.userRole = role;
  this.userRoleSubject.next(this.userRole);
}

getUserRole(): string {
  return this.userRole;
}

}
