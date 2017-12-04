import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DogesComponent} from './doges/doges.component';


const routes: Routes = [
  {path: 'doges', component: DogesComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
