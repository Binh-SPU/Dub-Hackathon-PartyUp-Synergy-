import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function AppIcon({
  name,
  isContainer = true,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) {
  return (
    <>
      {isContainer && (
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name={name} size={size * 0.5} color={iconColor} />
        </View>
      )}

      {!isContainer && (
        <View style={{ marginHorizontal: 5, marginVertical: 25 }}>
          <Icon name={name} size={size * 0.5} color={iconColor} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default AppIcon;
