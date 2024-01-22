import { View, Text } from "react-native";
import React from "react";
import ButtonHome from "../../Components/home/Home";
import ButtonAbout from "../../Components/home/About";
import { Actions } from "react-native-router-flux";

const lab4 = () => {
  return (
    <View>
      <ButtonHome onPress={() => Actions.home()} />
      <ButtonAbout onPress={() => Actions.about()} />
      {/* <Button /> */}
    </View>
  );
};

export default lab4;
