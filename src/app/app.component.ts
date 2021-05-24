import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  taskstatus = "all";
  tasks = [];

  addTask(task) {
    var taskObj = { "text": task, "status": false };
    this.tasks.push(taskObj)
  }
  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
  doneTask(index) {
    this.tasks[index].status = true;
  }
  undoTask(index) {
    this.tasks[index].status = false;
  }
}
