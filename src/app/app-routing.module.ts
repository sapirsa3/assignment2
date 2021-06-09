import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueComponent } from './blue/blue.component';
import { WhiteComponent } from './white/white.component';

const routes: Routes = [
{path:'white', component:WhiteComponent,},
{path:'blue', component:BlueComponent,}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
