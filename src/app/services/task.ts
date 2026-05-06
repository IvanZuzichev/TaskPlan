import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>(this.loadTasks());
  readonly tasks = this.tasksSignal.asReadonly();

  getAllTasks(): Task[] {
    return this.tasksSignal();
  }

  addTask(title: string, timePriority: Task['timePriority'], taskPriority: Task['taskPriority']): void {
    const newTask: Task = {
      id: Date.now(),
      title: title.slice(0, 40),
      timePriority,
      taskPriority,
      createdAt: new Date()
    };
    
    const currentTasks = this.tasksSignal();
    this.tasksSignal.set([...currentTasks, newTask]);
    this.saveTasks();
  }

  deleteTask(id: number): void {
    const updatedTasks = this.tasksSignal().filter(task => task.id !== id);
    this.tasksSignal.set(updatedTasks);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasksSignal()));
  }

  private loadTasks(): Task[] {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  }
}