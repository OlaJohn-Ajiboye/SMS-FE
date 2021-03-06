import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/shared/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CitiesTableComponent } from './components/cities-table/cities-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListService } from './services/list.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [AppComponent, MainNavComponent, CitiesTableComponent, ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [ModalComponent],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
