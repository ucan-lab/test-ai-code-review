export interface User {
  id: number
  name: string
  email: string
  avatar: string
}

export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export type TaskStatus = 'pending' | 'completed' | 'cancelled'

export interface TaskWithStatus extends Omit<Task, 'completed'> {
  status: TaskStatus
}
