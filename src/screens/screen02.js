import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

export const Screen02 = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/items/logo.png')}
          resizeMode="contain"
        />
        <Text style={styles.textNameScreen}>Screen 02</Text>

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

  text: {
    marginTop: 150,
    color: 'grey',
  },
  textNameScreen: {
    marginTop: 200,
    marginBottom: 100,
    fontSize: 22,
  },
})
