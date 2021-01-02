import { Component, Input, OnInit, HostListener, DoCheck, AfterContentInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
// import { AuthService } from '../services/auth.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'main-navigation-layout',
  templateUrl: './main-navigation-layout.component.html',
  styleUrls: ['./main-navigation-layout.component.scss']
})
export class MainNavigationLayoutComponent implements OnInit  {
  public isMobile: boolean;
  public innerWidth: any;
  public mobile: boolean;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
  );

  public scrollEvent: any;
  public contentMargin = 240;
  public opened: any = false;
  public isMenuInitOpen: boolean;
  isMenuOpen: boolean;


  constructor(private breakpointObserver: BreakpointObserver,
              // public auth: AuthService,
              private router: Router) {}

  get isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }


  // ************************************************************************************************************************
  // * NG EVENTS
  // ************************************************************************************************************************

  ngOnInit() {
  }


  // ************************************************************************************************************************
  // * COMPONENT FUNCTIONS
  // ************************************************************************************************************************

  onToggleMenu() {
    this.isMenuOpen = true;
  }

  onResize(event) {
    if (event.target.innerWidth <= 767) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}

