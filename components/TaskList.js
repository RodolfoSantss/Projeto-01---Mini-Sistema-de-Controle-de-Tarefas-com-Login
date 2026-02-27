import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onRemove, onClearCompleted }) {
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        Concluídas: {completedCount}
      </Text>

      {tasks.length === 0 && (
        <Text style={styles.empty}>Nenhuma tarefa por aqui 👀</Text>
      )}

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => onToggle(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        )}
      />

      {completedCount > 0 && (
        <Button title="Limpar tarefas concluídas" onPress={onClearCompleted} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  counter: {
    marginBottom: 8,
    fontWeight: 'bold'
  },
  empty: {
    textAlign: 'center',
    color: '#6B7280',
    marginVertical: 20
  }
});