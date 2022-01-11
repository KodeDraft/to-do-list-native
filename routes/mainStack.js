import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import DetailedToDo from "../screens/DetailedToDo";

const screens = {
  Home: {
    screen: Home,
  },
  DetailedToDo: {
    screen: DetailedToDo,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
