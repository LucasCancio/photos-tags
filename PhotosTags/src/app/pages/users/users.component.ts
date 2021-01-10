import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { TableColumn } from 'src/app/components/tables/generic-table/TableColumn';
import { UserAlertComponent } from 'src/app/components/user-alert/user-alert.component';
import { User } from 'src/app/models/User/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  users: User[];

  tableColumns: TableColumn[];

  constructor(private service: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
    this.initColumns();
  }

  getUsers(): void {
    setTimeout(() => {
      this.service.getAll().subscribe((data) => {
        this.users = data;
      });
    }, 1000);
  }

  openUserModal(user: User) {
    this.dialog.open(UserAlertComponent, {
      data: user,
    });
  }

  initColumns(): void {
    this.tableColumns = [
      {
        name: 'Nome',
        dataKey: 'name',
        isSortable: true,
      },
      {
        name: 'Usuário',
        dataKey: 'username',
        isSortable: true,
      },
      {
        name: 'Email',
        dataKey: 'email',
        isSortable: true,
      },
    ];
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      this.users = this.users.sort((a: User, b: User) =>
        a[keyName].localeCompare(b[keyName])
      );
    } else if (sortParameters.direction === 'desc') {
      this.users = this.users.sort((a: User, b: User) =>
        b[keyName].localeCompare(a[keyName])
      );
    } else {
      this.getUsers();
      return this.users;
    }
  }
}
