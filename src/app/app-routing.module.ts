import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';

const routes: Routes = [
  { path: 'account/login', component: LoginComponent },
  { path: 'account/registration', component: RegistrationComponent},
  { path: 'movie/theatre', component: MovieTheatreComponent},
  {path: '', redirectTo: 'account/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
