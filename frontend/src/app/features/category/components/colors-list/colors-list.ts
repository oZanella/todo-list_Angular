import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CategoryService } from '../../service/category.service';
import { categoryBackgroundColors } from '../constants/category-colors';

const modules = [MatDivider];

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...modules],
  template: `
    <section class="flex flex-col gap-4 w-full h-auto mb-4">
      <!-- Divisor -->
      <mat-divider class=" opacity-50" horizontal />

      <!-- Lista de Cores -->
      <div class="flex flex-wrap justify-center items-center mt-4 px-2 gap-4">
        @for (category of categories(); track category.id) {
          <span
            class="flex items-center justify-center {{
              categoryBackgroundColors[category.color]
            }} px-4 py-2 rounded-2xl w-[85px] h-[30px] text-center text-white font-semibold select-none opacity-80 hover:opacity-100">
            {{ category.name }}
          </span>
        }
      </div>
    </section>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly CategoryService = inject(CategoryService);

  public categories = this.CategoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}
