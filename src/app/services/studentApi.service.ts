import { Student } from './../models/Student.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {
  private apiUrl = 'http://localhost:5000/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, httpOptions);
  }

  deleteStudent(Student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${Student.id}`;
    return this.http.delete<Student>(url);
  }

  updateStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<Student>(url, student, httpOptions);
  }
}
