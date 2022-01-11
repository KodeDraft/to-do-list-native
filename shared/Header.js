import React, { useState, useEffect, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation, titleText, onPress, icon }) => {
  const [title, setTitle] = useState("");
  const [back, setBack] = useState("");

  const navigateAddToDO = () => {
    navigation.navigate("AddToDo");
  };

  return (
    <>
      <View style={headerStyles.headerContainer}>
        <Text style={headerStyles.headerTitle}>{titleText}</Text>
        <View style={headerStyles.addBtnArea}>
          <TouchableOpacity onPress={onPress} style={headerStyles.icon}>
            {icon}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const headerStyles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: "white",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "orange",
    textAlign: "center",
    lineHeight: 100,
    fontSize: 40,
    paddingLeft: 20,
    fontFamily: "headerTitle",
  },

  addBtnArea: {
    alignSelf: "flex-end",
  },
  icon: {
    paddingRight: 30,
    transform: [{ translateY: -10 }],
  },
});
export default Header;
