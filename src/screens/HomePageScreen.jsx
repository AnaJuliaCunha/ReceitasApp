import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function HomePageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas fresquinhas!! 🎉</Text>
      <Button
        title="As melhores receitas você encontra aqui!"
        onPress={() => navigation.navigate("ReceitaPageScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
