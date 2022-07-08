import { View, Text, Image, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const index = (props) => {
  const [estudentStatus, setEstudentStatus] = useState(false);
  const {id, image, name} = props.student

  const toggleSwtich = () => {
    
    setEstudentStatus(!estudentStatus);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.photo}
        />
        <Pressable>
          <Switch
          style={styles.toggle}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={estudentStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwtich}
            value={estudentStatus}
          />
        </Pressable>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default index;
