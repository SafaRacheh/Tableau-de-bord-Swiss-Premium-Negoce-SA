// rh.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardCommunicationService } from '../dashboardcommunication.service';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit, OnDestroy {
  showDriverDashboard: boolean = false;
  private dashboardChangeSubscription!: Subscription;

  constructor(private dashboardCommunicationService: DashboardCommunicationService) {}

  ngOnInit(): void {
    this.dashboardChangeSubscription = this.dashboardCommunicationService.dashboardChange$.subscribe(dashboard => {
      this.showDriverDashboard = (dashboard === 'driver');
    });
  }

  ngOnDestroy(): void {
    this.dashboardChangeSubscription.unsubscribe();
  }
}
