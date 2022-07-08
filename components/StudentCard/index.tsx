import { View, Text, Image, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const index = (props) => {
  const [studentStatus, setStudentStatus] = useState(false);
  const { id, imageUri, name } = props.student;

  const toggleSwtich = () => {
    console.log("pressed");

    setStudentStatus(!studentStatus);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.photo}
        />
        <View style={styles.toggleContainer}>
          <Switch
            style={styles.toggle}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={studentStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwtich}
            value={studentStatus}
          />
        </View>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default index;
