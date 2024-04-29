import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Dimensions } from "react-native";
import Login from "../../components/auth/login/login";

const Auth = () => {
  const [phoneNumber, setPhone] = useState("");
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  const sendVerification = async () => {};

  const HandleSendSms = (phone) => {
    const randomCode = Math.floor(Math.random() * 5000).toString();
    setCode(randomCode);
    setPhone(phone);
    // sendVerification();
    navigation.navigate("SMS", { phoneNumber: phone, code: randomCode });
  };

  return (
    <View style={styles.authContent}>
      <View style={styles.authContainer}>
        <Login HandleSendSms={HandleSendSms} />
        <View id="recaptcha-container"></View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    width: width * 1,
    height: width * 1,
  },
  authContainer: {
    flex: 1,
    width: width * 1,
    height: width * 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Auth;
