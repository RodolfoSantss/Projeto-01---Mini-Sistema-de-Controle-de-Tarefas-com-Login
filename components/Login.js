import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (username === 'admin' && password === '123') {
      onLogin();
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>

      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F4F6F8'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});