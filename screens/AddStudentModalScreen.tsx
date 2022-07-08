import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";

import ButtonField from "../components/form components/ButtonField";
import TextInput from "../components/form components/TextInputField";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import DateTimePickerField from "../components/form components/DateTimePickerField";
import RadioGroupField from "../components/form components/RadioGroupField";


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.fieldContainer}>
        <TextInput label="Student Name" icon="account"
          autoCapitalize="words"
          autoCompleteType="name"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next" />
      </View>
      <View style={styles.fieldContainer}>
        <DateTimePickerField />
      </View>
      <View style={styles.fieldContainer}>
        <RadioGroupField />
      </View>
      <ButtonField label="Submit" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#223e4b",
    fontSize: 20,
    marginBottom: 16,
  },
  fieldContainer: {
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "100%",
  },
});
