import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, timePriorityColors, taskPriorityColors } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrls: ['./task-card.scss']
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;
  @Output() delete = new EventEmitter<number>();
  
  getTimeBorderColor(): string {
    return timePriorityColors[this.task.timePriority];
  }
  
  getTaskBorderColor(): string {
    return taskPriorityColors[this.task.taskPriority];
  }
  
  getTimeBadgeColor(): string {
    return timePriorityColors[this.task.timePriority];
  }
  
  getTaskBadgeColor(): string {
    return taskPriorityColors[this.task.taskPriority];
  }
  
  getTimeLabel(): string {
    const labels = {
      fast: 'Быстро',
      medium: 'Средне',
      long: 'Долго'
    };
    return labels[this.task.timePriority];
  }
  
  getTaskLabel(): string {
    const labels = {
      urgent: 'Срочно',
      normal: 'По очереди',
      delayed: 'Не срочно'
    };
    return labels[this.task.taskPriority];
  }
  
  onDelete(): void {
    this.delete.emit(this.task.id);
  }
}