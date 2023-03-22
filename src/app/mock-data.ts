import { Class } from './models/Class.model';
import { Student } from './models/Student.model';

export const STUDENT: Student[] = [
  {
    id: 1,
    name: 'Nguyen Khac Chang',
    birthDate: new Date(2002, 4, 24),
    class: 5,
  },
  {
    id: 2,
    name: 'Tran Cong Dai',
    birthDate: new Date(2000, 6, 4),
    class: 7,
  },
  {
    id: 3,
    name: 'Le Anh Tuan',
    birthDate: new Date(2002, 11, 4),
    class: 4,
  },
  {
    id: 4,
    name: 'Bui Minh Duc',
    birthDate: new Date(2001, 3, 4),
    class: 4,
  },
  {
    id: 5,
    name: 'Nguyen Duy Viet',
    birthDate: new Date(2000, 9, 4),
    class: 6,
  },
  {
    id: 9,
    name: 'Hoang Nhat Tan',
    birthDate: new Date(2001, 11, 4),
    class: 5,
  },
  {
    id: 6,
    name: 'Nguyen Viet Tien',
    birthDate: new Date(2002, 11, 4),
    class: 4,
  },
  {
    id: 7,
    name: 'Tran Duy Chinh',
    birthDate: new Date(2002, 8, 4),
    class: 7,
  },
  {
    id: 8,
    name: 'Cao Quang Thang',
    birthDate: new Date(2003, 1, 4),
    class: 5,
  },
];

export const CLASS: Class[] = [
  {
    id: 1,
    className: 'Lớp 10',
  },
  {
    id: 2,
    className: 'Lớp 11',
  },
  {
    id: 3,
    className: 'Lớp 12',
  },
  {
    id: 4,
    className: 'Lớp 11A1',
    parent: 2,
  },
  {
    id: 5,
    className: 'Lớp 12A3',
    parent: 3,
  },
  {
    id: 6,
    className: 'Lớp 10A6',
    parent: 1,
  },
  {
    id: 7,
    className: 'Lớp 11A2',
    parent: 2,
  },
  {
    id: 4,
    className: 'Lớp 12A8',
    parent: 3,
  },
];
