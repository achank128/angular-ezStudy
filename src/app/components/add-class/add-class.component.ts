import { ClassService } from './../../services/class.service';
import { Class } from './../../models/Class.model';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss'],
})
export class AddClassComponent {
  id!: number;
  title: string = 'Add Class';
  startDate = new Date(2000, 0, 1);
  classForm = this.formBuilder.group({
    className: [],
    parent: [],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit Class';
      const c = this.classService.getClass(this.id);
      this.classForm = this.formBuilder.group({
        className: [c.className],
        parent: [c.parent?.toString()],
      });
    }
  }

  getAllClass(): Class[] {
    return this.classService.getAllClass();
  }

  onSubmit() {
    if (this.classForm.status == 'VALID') {
      const newClass: Class = {
        id: this.id,
        className: this.classForm.value.className!,
      };
      if (this.id) {
        this.classService.updateClass(newClass);
      } else {
        this.classService.addClass(newClass);
      }
      this.router.navigate(['/class']);
    }
  }
}
