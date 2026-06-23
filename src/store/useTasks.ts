import { create } from 'zustand';
import { Task } from '../types/Task';

type TasksStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
};

const useTasks = create<TasksStore>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTaskStatus: (id) =>
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: !task.status,
          }
        : task
    ),
  })),
    deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTasks;