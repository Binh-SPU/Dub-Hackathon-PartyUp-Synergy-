import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  textLogo: {
    fontSize: 45,
    fontWeight: "600",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
};
