import {
  View,
  Text,
  TouchableOpacityComponent,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Actions } from "react-native-router-flux";

const Home = () => {
  const gotoAbout = () => {
    Actions.about();
  };
  return (
    <TouchableOpacity style={{ margin: 18 }} onPress={gotoAbout}>
      <Text>This is Home!</Text>
    </TouchableOpacity>
  );
};

export default Home;
