import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './asanas/pages/home-page/home-page.component';
import { EnglishComponent } from './asanas/components/english/english.component';
import { SpanishComponent } from './asanas/components/spanish/spanish.component';
import { SanskritComponent } from './asanas/components/sanskrit/sanskrit.component';
import { TraductorComponent } from './asanas/components/traductor/traductor.component';
import { ListAsanasComponent } from './asanas/components/list-asanas/list-asanas.component';

//Rutas de acceso
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'english',
    component: EnglishComponent
  },
  {
    path: 'spanish',
    component: SpanishComponent
  },
  {
    path: 'sanskrit',
    component: SanskritComponent
  },
  {
    path: 'translate',
    component: TraductorComponent
  },
  {
    path: 'list',
    component: ListAsanasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
