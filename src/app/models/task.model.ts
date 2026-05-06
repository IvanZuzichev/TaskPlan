export interface Task {
  id: number;
  title: string;
  timePriority: 'fast' | 'medium' | 'long';
  taskPriority: 'urgent' | 'normal' | 'delayed';
  createdAt: Date;
}

export const timePriorityColors = {
  fast: '#4caf50',
  medium: '#ffc107',
  long: '#f44336'
};

export const taskPriorityColors = {
  urgent: '#f44336',
  normal: '#ffc107',
  delayed: '#4caf50'
};