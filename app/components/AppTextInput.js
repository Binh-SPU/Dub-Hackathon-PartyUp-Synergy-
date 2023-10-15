import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />
      )}
      <TextInput
        style={defaultStyles.textInput}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    width: 380,
    padding: 15,
    marginVertical: 15,
  },
  icon: { marginRight: 10 },
});

export default AppTextInput;
