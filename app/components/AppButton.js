import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function AppButton({ title, onPress, marginVertical, color = "white" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], marginVertical: marginVertical },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    alignSelf: "stretch",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
