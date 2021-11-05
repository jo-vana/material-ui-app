import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatTableModule
  ]
})
export class MaterialModule { }
