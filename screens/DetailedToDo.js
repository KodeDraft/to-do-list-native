import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../shared/Header";
import { AntDesign } from "@expo/vector-icons";

export default function DetailedToDo({ navigation, route }) {
  const detailedTask = route.params;

  return (
    <>
      <Header
        titleText="Task Details"
        onPress={() => navigation.navigate("Home")}
        icon={<AntDesign name="back" size={30} color="orange" />}
      />
      <View style={detailedTaskStyles.taskContainer}>
        <Text
          style={{
            ...detailedTaskStyles.taskTitle,
            color: detailedTask.priorityColor,
            fontFamily: "descText",
          }}
        >
          {detailedTask.title}
        </Text>
        <Text style={detailedTaskStyles.label}>
          Task Description:{" "}
          <Text
            style={{
              color: detailedTask.priorityColor,
              fontFamily: "descText",
            }}
          >
            {detailedTask.desc}
          </Text>
        </Text>
        <Text style={detailedTaskStyles.label}>
          Task Priority:{" "}
          <Text
            style={{
              color: detailedTask.priorityColor,
              fontFamily: "descText",
            }}
          >
            {detailedTask.priority}
          </Text>
        </Text>
        <Text style={detailedTaskStyles.label}>
          Task Created Date:{" "}
          <Text
            style={{
              color: detailedTask.priorityColor,
              fontFamily: "descText",
            }}
          >
            {detailedTask.date}
          </Text>
        </Text>
        <Text style={detailedTaskStyles.label}>
          Task Created Time:{" "}
          <Text style={{ color: detailedTask.priorityColor }}>
            {detailedTask.time}
          </Text>
        </Text>
      </View>
    </>
  );
}
const detailedTaskStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  taskContainer: {
    backgroundColor: "#fff",
    height: "40%",
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
  },
  taskTitle: {
    color: "black",
    fontSize: 40,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily: "titleText",
  },
  label: {
    color: "#000",
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
  },
  customDelBtn: {
    backgroundColor: "red",
    padding: 15,
    alignSelf: "center",
    width: "90%",
    marginTop: 20,
  },
  customDelBtnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
