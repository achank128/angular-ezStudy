import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Class } from './../models/Class.model';
import { Injectable } from '@angular/core';
import { CLASS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  classes: Class[] = [];
  private apiUrl = 'http://localhost:5000/class';

  constructor(private http: HttpClient) {
    this.classes = CLASS;
  }

  getApiClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  getAllClass(): Class[] {
    return this.classes;
  }

  getClass(id: number): any {
    const c = this.classes.find((c) => c.id == id);
    if (!c) return { msg: 'not found class' };
    return c;
  }

  searchClass(search: any): Class[] {
    const newClasses = this.classes.filter((s) => s.className.includes(search));
    return newClasses;
  }

  addClass(c: Class): void {
    this.classes.push({ ...c, id: this.classes.length + 1 });
  }

  deleteClass(id: number | undefined): Class[] {
    this.classes = this.classes.filter((c) => c.id !== id);
    return this.classes;
  }

  updateClass(c: Class): void {
    this.classes = this.classes.map((s) => (s.id == c.id ? c : s));
  }
}
