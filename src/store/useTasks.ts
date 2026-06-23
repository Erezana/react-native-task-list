import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Task } from '../types/Task';

type TasksStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
};

const useTasks = create<TasksStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useTasks;