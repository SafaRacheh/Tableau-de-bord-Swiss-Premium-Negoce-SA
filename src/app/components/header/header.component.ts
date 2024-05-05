// header.component.ts
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { ClientDashboardComponent } from '../client-dashboard/client-dashboard.component';
import { DriverDashboardComponent } from '../driver-dashboard/driver-dashboard.component';
import { DashboardCommunicationService } from '../dashboardcommunication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userRole!: string;
  private userRoleSubscription!: Subscription;

  constructor(private adminService: AdminService, 
              private dashboardCommunicationService: DashboardCommunicationService, 
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.userRoleSubscription = this.adminService.userRole$.subscribe(role => {
      this.userRole = role;
    });
  }

  ngOnDestroy(): void {
    this.userRoleSubscription.unsubscribe();
  }
  
  onLogout(): void {
    this.adminService.setUserRole(''); // Clear user role
  }

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  onDashboardClick(dashboard: string) {
    this.dashboardCommunicationService.emitDashboardChange(dashboard);
  }

  loadComponent(componentClass: any) {
    this.container.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentRef = this.container.createComponent(componentFactory);
  }
}
