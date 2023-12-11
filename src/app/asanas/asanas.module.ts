import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListAsanasComponent } from './components/list-asanas/list-asanas.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EnglishComponent } from './components/english/english.component';
import { FormsModule } from '@angular/forms';
import { SpanishComponent } from './components/spanish/spanish.component';
import { SanskritComponent } from './components/sanskrit/sanskrit.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent,
    EnglishComponent,
    SpanishComponent,
    SanskritComponent,
    TraductorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent
  ]
})
export class AsanasModule { }
