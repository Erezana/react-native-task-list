import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/types';
import useTasks from '../../store/useTasks';
import Button from '../../ui/Button';
import TaskBox from '../../ui/TaskBox';
import { useEffect, useState } from 'react';
import { fetchFact } from '../../api/factApi';
import { Ionicons } from '@expo/vector-icons';

type TaskListNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'TaskList'
>;


export default function TaskList() {
  const [fact, setFact] = useState('');
  const navigation = useNavigation<TaskListNavigation>();
  const tasks = useTasks((state) => state.tasks);

  useEffect(() => {
  const loadFact = async () => {
    try {
      const data = await fetchFact();
      setFact(data.text);
    } catch (error) {
      console.log(error);
    }
  };

  loadFact();
}, []);
  return (
    <View>
      <View style={styles.factBox}>
        <View style={styles.factHeader}>
           <Ionicons
          name="earth"
          size={24}
            color="green"
          />
            <Text style={styles.factTitle}>
            Did You Know?
            </Text>
        </View>
        <Text>
          {fact}
        </Text>
      </View>
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
    padding: 16,
  },
  factBox: {
  margin: 16,
  padding: 16,
  backgroundColor: '#F5F5F5',
},

factHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
},

factTitle: {
  fontSize: 16,
  fontWeight: '600',
  marginLeft: 8,
  color: '#222',
},
});