import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainListComponent } from '../../components/main-list/main-list';
import { ColorsListComponent } from '../../components/colors-list/colors-list';
import { CategoryService } from '../../service/category.service';
import { AsyncPipe } from '@angular/common';

const components = [MainListComponent, ColorsListComponent];

const pipe = [AsyncPipe];
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...components, ...pipe],
  template: `
    <div class="flex flex-col justify-between h-full w-full">
      @if (categories$ | async) {
        <!-- main-list -->
        <app-main-list />

        <!-- colors-list -->
        <app-colors-list />
      }
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  private readonly CategoryService = inject(CategoryService);

  public categories$ = this.CategoryService.getCategories();
}
