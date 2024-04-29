import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const MainPage = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.choose}>
        <TouchableOpacity style={styles.lessons}>
          <View style={styles.lessonName}>
            <Text style={styles.Name}>Математика</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessons}>
          <View style={styles.lessonName}>
            <Text style={styles.Name}>Математикалык сауаттылык</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    width: width * 1,
    height: height * 1,
    margin: 0,
  },
  choose: {
    padding: 15,
  },
  lessons: {
    borderWidth: 1,
    borderColor: "#1283FF",
    padding: 10,
    borderRadius: 8,
    height: 60,
    marginTop: 20,
  },
  lessonName: {
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
  },
  Name: {
    fontSize: 18,
    color: "#1283FF",
  },
});

export default MainPage;
