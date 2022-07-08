import { TextInput as RNTextInput, View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import React from 'react'

const validationColor = '#223e4b'
const TextInput = ({label, icon, ...otherProps}) => {
  
  return (
    <View style={styles.root}>
      <Text style={{color: 'gray'}}>{label}</Text>
    <View style={styles.inputContainer}>
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
          />
      </View>
    </View>
          </View>
  )
}

export default TextInput


const styles = StyleSheet.create({
  root: {
    flexDirection: 'vertical'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderColor: validationColor,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8

  }
})