import { useState } from 'react';
import {  StyleSheet, TextInput, View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTasks from '../../store/useTasks';
import uuid from 'react-native-uuid';
import Button from '../../ui/Button';

export default function AddTask() {
  const navigation = useNavigation();
  const addTask = useTasks((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const saveTask = () => {
    if (!title || !description) {
      setError('Please fill the field.');
      return;
      }

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
        {!title.trim() && error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      {!description.trim() && error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}

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
  error: {
  color: 'red',
  fontSize: 12,
  marginTop: -8,
},
});