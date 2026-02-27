import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <View style={[
      styles.card,
      task.priority === 'low' && styles.low,
      task.priority === 'medium' && styles.medium,
      task.priority === 'high' && styles.high
    ]}>
      
      <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
        {task.completed && <View style={styles.checked} />}
      </TouchableOpacity>

      <Text style={[
        styles.text,
        task.completed && styles.completedText
      ]}>
        {task.text}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.delete}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6
  },
  low: { backgroundColor: '#DCFCE7' },
  medium: { backgroundColor: '#FEF3C7' },
  high: { backgroundColor: '#FEE2E2' },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4F46E5',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#4F46E5',
    borderRadius: 3
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#111827'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6B7280'
  },
  delete: {
    fontSize: 18,
    color: '#EF4444',
    marginLeft: 10
  }
});