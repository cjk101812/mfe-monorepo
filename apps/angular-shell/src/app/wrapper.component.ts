import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry, Registry } from './registry';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'module-federation-web-components-wrapper',
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  @Input() elementName!: string;
  @Input() importName!: keyof Registry;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName =
      this.elementName ?? this.activatedRoute.snapshot.data['elementName'];
    const importName: keyof Registry =
      this.importName ?? this.activatedRoute.snapshot.data['importName'];

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);

    const importFn = registry[importName];
    importFn()
      .then()
      .catch((error: any) => {
        console.error(`Error loading ${elementName}: `, error);
      });
  }
}
