import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navmenu.component.scss'],
})
export class NavmenuComponent implements OnInit {
  constructor() {}

  items: NbMenuItem[] = [
    {
      title: 'Login',
      link: '/login',
    },
    {
      title: 'To-Do List',
      link: '/todolist',
    },
  ];

  ngOnInit(): void {}
}
