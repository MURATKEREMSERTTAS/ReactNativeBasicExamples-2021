import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BoxScreen from "./src/screens/BoxScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ExampleComponent from "./src/screens/ExampleComponent";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    Example : ExampleComponent,
    List: ListScreen,
    ColorScreen : ColorScreen,
    SquareScreen : SquareScreen,
    CounterScreen : CounterScreen,
    ImageScreen : ImageScreen,
    TextScreen : TextScreen,
    Box : BoxScreen,
    SignIn : SignInScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
