import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'angular-module-root',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }
}
