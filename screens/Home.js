import React from "react";
import { View, Text, Button } from "react-native";
import Header from "../shared/Header";
import ToDo from "./ToDo";

const Home = ({ navigation }) => {
  return (
    <View>
      <ToDo navigation={navigation} />
    </View>
  );
};

export default Home;
