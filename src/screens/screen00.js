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
  Alert,
} from 'react-native'

import { useSelector } from 'react-redux'

export const Screen00 = ({ navigation }) => {
  const { username, password } = useSelector((state) => state.authReducer)
  const [usernameIn, setUsernameIn] = useState('')
  const [passwordIn, setPaswordIn] = useState('')

  const goToNextScreen = () => {
    if (username === usernameIn && password === passwordIn) {
      navigation.navigate('Drawer')
    } else {
      Alert.alert('Неверно введен логин  или пароль!!!')
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

        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="username"
          selectionColor="black"
          value={usernameIn}
          onChangeText={(text) => setUsernameIn(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="password"
          selectionColor="black"
          secureTextEntry
          value={passwordIn}
          onChangeText={(text) => setPaswordIn(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToNextScreen()}
        >
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.textIntro}>Saved username/password</Text>
        <Text style={styles.textIntro}>username: {username}</Text>
        <Text style={styles.textIntro}>password: {password}</Text>
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
  textIntro: {
    marginVertical: 5,
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
