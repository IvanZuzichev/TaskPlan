import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task';
import { AddTaskComponent } from './components/add-task/add-task';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TaskListComponent],
  templateUrl: './app.html', 
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = 'Заметки с приоритетом по времени';
  protected taskService = inject(TaskService);
  
  handleTaskAdded(data: { title: string; timePriority: any; taskPriority: any }): void {
    this.taskService.addTask(data.title, data.timePriority, data.taskPriority);
  }
  
  handleDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}