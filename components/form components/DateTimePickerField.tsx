import { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

//import DatePicker from the package we installed
import DateTimePicker from "@react-native-community/datetimepicker";

import TextInputField from "./TextInputField";

const DateTimePickerField = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.root} >
      <Text style={styles.titleField}>Date of birth</Text>
      <View style={styles.container}>
      <View
        style={{ padding: 8, width: 35 }}>
        <Entypo name="calendar" size={16} color="#223e4b" />
      </View>
      <View style={styles.dateContainer}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
            style={styles.date}
            display="default"
            />
      </View>
    </View>
    </View>
  );
};

export default DateTimePickerField;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column'
  },
  date: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 100,
    height: 40,
    display: 'flex',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderRadius: 8,
    borderColor: "#223e4b",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   
  },
  titleField: {
    color: 'gray'
  }
});
