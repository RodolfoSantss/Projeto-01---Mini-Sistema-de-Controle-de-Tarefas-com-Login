import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Filter({ setFilter }) {
  return (
    <View style={styles.container}>
      <FilterButton text="Todas" onPress={() => setFilter('all')} />
      <FilterButton text="Pendentes" onPress={() => setFilter('pending')} />
      <FilterButton text="Concluídas" onPress={() => setFilter('completed')} />
    </View>
  );
}

function FilterButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#E0E7FF',
    borderRadius: 20
  },
  text: {
    color: '#3730A3',
    fontWeight: 'bold'
  }
});