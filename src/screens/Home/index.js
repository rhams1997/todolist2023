import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { MyButton } from './components/MyButton';

import { styles } from './styles'
export  function Home() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask(){
    setTasks(oldState => [...oldState, newTask]);

    console.log(tasks);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Olá, Rafael
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite sua tarefa...'
        placeholderTextColor='#555555'
        onChangeText={setNewTask}
      />
      
      <MyButton 
        onPress={handleAddNewTask}
        activeOpacity={0.7}//Efeito de toque
        title="Adicionar tarefa"
      />

      <Text style={styles.textTask}>
        Minhas Tarefas
      </Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={( {item} ) =>(
          <TouchableOpacity 
            style={styles.buttonTask}
            >
              <Text style={styles.textTask}
              >
                {item}
              </Text>
          </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  );
}

//// TextInput para entrada de texto