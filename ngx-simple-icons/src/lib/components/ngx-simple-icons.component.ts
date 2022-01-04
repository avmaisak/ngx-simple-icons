import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IconNameEnum } from '../enum';
import { IconsProvider } from "../icon.provider";
import { IconName } from '../types';

@Component({
  selector: 'si, *[si]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxSimpleIconsComponent implements OnChanges {
  /** Icon name. */
  @Input()
  public icon!: IconNameEnum | IconName;

  @Input()
  public width: number = 24;

  @Input()
  public height: number = 24;

  constructor(
    private elem: ElementRef,
    private readonly changeDetector: ChangeDetectorRef,
    @Inject(IconsProvider) private readonly iconProvider: IconsProvider,
  ) {
  }

  /**
   * OnChanges event.
   *
   * @param changes SimpleChanges
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.iconProvider as any as object[]));
    let svg = `${icons[(changes['icon'].currentValue)]}` || '';

    if (svg === 'undefined') {
      console.error(`icon '${this.icon}' is not provided in module. Use pick() method to add icon.`);
      return;
    }

    svg = svg.replace('svg', `svg width=${this.width}px height=${this.height}px`)

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}

