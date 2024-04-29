import React, { useState } from "react";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";

const User = ({ route }) => {
  const [userName, setUserName] = useState("");
  const { phoneNumber } = route.params;

  const handleSave = () => {
    console.log(userName, "saved in database");
  };

  const handleLogOut = () => {
    console.log("You loged out");
  };

  return (
    <ScrollView style={style.content}>
      <View style={style.container}>
        <View style={style.aboutMe}>
          <Text style={style.aboutMeText}>Обо мне</Text>
        </View>
        <View style={style.information}>
          <View>
            <View style={style.infoContent}>
              <Ionicons
                style={{ fontSize: 23, alignSelf: "center" }}
                name="call-outline"
              />
              <View style={style.infoTextContent}>
                <Text style={style.texts}>Телефон номер:</Text>
                <Text style={style.texts}>{phoneNumber}</Text>
              </View>
            </View>
            <View style={style.infoContent}>
              <Ionicons
                style={{ fontSize: 23, alignSelf: "center" }}
                name="person-outline"
              />
              <View style={style.infoTextContent}>
                <TextInput
                  onChangeText={(text) => setUserName(text)}
                  style={{ fontSize: 18 }}
                  placeholder="Ваше имя..."
                />
              </View>
            </View>
          </View>
        </View>
        <View style={style.exitButtonContent}>
          <Button
            style={style.button}
            title="Сохранить"
            onPress={handleSave}
            type="outline"
          />
          <Button
            style={style.button}
            onPress={handleLogOut}
            title="Выйти"
            type="outline"
            buttonStyle={{ borderColor: "rgba(214, 61, 57, 1)" }}
            titleStyle={{ color: "rgba(214, 61, 57, 1)", marginHorizontal: 20 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  content: { width: width * 1, height: height * 1, padding: 20 },
  container: { padding: 10 },
  aboutMe: { paddingVertical: 20, marginBottom: 20 },
  aboutMeText: { fontSize: 42, fontWeight: "600" },
  information: {
    marginVertical: 30,
  },
  infoTextContent: {
    marginLeft: 20,
  },
  infoContent: {
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    marginHorizontal: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  texts: { fontSize: 16 },
  exitButtonContent: { marginTop: 30 },
  button: { marginTop: 20 },
});

export default User;
