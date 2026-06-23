import { useState } from 'react';
import {  StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTasks from '../../store/useTasks';
import uuid from 'react-native-uuid';
import Button from '../../ui/Button';

export default function AddTask() {
  const navigation = useNavigation();
  const addTask = useTasks((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveTask = () => {
    if (!title || !description) return;

  addTask({
  id: uuid.v4() as string,
  title,
  description,
  status: false,
  createdDate: new Date().toLocaleDateString(),
});

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />

     <Button
  title="Save"
  onPress={saveTask}
  primary={false}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
  },
});