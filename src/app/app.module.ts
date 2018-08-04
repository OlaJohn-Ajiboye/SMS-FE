import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule,MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,MatIconModule,MatDatepickerModule,MatNativeDateModule, MatSnackBarModule,} from '@angular/material'
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CitiesTableComponent } from './components/cities-table/cities-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListService } from './services/list.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CitiesTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSnackBarModule,
   
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
