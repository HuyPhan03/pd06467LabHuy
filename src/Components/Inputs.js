import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { Component, useState } from "react";
class Inputs extends Component {
  state = {
    email: "",
    password: "",
  };
  handledEmail = (text) => {
    this.setState({ email: text });
  };
  handledPassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + "\n" + " password: " + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid={"transparent"}
          placeholder=" Email"
          placeholderTextColor={"#9a73ef"}
          autoCapitalize="none"
          onChangeText={this.handledEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid={"transparent"}
          placeholder=" Password"
          placeholderTextColor={"#9a73ef"}
          autoCapitalize="none"
          onChangeText={this.handledPassword}
        />
        <TouchableOpacity
          style={styles.submitBottom}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitBottomText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
  },
  submitBottom: {
    backgroundColor: "blue",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitBottomText: {
    color: "white",
  },
});
