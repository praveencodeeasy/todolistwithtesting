import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterTasksPipe } from './filter-tasks.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterTasksPipe
      ],
      providers: [
        FormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add task to tasks array on clicking Add Task button', () => {
    const task = "Shopping";
    component.addTask(task);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].text).toBe(task);
  });

  it('should change the status to true on clicking Done button', () => {
    const tasks = [
      {
        "text": "Shopping",
        "status": false
      },
      {
        "text": "Car Wash",
        "status": false
      }
    ];
    component.tasks = tasks;
    component.doneTask(0);
    expect(component.tasks[0].status).toBe(true);
  });

  it('should change the status to false on clicking Undo button', () => {
    const tasks = [
      {
        "text": "Shopping",
        "status": false
      },
      {
        "text": "Car Wash",
        "status": true
      }
    ];
    component.tasks = tasks;
    component.undoTask(1);
    expect(component.tasks[0].status).toBe(false);
  });

  it('should delete the task on clicking Undo button', () => {
    const tasks = [
      {
        "text": "Shopping",
        "status": false
      },
      {
        "text": "Car Wash",
        "status": true
      }
    ];

    const deletedTask = {
      "text": "Car Wash",
      "status": true
    };

    component.tasks = tasks;
    component.deleteTask(1);
    expect(component.tasks).not.toContain(deletedTask);
  });
});
