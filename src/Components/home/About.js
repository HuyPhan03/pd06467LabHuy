import {
  View,
  Text,
  TouchableOpacityComponent,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Actions } from "react-native-router-flux";

const About = () => {
  const gotoHome = () => {
    Actions.home();
  };
  return (
    <TouchableOpacity style={{ margin: 18 }} onPress={gotoHome}>
      <Text>This is About!</Text>
    </TouchableOpacity>
  );
};

export default About;
