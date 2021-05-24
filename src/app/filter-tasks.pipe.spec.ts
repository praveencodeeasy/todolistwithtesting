import { FilterTasksPipe } from './filter-tasks.pipe';

describe('FilterTasksPipe', () => {
  let pipe: FilterTasksPipe;
  beforeEach(() => {
    pipe = new FilterTasksPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return completed tasks if the complete filter is selected', () => {
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
    const completedTasks = [
      {
        "text": "Car Wash",
        "status": true
      }
    ];
    expect(pipe.transform(tasks, 'complete')).toEqual(completedTasks);
  });

  it('should return incomplete tasks if the incomplete filter is selected', () => {
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
    const incompleteTasks = [
      {
        "text": "Shopping",
        "status": false
      }
    ];
    expect(pipe.transform(tasks, 'incomplete')).toEqual(incompleteTasks);
  });

  it('should return all tasks if the all filter is selected', () => {
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
    expect(pipe.transform(tasks, 'all')).toEqual(tasks);
  });

});
