import { ClassService } from './../../services/class.service';
import { FormControl } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from './../../models/Class.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  classes: Class[] = [];
  displayedColumns: string[] = ['id', 'className', 'parent', 'actions'];
  dataSource = new MatTableDataSource<Class>();
  search = new FormControl();

  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classes = this.classService.getAllClass();
  }

  ngAfterViewInit(): void {
    this.setDataView();
  }

  setDataView() {
    this.dataSource = new MatTableDataSource<Class>(this.classes);
    this.dataSource.paginator = this.paginator;
  }

  SearchClass() {
    this.classes = this.classService.searchClass(this.search.value);
    this.setDataView();
  }

  DeleteClass(c: Class) {
    this.classes = this.classService.deleteClass(c.id);
    this.setDataView();
  }
}
