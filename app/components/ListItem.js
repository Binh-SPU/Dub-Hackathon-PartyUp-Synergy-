import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, children }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
        <AppText
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={styles.text}
        >
          {children}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 80,
    marginBottom: 20,
    padding: 5,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 2,
    width: 75,
    height: 75,
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    top: 80,
    fontSize: 13,
    paddingTop: 10,
    alignSelf: "center",
  },
});

export default ListItem;
