import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtonField = ({label, onPress}) => {

  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonField

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94832'
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase'
  }
})