import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterEvent} from '@angular/router';
import { Breadcrumb } from './breadCrumb'
import { BreadcrumbProvider } from '../../providers/breadcrumb'
import {map, filter} from "rxjs/operators";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass'],
  encapsulation: ViewEncapsulation.None
  /*
   None     - No Shadow DOM at all. Therefore, also no style encapsulation
   Emulated - No Shadow DOM but style encapsulation emulation (default)
   Native   - Native Shadow DOM with all it’s goodness
   */
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private routerSubscription: Subscription;

  //Build your breadcrumb starting with the root route of your current activated route
  constructor(private router: Router, private breadcrumbProvider: BreadcrumbProvider) {
    this.routerSubscription = this.router.events
        .pipe(
            filter((event): event is ActivationEnd => event instanceof ActivationEnd),
            map((val: ActivationEnd)=> val.snapshot.data)
        )
        .subscribe(data => {
          if (data.breadcrumbs) {
            this.breadcrumbs = Object.assign([], data.breadcrumbs);
          } else {
            /**
             * @param data.defaultBreadcrumbs
             */
            if (this.breadcrumbs.length <= 0 && data.defaultBreadcrumbs) {
              this.breadcrumbs = Object.assign([], data.defaultBreadcrumbs);
            }
          }
          console.log('this.breadcrumbs', this.breadcrumbs);
        });

    this.breadcrumbProvider._addItem.subscribe(breadcrumb => {
      console.log('_addItem: ', breadcrumb);
      return this.breadcrumbs.push(breadcrumb)
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
    // this.breadcrumbProvider._addItem.unsubscribe();
  }
}
