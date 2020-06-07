import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListView: ListScreen,
  },
  {
    initialRouteName: "Home",
      defaultNavigationOptions: {
      title: "Ankush Project"
    }
  }
);

export default createAppContainer(navigator);
