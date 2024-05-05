import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form:any={}
//   user!:string
// constructor(private route:Router, private adminService:AdminService,private ac:ActivatedRoute){}
// OnSubmit(){
      
//    const{email,password}=this.form;
//    console.log(email,password);
//    if (email==="rh" && password==="rh") {
//     this.adminService.setAdminStatus(true);
//     this.route.navigate(['rh'])
//    }
//    else if (email==="vehicle" && password==="vehicle") {
//     this.adminService.setAdminStatus(true);
//     this.route.navigate(['vehicle'])
//    }
//    else if (email==="financial" && password==="financial") {
//     this.adminService.setAdminStatus(true);
//     this.route.navigate(['financial'])
//    }

   
// }

constructor(private router: Router, private adminService: AdminService) {}

OnSubmit() {
  const { email, password } = this.form;
  if (email === "rh" && password === "rh") {
    this.adminService.setUserRole("rh");
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
    
    this.router.navigate(['rh']);
  } 
  else if (email === "vehicle" && password === "vehicle") {
    console.log("mouhib");
    
    this.adminService.setUserRole("vehicle");
    this.router.navigate(['vehicle']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  } else if (email === "financial" && password === "financial") {
    this.adminService.setUserRole("financial");
    this.router.navigate(['financial']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  }
  else if (email === "partner" && password === "partner") {
    this.adminService.setUserRole("partner");
    this.router.navigate(['partner']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  }
  else if (email === "manager" && password === "manager") {
    this.adminService.setUserRole("manager");
    this.router.navigate(['manager']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  }
}
}
