import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {OverviewComponent} from './overview/overview.component';
import {AuthGuard} from './classes/auth.guard';



const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
