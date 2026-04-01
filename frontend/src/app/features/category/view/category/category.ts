import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainListComponent } from '../../components/main-list/main-list';
import { ColorsListComponent } from '../../components/colors-list/colors-list';

const components = [MainListComponent, ColorsListComponent];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...components],
  template: `
    <div class="flex flex-col justify-between h-full w-full">
      <!-- main-list -->
      <app-main-list />

      <!-- colors-list -->
      <app-colors-list />
    </div>
  `,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
