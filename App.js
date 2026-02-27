import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Login from './components/Login';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [priority, setPriority] = useState('medium');

  function addTask() {
    if (!newTask.trim()) return;

    const isDuplicate = tasks.some(
      task => task.text.toLowerCase() === newTask.toLowerCase()
    );

    if (isDuplicate) {
      alert('Tarefa duplicada!');
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        priority
      }
    ]);

    setNewTask('');
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter(task => !task.completed));
  }

  function handleLogout() {
    setIsLogged(false);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  
  if (!isLogged) {
    return <Login onLogin={() => setIsLogged(true)} />;
  }

 
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Minhas Tarefas</Text>

      <TextInput
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />


      <View style={styles.priorityRow}>
        <Text style={styles.label}>Prioridade</Text>

        <View style={styles.priorityOptions}>
          <PriorityOption
            label="Baixa"
            selected={priority === 'low'}
            color="#22C55E"
            onPress={() => setPriority('low')}
          />
          <PriorityOption
            label="Média"
            selected={priority === 'medium'}
            color="#F59E0B"
            onPress={() => setPriority('medium')}
          />
          <PriorityOption
            label="Alta"
            selected={priority === 'high'}
            color="#EF4444"
            onPress={() => setPriority('high')}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Adicionar tarefa</Text>
      </TouchableOpacity>

      <Filter setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onRemove={removeTask}
        onClearCompleted={clearCompleted}
      />
    </View>
  );
}


function PriorityOption({ label, selected, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.priorityOption,
        selected && { backgroundColor: `${color}33`, borderColor: color }
      ]}
    >
      <View
        style={[
          styles.checkbox,
          selected && { backgroundColor: color, borderColor: color }
        ]}
      />
      <Text style={styles.priorityText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20
  },
  logout: {
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  logoutText: {
    color: '#EF4444',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#111827'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },
  addButton: {
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111827'
  },
  priorityRow: {
    marginBottom: 12
  },
  priorityOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priorityOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  priorityText: {
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#111827'
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9CA3AF'
  }
});