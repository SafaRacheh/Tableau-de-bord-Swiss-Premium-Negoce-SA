import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RhComponent } from './components/rh/rh.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { FinancialComponent } from './components/financial/financial.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ManagerComponent } from './components/manager/manager.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PredictComponent } from './components/predict/predict.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'rh',component:RhComponent},
{path:'vehicle',component:VehicleComponent},
{path:'financial',component:FinancialComponent},
{path:'partner',component:PartnerComponent},
{path:'manager',component:ManagerComponent},
{path:'overview',component:OverviewComponent},
{path:'predict',component:PredictComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
