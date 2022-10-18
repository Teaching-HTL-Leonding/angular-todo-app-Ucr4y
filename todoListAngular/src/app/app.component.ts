import { Component } from '@angular/core';

class Todo {
  constructor(
    public description: string,
    public isDone: boolean,
    public person: string = '',
    public edit: boolean = false
  ) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoListAngular';
  public rawTodos: Todo[] = [];
  public newTodos: Todo[] = [];
  public filterForDone: string = '1';
  public searchPersonRaw: string = '';
  public newDesc!: string;
  public newPerson!: string;
  public newDone!: boolean;

  constructor() {
    this.rawTodos = [
      new Todo('Do German Homework', false, 'Robin'),
      new Todo('Talk with dad', true, 'Thomas'),
      new Todo('Clean up room', false),
    ];
    this.newTodos = this.rawTodos;
  }
  public removeTodo(indexToRemove: number): void {
    delete this.newTodos[indexToRemove];
    this.newTodos = this.newTodos.filter((todo) => todo);
  }
  public filterDone(): void {
    for (let element of this.rawTodos) {
      if (this.filterForDone === '2') {
        this.newTodos = this.rawTodos.filter((todo) => !todo.isDone);
      } else if (this.filterForDone === '3') {
        this.newTodos = this.rawTodos.filter((todo) => todo.isDone);
      } else {
        this.newTodos = this.rawTodos.filter((todo) => todo);
      }
    }
  }
  public searchPerson(): void {
    for (let element of this.rawTodos) {
      this.newTodos = this.rawTodos.filter((todo) =>
        todo.person.includes(this.searchPersonRaw)
      );
    }
  }
  public addTodo(): void {
    this.rawTodos.push(new Todo(this.newDesc, this.newDone, this.newPerson));
    this.newDesc = '';
    this.newDone = false;
    this.newPerson = '';
  }
}
