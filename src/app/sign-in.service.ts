// Name: Justin Barlowe
// File: sign-in.service.ts
// Description: Sign-in service for the GPA calculator app.
// Date: 11/28/2023

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  // Array of student IDs
  studentIds!: Array<number>

  // Constructor for sign-in service
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
  }

  // Validate student ID
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId)
  }
}
