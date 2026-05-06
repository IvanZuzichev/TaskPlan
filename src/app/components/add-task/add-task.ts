import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.scss']
})
export class AddTaskComponent {
  title = signal('');
  timePriority: Task['timePriority'] = 'medium';
  taskPriority: Task['taskPriority'] = 'normal';
  
  taskAdded = output<{
    title: string;
    timePriority: Task['timePriority'];
    taskPriority: Task['taskPriority'];
  }>();
  
  addTask(): void {
    if (this.title().trim()) {
      this.taskAdded.emit({
        title: this.title().trim(),
        timePriority: this.timePriority,
        taskPriority: this.taskPriority
      });
      
      this.title.set('');
      this.timePriority = 'medium';
      this.taskPriority = 'normal';
    }
  }
}