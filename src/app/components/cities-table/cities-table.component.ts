import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {
  dateForm: FormGroup;
  data: any[];
  pageEvent: PageEvent;
  pageSize = 10;
  currentPage: number = 0;
  totalSize: number = 0;
  showResetButton: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  constructor(private listService: ListService, private fb: FormBuilder) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'city', 'start_date', 'end_date', 'price', 'status', 'color'];

  ngOnInit() {
    // this.dataSource = new CitiesTableDataSource(this.paginator, this.sort);
    this.initForm();
    this.getData();
  }
  initForm() {
    this.dateForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  getData() {
    this.listService.getCities().subscribe(data => {
      this.data = data;
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
      this.totalSize = data.length;
      this.dataSource.sort = this.sort;
    });
  }

  submitForm() {
    const start = this.formatDate(this.dateForm.value.startDate);
    const end = this.formatDate(this.dateForm.value.endDate);
    let startDate = +new Date(start);
    let endDate = +new Date(end);
    let newData = this.data.filter(date => {
      //console.log('date', date.start_date);
      //return startDate >= +new Date(data.start_date) && endDate <= +new Date(data.end_date);
      return +new Date(date.start_date) > startDate && +new Date(date.end_date) <= endDate;
    });
    this.dataSource = new MatTableDataSource<Element>(newData);
    this.dataSource.paginator = this.paginator;
    this.showResetButton = true;
  }

  resetTable() {
    this.getData();
  }

  formatDate(date) {
    return moment(date).format('L');
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
