import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import defaultStyle from "../config/styles";
import AppIcon from "../components/AppIcon";
import { AppForm, AppFormField } from "../components/forms";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.png")}
    >
      <Screen>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.inputFieldContainer}>
            <AppFormField
              name="email"
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="password"
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />
          </View>
          <SubmitButton title="Login"/>
        </AppForm>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  productName: {
    marginTop: 140,
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 190,
  },
  inputFieldContainer: {
    marginTop: 280,
  },
});

export default LoginScreen;
