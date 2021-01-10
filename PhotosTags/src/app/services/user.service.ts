import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User/User';
import { map } from 'rxjs/operators';

const userUrl = environment.apiUrl + 'users/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(userUrl).pipe(
      map((users) => {
        users.forEach(
          (user) =>
            (user.imageUrl = `https://placeimg.com/640/480/animals?${user.name}`)
        );
        return users;
      })
    );
  }
}
