import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Auth from "./src/containers/auth/auth";
import GetSms from "./src/components/auth/getSMS/getSMS";
import MainPage from "./src/components/mainPage/mainPage";
import User from "./src/components/user/user";
import News from "./src/components/news/news";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Test from "./src/components/tests/test";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const route = useRoute();
  const { phoneNumber } = route.params;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Курстар"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
        component={MainPage}
      />
      <Tab.Screen
        name="Тесты"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" color={color} size={size} />
          ),
        }}
        component={Test}
      />
      <Tab.Screen
        name="Новости"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
        component={News}
      />
      <Tab.Screen
        name="Аккаунт"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
        component={User}
        initialParams={{ phoneNumber: phoneNumber }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Регистрация" component={Auth} />
        <Stack.Screen name="SMS" component={GetSms} />
        <Stack.Screen
          name="Главная"
          options={{ headerLeft: null, headerShown: false }}
          component={MainTabNavigator}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
