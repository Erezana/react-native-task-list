import { StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../../navigation/types";
import useTasks from "../../store/useTasks";

type TaskDetailsRoute = RouteProp<RootStackParamList, "TaskDetails">;

export default function TaskDetails() {
  const route = useRoute<TaskDetailsRoute>();
  const tasks = useTasks((state) => state.tasks);

  const task = tasks.find((task) => task.id === route.params.taskId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.text}>{task.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.text, task.status && styles.completed]}>
            {task.status ? "Completed" : "Not Completed"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Created</Text>
          <Text style={styles.text}>{task.createdDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  section: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#777",
    marginBottom: 6,
  },

  text: {
    fontSize: 16,
  },

  completed: {
    color: "green",
  },
});
