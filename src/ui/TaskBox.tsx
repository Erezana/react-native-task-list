import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Task } from "../types/Task";
import useTasks from "../store/useTasks";
import Checkbox from "./Checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

type TaskBoxProps = {
  task: Task;
};

export default function TaskBox({ task }: TaskBoxProps) {
  const navigation = useNavigation<Navigation>();
  const updateTaskStatus = useTasks((state) => state.updateTaskStatus);
  const deleteTask = useTasks((state) => state.deleteTask);

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("TaskDetails", {
          taskId: task.id,
        })
      }
    >
      <View style={styles.header}>
        <Text style={[styles.title, task.status && styles.completedTitle]}>
          {task.title}
        </Text>

        <View style={styles.actions}>
          <Checkbox
            checked={task.status}
            onPress={() => updateTaskStatus(task.id)}
          />

          <Pressable
            onPress={() => deleteTask(task.id)}
            style={styles.deleteButton}
          >
            <Ionicons name="trash-outline" size={22} color="red" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  deleteButton: {
    padding: 4,
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: "#777",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#6f6d6dff",
  },
});
