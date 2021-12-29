import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Header = ({ navigation }, props) => {
  const [title, setTitle] = useState("");
  const [back, setBack] = useState("");
  return (
    <>
      <View style={headerStyles.headerContainer}>
        <Text style={headerStyles.textCheck}>{props.titleText} </Text>
      </View>
    </>
  );
};
const headerStyles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: "white",
    paddingTop: 20,
  },
  textCheck: {
    color: "red",
    textAlign: "center",
  },
});
export default Header;
