import { NgSvgConfig } from './ngSvgIcon.config';
import { NgSvgIconService } from './ngSvgIcon.service';
import { Input, Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, Inject } from '@angular/core';

@Component({
  selector: 'ng-svg-icon',
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.viewBox]="viewBox" [attr.fill]="color" [attr.width]="size" [attr.height]="size"
              #svgContainer>
            </svg>`
})
export class NgSvgIconComponent implements AfterViewChecked {

  @ViewChild('svgContainer') svgContainer: ElementRef;

  private shape: any;

  @Input()
  name = 'help';

  @Input()
  size: any;

  @Input()
  viewBox: string;

  @Input()
  color: string;

  constructor(public ngSvgIconService: NgSvgIconService, @Inject('NgSvgConfig') private ngSvgConfig: NgSvgConfig) {
    this.size = this.size || this.ngSvgConfig.defaultSize || 24;
    this.viewBox = this.viewBox || this.ngSvgConfig.defaultViewBox || '0 0 24 24';
    this.color = this.color || this.ngSvgConfig.defaultColor || '#fff';
  }

  ngAfterViewChecked() {
    this.shape = this.ngSvgIconService.getShape(this.name);
    this.svgContainer.nativeElement.innerHTML = this.shape;
  }
}
