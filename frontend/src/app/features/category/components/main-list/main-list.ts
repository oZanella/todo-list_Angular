import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-list',
  standalone: true,
  imports: [],
  template: `<p>main-list works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainListComponent {}
