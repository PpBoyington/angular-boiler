import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DogesComponent} from './doges/doges.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DogeDetailComponent} from './doge-detail/doge-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component: DogeDetailComponent},
  {path: 'doges', component: DogesComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
