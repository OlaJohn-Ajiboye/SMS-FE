import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';
import * as moment from 'moment';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {
  dateForm: FormGroup;
  data: any[];
  start_date: Date;
  end_date: Date;
  pageEvent: PageEvent;
  pageSize: number = 10;
  currentPage: number = 0;
  totalSize: number = 0;
  showResetButton: boolean = false; /**initilasize reset button to false when page is loaded,before filter */

  @ViewChild(MatPaginator) paginator: MatPaginator; /**Angular Materiial Native datatableSource Paginator */
  @ViewChild(MatSort) sort: MatSort; /**Angular Material Native datatableSource Sorting */
  dataSource: any;
  constructor(private listService: ListService, private fb: FormBuilder, private dialog: MatDialog) {}

  /** Columns displayed in the table. Columns IDs according to data **/
  displayedColumns = ['id', 'city', 'start_date', 'end_date', 'price', 'status', 'color', 'actions'];

  ngOnInit() {
    this.initForm(); /**initializes form */
    this.getData(); /** retrieves data  */
  }
  initForm() {
    /**Form Validations for the date Picker */
    this.dateForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  /**Retrieved date from the ListServices ;MatPaginator, MatSorting etc is called on the subscribed data */
  getData() {
    this.listService.getCities().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
      this.totalSize = data.length;
      this.dataSource.sort = this.sort;
      // helper to help sort date correctly
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'start_date':
            return new Date(item.start_date);
          case 'end_date':
            return new Date(item.end_date);
          default:
            return item[property];
        }
      };
    });
  }

  /**Handles datepicker OnSubmit event and perform the needed filter */
  submitForm() {
    const start = this.formatDate(this.dateForm.value.startDate);
    const end = this.formatDate(this.dateForm.value.endDate);
    let startDate = +new Date(start);
    let endDate = +new Date(end);
    let newData = this.data.filter(date => {
      return endDate >= +new Date(date.end_date) && startDate <= +new Date(date.start_date);
    }); /** returns data within start and end date */
    this.dataSource = new MatTableDataSource<Element>(newData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'start_date':
          return new Date(item.start_date);
        case 'end_date':
          return new Date(item.end_date);
        default:
          return item[property];
      }
    };
    this.showResetButton = true; /**Reset button is visible once the filter is triggered by submitForm() */
  }

  /**Attaches to the showResetButton  to reload data after filter is performed */
  resetTable() {
    this.getData();

    // ensures date is sorting is still implemented correctly on page reload also
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'start_date':
          return new Date(item.start_date);
        case 'end_date':
          return new Date(item.end_date);
        default:
          return item[property];
      }
    };
  }
  /** helper function to format date with moment.js */
  formatDate(date) {
    return moment(date).format('L'); /**returns format date like :  08/07/2018*/
  }

  /**Handles the filter from the input field */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // Open the edit Modal
  editData(data) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        editableData: data
      }
    });
    // Edited Data 'You can get result)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

//TODO

// Make sure only a valid date is selectible on edit modal
