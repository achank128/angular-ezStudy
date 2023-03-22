import { STUDENT } from '../mock-data';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [];
  constructor() {
    this.students = STUDENT;
    //localStorage.setItem('student', JSON.stringify(STUDENT));
    //this.students = JSON.parse(localStorage.getItem('student') || '');
  }

  getStudents(): Observable<Student[]> {
    const students = JSON.parse(localStorage.getItem('student') || '');
    return of(students);
  }

  getAllStudents(): Student[] {
    return this.students;
  }

  searchStudent(search: any): Student[] {
    const newStudents = this.students.filter((s) => s.name.includes(search));
    return newStudents;
  }

  getStudent(id: number): any {
    const student = this.students.find((s) => s.id == id);
    if (!student) return { msg: 'not found student' };
    return student;
  }

  addStudent(student: Student): void {
    this.students.push({ ...student, id: this.students.length + 1 });
  }

  deleteStudent(id: number | undefined): Student[] {
    this.students = this.students.filter((student) => student.id !== id);
    return this.students;
  }

  updateStudent(student: Student): void {
    this.students = this.students.map((s) =>
      s.id == student.id ? student : s
    );
  }
}
