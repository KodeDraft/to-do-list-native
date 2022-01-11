import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

// NAVIGATION USES
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import HomeScreen from "./screens/Home";
import DetailedToDoScreen from "./screens/DetailedToDo";

// FONT LOADING USES
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";

const getFonts = () =>
  Font.loadAsync({
    headerTitle: require("./assets/fonts/Pushster-Regular.ttf"),
    titleText: require("./assets/fonts/OpenSans-SemiBoldItalic.ttf"),
    descText: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

export default function App({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailedToDo"
            component={DetailedToDoScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
