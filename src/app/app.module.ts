import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RhComponent } from './components/rh/rh.component';
import { FinancialComponent } from './components/financial/financial.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ManagerComponent } from './components/manager/manager.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { PredictComponent } from './components/predict/predict.component';
import { CO2Component } from './components/co2/co2.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RhComponent,
    FinancialComponent,
    VehicleComponent,
    PartnerComponent,
    ManagerComponent,
    OverviewComponent,
    ClientDashboardComponent,
    DriverDashboardComponent,
    PredictComponent,
    CO2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
