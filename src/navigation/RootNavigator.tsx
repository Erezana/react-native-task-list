import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskList from "../screens/TaskList";
import AddTask from "../screens/AddTask";
import TaskDetails from "../screens/TaskDetails";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
}
