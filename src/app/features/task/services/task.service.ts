import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/component';
import { environment } from '../../../../environments/environment.prod';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly _httpClient = inject(HttpClient);

  public tasks = signal<Task[]>([]);

  public numberOfTasks = computed(() => this.tasks().length);

  public readonly _apiUrl = environment.apiUrl;

  public getTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(`${this._apiUrl}/tasks`).pipe(
      tap(tasks => {
        const sortedTasks = this.getSortedTasks(tasks);
        this.tasks.set(sortedTasks);
      })
    );
  }

  public createTask(task: Partial<Task>): Observable<Task> {
    return this._httpClient.post<Task>(`${this._apiUrl}/tasks`, task);
  }

  public deleteTask(taskId: string): Observable<Task> {
    return this._httpClient.delete<Task>(`${this._apiUrl}/tasks/${taskId}`);
  }

  public deleteATaskFromTheTasksList(taskId: string): void {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  public insertATaskInTheTasksList(newTask: Task): void {
    const updateTasks = [...this.tasks(), newTask];

    const sortedTasks = this.getSortedTasks(updateTasks);

    this.tasks.set(sortedTasks);
  }

  public updateIsCompletedStatus(
    taskId: string,
    isCompleted: boolean
  ): Observable<Task> {
    return this._httpClient.patch<Task>(`${this._apiUrl}/tasks/${taskId}`, {
      isCompleted,
    });
  }

  public updateATaskInTheTasksList(updatedTask: Task): void {
    this.tasks.update(tasks => {
      const allTasksWithUpdatedTaskRemoved = tasks.filter(
        task => task.id !== updatedTask.id
      );

      const updatedTasksList = [...allTasksWithUpdatedTaskRemoved, updatedTask];
      return this.getSortedTasks(updatedTasksList);
    });
  }

  public updateTask(updatedTask: Task): Observable<Task> {
    return this._httpClient.put<Task>(
      `${this._apiUrl}/tasks/${updatedTask.id}`,
      updatedTask
    );
  }

  public getSortedTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
