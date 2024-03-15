import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import User from "../screens/User";

const Stack = createNativeStackNavigator();

export const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Lista de Produtos",
          headerStyle:{
            backgroundColor: "#3E7786",
          },
          headerTintColor: "#ffff"
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor:"#3E7786",
        tabBarInactiveBackgroundColor: "#3E7786"
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#ffff" />
          ),
          tabBarActiveBackgroundColor: "#3E7786",
          tabBarInactiveBackgroundColor: "#3E7786"
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" size={30} color="#ffff" />
            
          ),
          tabBarActiveBackgroundColor: "#3E7786",
          tabBarInactiveBackgroundColor: "#3E7786"
        }}
      />
    </Tab.Navigator>
  );
};
