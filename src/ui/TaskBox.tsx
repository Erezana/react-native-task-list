import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../types/Task';
import useTasks from '../store/useTasks';
import Checkbox from './Checkbox';

type TextBoxProps = {
task: Task;
};

export default function TextBox({ task }: TextBoxProps) {
    const updateTaskStatus = useTasks(
    (state) => state.updateTaskStatus
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task.title}
      </Text>

      <Text>
        {task.description}
      </Text>

      <Text style={styles.date}>
        {task.createdDate}
      </Text>
      <Checkbox
        checked={task.status}
        onPress={() => updateTaskStatus(task.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: '#777',
  },
});