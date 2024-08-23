import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  value: number = 0;
  message: string = '';

  increment(): void {
    if (this.value < 20) {
      this.value++;
      this.message = '';
    } else {
      this.message = 'Досягнуто максимального значення (20)';
    }
  }

  decrement(): void {
    if (this.value > 0) {
      this.value--;
      this.message = '';
    } else {
      this.message = 'Досягнуто мінімального значення (0)';
    }
  }
}
