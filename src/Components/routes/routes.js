import { View, Text } from "react-native";
import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "../home/Home";
import About from "../home/About";

const Routes = () => {
  return (
    <Router>
      <Stack>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="about" component={About} title="About" />
        </Scene>
      </Stack>
    </Router>
  );
};

export default Routes;
