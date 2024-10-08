import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getUser, User } from "../model/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
private apiUrl = "https://jsonplaceholder.typicode.com/todos"; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<getUser[]> {
    return this.http.get<getUser[]>(this.apiUrl);
  }

  getUser(id: number): Observable<getUser> {
    return this.http.get<getUser>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: getUser): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
