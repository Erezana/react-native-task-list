import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/types';
import useTasks from '../../store/useTasks';

type TaskDetailsRoute = RouteProp<
  RootStackParamList,
  'TaskDetails'
>;

export default function TaskDetails() {
  const route = useRoute<TaskDetailsRoute>();
  const tasks = useTasks((state) => state.tasks);

  const task = tasks.find(
    (task) => task.id === route.params.taskId
  );

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task.title}
      </Text>

      <Text style={styles.label}>
        Description
      </Text>

      <Text style={styles.text}>
        {task.description}
      </Text>

      <Text style={styles.label}>
        Status
      </Text>

      <Text style={styles.text}>
        {task.status ? 'Completed' : 'Not Completed'}
      </Text>

      <Text style={styles.label}>
        Created
      </Text>

      <Text style={styles.text}>
        {task.createdDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    marginTop: 4,
    fontSize: 16,
  },
});