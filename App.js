import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

const App = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/items/logo.png')}
      />

      <TextInput
        style={styles.textInput}
        placeholderTextColor="grey"
        placeholder="name"
        onChangeText={(value) => setName(value.toString())}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor="grey"
        placeholder="password"
        secureTextEntry
        onChangeText={(value) => setPassword(value.toString())}
        value={password}
      />

      <Text style={{ marginTop: 150, color: 'grey' }}>
        diBasch test for skyweb
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    marginVertical: 20,
    width: '80%',
    height: 50,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
})

export default App
