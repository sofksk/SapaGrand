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

const Test = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.choose}>
        <TouchableOpacity style={styles.lessons}>
          <View style={styles.lessonName}>
            <Text style={styles.Name}>Тестілеу</Text>
            <Text style={styles.topText}>
              Ұлттық тестілеу орталығының стандарты бойынша
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lessons}>
          <View style={styles.lessonName}>
            <Text style={styles.Name}>Пән бойынша</Text>
            <Text style={styles.topText}>Тек жалғыз пән бойынша</Text>
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
    padding: 20,
    borderRadius: 8,
    height: 100,
    marginTop: 20,
  },
  lessonName: {
    flex: 1,
    height: height * 1,
    alignItems: "start",
    justifyContent: "center",
  },
  Name: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "700",
    color: "#1283FF",
  },
  topText: {
    fontSize: 14,
  },
});

export default Test;
