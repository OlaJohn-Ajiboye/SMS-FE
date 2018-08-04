import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CitiesTableDataSource } from './cities-table-datasource';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  options: NgxDateRangePickerOptions;
  reset = false;

  constructor(
    private listService: ListService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CitiesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'city','start_date','end_date','price','status','color'];

  ngOnInit() {
    this.dataSource = new CitiesTableDataSource(this.paginator, this.sort);
  }
}
