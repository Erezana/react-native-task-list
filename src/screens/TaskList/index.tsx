import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/types';
import useTasks from '../../store/useTasks';
import Button from '../../ui/Button';
import TaskBox from '../../ui/TaskBox';

type TaskListNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'TaskList'
>;

export default function TaskList() {
  const navigation = useNavigation<TaskListNavigation>();
  const tasks = useTasks((state) => state.tasks);

  return (
    <View>
      {tasks.length === 0 ? (
        <Text style={styles.noTaskText}>
          No tasks yet.
        </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
           <TaskBox task={item} />
          )}
        />
      )}

      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noTaskText: {
    marginHorizontal: 10,
    paddingVertical: 14,
  },
});