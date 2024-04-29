import React, { UseState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";

const News = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.news}>
        <View style={styles.newsText}>
          <Text style={styles.texts}>
            Новости что то тут написано но я не знаю что...
          </Text>
        </View>
        <View style={styles.newsDescr}>
          <Text style={styles.descrTexts}>
            Какой то большой текст ну типа описание нашого новостя или как его
            там я не знаю но что то большое
          </Text>
        </View>
      </View>
      <View style={styles.news}>
        <View style={styles.newsText}>
          <Text style={styles.texts}>
            Ого еще новости не такие красивые но потом будем еще дорабатывать
            наше приложение.
          </Text>
        </View>
        <View style={styles.newsDescr}>
          <Text style={styles.descrTexts}>
            Здесь у нас текст про то что пока что у нас дизайн не такой уж
            хороший ну в аккаунте но за то это быстрее чем другие... Здесь у нас
            текст про то что пока что у нас дизайн не такой уж хороший ну в
            аккаунте но за то это быстрее чем другие...
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    padding: 10,
  },
  news: {
    padding: 10,
    margin: 10,
    borderWidth: 0.3,
    borderRadius: 8,
    borderColor: "#1283FF",
  },
  newsText: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1283FF",
    marginBottom: 20,
  },
  texts: { fontSize: 18, fontWeight: "600" },
  newsDescr: { padding: 10 },
  descrTexts: { fontSize: 16 },
});

export default News;
