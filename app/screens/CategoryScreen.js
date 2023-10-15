import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function CategoryScreen() {
  return (
    <Screen style={styles.container}>
      <View>
        <View style={styles.horizontalView}>
          <ListItem
            image={require("../assets/battlefield-logo.jpg")}
            children="Battlefield V"
          />
          <ListItem
            image={require("../assets/leaguge-of-legends-logo.avif")}
            children="LOL"
          />
          <ListItem
            image={require("../assets/remnant2-logo.jpg")}
            children="Remnant 2"
          />
        </View>
        <View style={styles.horizontalView}>
          <ListItem
            image={require("../assets/ow2-logo.png")}
            children="Overwatch 2"
          />
          <ListItem
            image={require("../assets/dead-by-daylight-logo.jpg")}
            children="DBD"
          />
          <ListItem
            image={require("../assets/sea-of-thieves-logo.png")}
            children="Sea of Thieves"
          />
        </View>
        <View style={styles.horizontalView}>
          <ListItem
            image={require("../assets/state-of-decay-2-logo.jpg")}
            children="State of Decay 2"
          />
          <ListItem
            image={require("../assets/phasmophobia-logo.jpg")}
            children="Phasmophobia"
          />
          <ListItem
            image={require("../assets/warframe-logo.png")}
            children="Warframe"
          />
        </View>
        <View style={styles.horizontalView}>
          <ListItem
            image={require("../assets/valorant-logo.jpg")}
            children="Valorent"
          />
          <ListItem
            image={require("../assets/rainbox-six-siege-logo.png")}
            children="R6"
          />
          <ListItem
            image={require("../assets/apex-legend-logo.jpg")}
            children="Apex Legends"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },
  horizontalView: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

export default CategoryScreen;
