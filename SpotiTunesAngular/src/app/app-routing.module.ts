import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { TunesComponent } from './components/tunes/tunes.component';

const routes: Routes = [
  {path: 'search',component:SearchComponent},
  {path: 'search/:keyword',component:TunesComponent},
  {path: '', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
