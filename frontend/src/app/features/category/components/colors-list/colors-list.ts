import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

const modules = [MatDivider];

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...modules],
  template: `
    <section class="flex flex-col gap-4 w-full">
      <!-- Divisor -->
      <mat-divider class=" opacity-50" horizontal />

      <!-- Lista de Cores -->
      <span>Lista de Cores</span>
    </section>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {}
