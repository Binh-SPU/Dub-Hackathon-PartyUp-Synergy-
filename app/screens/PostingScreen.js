import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppIcon from "../components/AppIcon";
import Card from "../components/Card";

function PostingScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.firstLine}>
        <Image style={styles.image} source={require("../assets/hung.jpg")} />
        <AppText style={styles.name}>Sirget</AppText>
        <View style={styles.icon}>
          <AppIcon isContainer={false} name="dots-horizontal" size={60} />
        </View>
      </View>
      <AppText style={styles.title}>NEED MEDIC !!</AppText>
      <Card
        image={require("../assets/battlefield.jpg")}
        title="GAME:"
        titleRhs="BATTLEFIELD V"
        subTitle="PLAYER NEED:"
        subTitleRhs="2"
        subTitle2="DESCRIPTION:"
        subTitle2Rhs="I need a medic to babysit me."
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },
  firstLine: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "normal",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontStyle: "italic",
  },
  icon: {
    paddingLeft: 230,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    marginVertical: 5,
    marginBottom: 20,
  },
});

export default PostingScreen;
