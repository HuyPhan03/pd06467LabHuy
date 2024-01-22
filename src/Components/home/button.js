import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

const ButtomHome = (props) => {
  const handlerPress = () => false;
  return (
    <View style={styles.container}>
      <Button onPress={handlerPress} title="Red Button !" color="red" />
      <TouchableOpacity>
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={handlerPress}>
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <Text style={styles.text}>TouchableNativeFeedback</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ButtomHome;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
