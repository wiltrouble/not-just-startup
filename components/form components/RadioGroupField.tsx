import React, { useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { StyleSheet, View, Text } from "react-native";
//TODO: recibe data by props

const radioButtonsData: RadioButtonProps[] = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Male",
    value: "Male",
  },
  {
    id: "2",
    label: "Female",
    value: "Female",
  },
];

export default function RadioGroupField() {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={styles.root}>
      <Text style={{color: 'gray'}}>Gender</Text>
      <View style={styles.inputContainer}>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    borderColor: '#223e4b',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
});
