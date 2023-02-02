import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navmenu.component.scss'],
})
export class NavmenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  items: NbMenuItem[] = [
    {
      title: 'Account',
      link: '/login',
    },
    {
      title: 'To-Do List',
      link: '/todolist',
    },
  ];

  ngOnInit(): void {}
}
