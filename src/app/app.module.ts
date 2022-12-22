import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { CardComponent } from './components/card/card.component';
import { SaturationO2Component } from './components/saturation-o2/saturation-o2.component';
import { IgxFinancialChartModule, IgxLegendModule } from 'igniteui-angular-charts';
import { HttpClientModule } from '@angular/common/http';
import { PatientInfosComponent } from './patient-infos/patient-infos.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { MedicamentComponent } from './medicament/medicament.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
    SaturationO2Component,
    PatientInfosComponent,
    AnalyseComponent,
    ConsultationComponent,
    MedicamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material Modules 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    // IgxFinancialChartModule, IgxLegendModule
    IgxFinancialChartModule,
    IgxLegendModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
