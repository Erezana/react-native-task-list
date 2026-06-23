import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskList from '../screens/TaskList';
import AddTask from '../screens/AddTask';
import TaskDetails from '../screens/TaskDetails';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskList"
        component={TaskList}
      />

      <Stack.Screen
        name="AddTask"
        component={AddTask}
      />

      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
      />
    </Stack.Navigator>
  );
}