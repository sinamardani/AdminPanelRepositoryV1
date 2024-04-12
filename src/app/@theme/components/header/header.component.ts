import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbMediaBreakpointsService,
  NbMenuService,
  NbSearchModule,
  NbSelectModule,
  NbSidebarService,
  NbThemeService,
  NbUserModule,
} from '@nebular/theme';
import { Subject, map, takeUntil } from 'rxjs';
import { UserService } from '../../../@core/mock/users.service';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { NbSecurityModule } from '@nebular/security';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [UserService],
  imports: [
    CommonModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbSecurityModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserService,
    // private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService
  ) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => (this.user = users.nick));

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
