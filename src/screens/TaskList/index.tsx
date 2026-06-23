import {  View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../ui/Button';

type TaskListNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'TaskList'
>;

export default function TaskList() {
  const navigation = useNavigation<TaskListNavigation>();

  return (
    <View>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
}