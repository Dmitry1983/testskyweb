import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import ROUTE from '../constants/route'

export const Screen00 = ({ navigation }) => {
  const goToNextScreen = () => {
    navigation.navigate(ROUTE.SCREEN01)
  }
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/items/logo.png')}
          resizeMode="contain"
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="name"
          selectionColor="black"
          onChangeText={(value) => setName(value.toString())}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="password"
          selectionColor="black"
          secureTextEntry
          onChangeText={(value) => setPassword(value.toString())}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToNextScreen()}
        >
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.text}>diBasch test for skyweb</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textInput: {
    marginVertical: 20,
    width: '80%',
    height: 50,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  text: {
    marginTop: 150,
    color: 'grey',
  },
  button: {
    marginVertical: 20,
    width: '80%',
    height: 50,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: 'black',
  },
})
