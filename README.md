# React Native Task List

A task management application built with React Native, Expo, TypeScript, Zustand, and React Navigation.

## Features

- Add new tasks
- View the list of tasks
- View task details
- Mark tasks as completed or not completed
- Delete tasks
- Search tasks by title
- Filter tasks by status (All, Completed, Not Completed)
- Fetch a random fact from a public API
- Persist tasks locally using AsyncStorage
- Reusable UI components

## Technologies

- React Native
- Expo
- TypeScript
- Zustand
- React Navigation
- AsyncStorage

## Installation

Clone the repository:

```bash
git clone https://github.com/Erezana/react-native-task-list.git
```

Navigate to the project:

```bash
cd react-native-task-list
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npx expo start
```

## Project Structure

```text
src/
├── api/
├── navigation/
├── screens/
├── store/
├── types/
├── ui/
└── components/
```

## State Management

The application uses Zustand for state management.

Tasks can be:

- Added
- Deleted
- Marked as completed

## Local Storage

Tasks are persisted locally using AsyncStorage. This allows users to keep their tasks even after closing or restarting the application.

## Code Quality

- TypeScript was used throughout the project.
- Prettier formatting was applied across the entire application.
- Reusable UI components were created where appropriate.

## Public API

The application fetches a random fact from a public API and displays it on the home screen.

## Author

Erezana Berisha
