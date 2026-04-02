import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category';
import { MatDividerModule } from '@angular/material/divider';
import { TaskComponent } from '../../features/task/view/task/task';

const components = [CategoryComponent];

const modules = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...components, ...modules, TaskComponent],
  template: `
    <div class="h-screen flex w-full">
      <!-- Categorias -->
      <app-category class="w-1/4" />

      <!-- Divisor -->
      <mat-divider class="h-full opacity-50" vertical />

      <!-- Tarefas -->
      <app-task class="w-3/4" />
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
