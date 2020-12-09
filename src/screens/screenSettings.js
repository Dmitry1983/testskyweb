import React, { useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { changeUsername, changePassword } from '../actions'

export const ScreenSettings = ({ navigation }) => {
  const { username, password } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

  const handlerUsername = useCallback(
    (name) => {
      dispatch(changeUsername(name))
    },
    [dispatch]
  )

  const handlerPassword = useCallback(
    (pass) => {
      dispatch(changePassword(pass))
    },
    [dispatch]
  )

  const goToNextScreen = () => {
    if (username !== '' && password !== '') {
      navigation.navigate('SCREEN00')
    } else {
      Alert.alert('Введите логин(test) и пароль(test)')
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/items/logo.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20, marginVertical: 40 }}>
          Settings Screen
        </Text>

        <Text style={{ fontSize: 16, marginVertical: 20, textAlign: 'center' }}>
          Enter new username and{'\n'}password for Sign In
        </Text>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="username"
          selectionColor="black"
          value={username}
          onChangeText={(text) => handlerUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="password"
          selectionColor="black"
          // secureTextEntry
          value={password}
          onChangeText={(text) => handlerPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToNextScreen()}
        >
          <Text style={styles.textButton}>Log out</Text>
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
    width: 100,
    height: 100,
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
