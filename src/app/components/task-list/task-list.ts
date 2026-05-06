import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.scss']
})
export class TaskListComponent {
  tasks = input<Task[]>([]);
  deleteTask = output<number>();
  
  onDelete(id: number): void {
    this.deleteTask.emit(id);
  }
}