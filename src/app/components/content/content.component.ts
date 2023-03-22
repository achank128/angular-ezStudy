import { StudentApiService } from './../../services/studentApi.service';
import { ClassService } from './../../services/class.service';
import { FormControl } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../models/Student.model';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  students: Student[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'class', 'actions'];
  dataSource = new MatTableDataSource<Student>();
  search = new FormControl();

  constructor(
    private studentService: StudentService,
    private classService: ClassService
  ) {}

  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

  ngAfterViewInit() {
    this.setDataView();
  }

  DeleteStudent(student: Student) {
    this.students = this.studentService.deleteStudent(student.id);
    this.setDataView();
  }

  SearchStudent() {
    this.students = this.studentService.searchStudent(this.search.value);
    this.setDataView();
  }

  setDataView() {
    this.dataSource = new MatTableDataSource<Student>(this.students);
    this.dataSource.paginator = this.paginator;
  }

  getClass(id: number) {
    const c = this.classService.getClass(id);
    return c.className;
  }

  getAge = (birthdate: Date): Number => {
    const diff_ms = Date.now() - birthdate.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
}
