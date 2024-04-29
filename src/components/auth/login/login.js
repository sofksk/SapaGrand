import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Button } from "@rneui/themed";
import logotype from "../../../assets/logo.png";

const Login = (props) => {
  const [phone, setPhone] = useState();
  const [showErr, setShowErr] = useState(false);

  const HandleSendSms = () => {
    if (phone === "" || phone === "+7" || phone === undefined) {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 2000);
    } else {
      props.HandleSendSms(phone);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContent}>
        <Image style={styles.Image} source={logotype} />
      </View>
      <View style={styles.controllersContent}>
        <View style={styles.inputsContent}>
          <TextInput
            style={styles.inputs}
            placeholder="Номер телефона"
            defaultValue="+7"
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setPhone(text);
            }}
          />
          <Button onPress={HandleSendSms} title="Отправить" type="outline" />
          {showErr ? (
            <Text style={styles.wrongNumber}>
              Введите номер например +77070001122
            </Text>
          ) : (
            ""
          )}
          <View style={styles.UserConfig}>
            <Text style={styles.userConfigText}>
              После успешной авторизации вы соглашаетесь с условиями
              конфиденциальности и политикой обработки персональных данных.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 1,
    height: height * 1,
  },
  imageContent: {
    width: width * 1,
    margin: 0,
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 150,
    height: 150,
  },
  controllersContent: {
    width: width * 1,
    height: 300,
    padding: 40,
  },
  inputsContent: {
    flex: 1,
    flexDirection: "column",
    height: height * 1,
  },
  inputs: {
    height: 50,
    borderWidth: 0.3,
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  UserConfig: {
    marginTop: 50,
  },
  userConfigText: {
    textAlign: "center",
  },
  wrongNumber: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "red",
  },
});

export default Login;
