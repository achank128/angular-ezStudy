import { ClassService } from './../../services/class.service';
import { StudentService } from './../../services/student.service';
import { Student } from '../../models/Student.model';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Class } from './../../models/Class.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  id!: number;
  title: string = 'Add Student';
  startDate = new Date(2000, 0, 1);
  studentForm = this.formBuilder.group({
    name: [],
    birthDate: [],
    class: [],
  });

  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit Student';
      const student = this.studentService.getStudent(this.id);
      this.studentForm = this.formBuilder.group({
        name: [student.name],
        birthDate: [student.birthDate],
        class: [student.class.toString()],
      });
      this.startDate = student.birthDate;
    }
  }

  getAllClass(): Class[] {
    return this.classService.getAllClass();
    // let c: Class[] = [];
    // this.classService.getApiClass().subscribe((s) => (c = s));
    // return c;
  }

  onSubmit() {
    if (this.studentForm.status == 'VALID') {
      const newStudent: Student = {
        id: this.id,
        name: this.studentForm.value.name!,
        birthDate: this.studentForm.value.birthDate!,
        class: this.studentForm.value.class!,
      };
      if (this.id) {
        this.studentService.updateStudent(newStudent);
      } else {
        this.studentService.addStudent(newStudent);
      }
      this.router.navigate(['/']);
    }
  }
}
