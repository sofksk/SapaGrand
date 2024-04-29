import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Dimensions, StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const GetSms = () => {
  const [confirmCode, setConfirmCode] = useState("");
  const route = useRoute();
  const { phoneNumber, code } = route.params;
  const navigation = useNavigation();
  const [errorShow, setErrorShow] = useState(false);

  const HandleVerifySms = () => {
    code === confirmCode
      ? navigation.navigate("Главная", { phoneNumber: phoneNumber })
      : setErrorShow(true);
    setInterval(() => {
      setErrorShow(false);
    }, 5000);
  };

  console.log(phoneNumber, code);

  return (
    <View style={styles.container}>
      <View style={styles.insideView}>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => setConfirmCode(text)}
          placeholder="SMS..."
          keyboardType="phone-pad"
        />
        <Button onPress={HandleVerifySms} title="Отправить" type="outline" />
        <Text style={styles.TextAbout}>
          Напишите SMS который отправлен по номеру: {phoneNumber}
        </Text>
        {errorShow ? (
          <Text style={styles.error}>Не правильный код...</Text>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    padding: 20,
  },
  insideView: {
    padding: 20,
    height: 400,
  },
  TextAbout: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  Input: {
    height: 50,
    borderWidth: 0.3,
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  error: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default GetSms;
